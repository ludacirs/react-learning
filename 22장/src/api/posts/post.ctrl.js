import Post from "../../models/post";
import mongoose from "mongoose";
import Joi from "joi";

let postId = 1;

export const checkObjectId = (ctx,next)=>{
    const {ObjectId} = mongoose.Types;

    const {id} = ctx.params;
    if(!ObjectId.isValid(id)) {
        ctx.status = 400;
        return ;
    }
    return next();
};
const posts = [
    {
        id: 1,
        title : 'title',
        body : 'contents',
    },
];

export const write = async ctx =>{

    const schema = Joi.object().keys({
        title : Joi.string().required(),
        body : Joi.string().required(),
        tags : Joi.array().items(Joi.string()).required(),
    });

    const result = schema.validate(ctx.request.body);
    if(result.error) {
        ctx.status = 400;
        return;
    }
    const {title, body, tags} = ctx.request.body;

    const post  = new Post({
        title,
        body,
        tags,
    });
    try{
        await post.save();
        ctx.body = post;
    } catch (e){
        ctx.throw(500,e);
    }
};

export const list = async ctx=>{
    const page = parseInt((ctx.query.page || 1),10);
    if( page < 1){
        ctx.status = 400;
        return;
    }
    try{
        const posts = await Post.find()
            .sort({_id:-1})
            .skip((page-1)*10)
            .limit(10)
            .lean()
            .exec();
        const postCount = await Post.countDocuments().exec();
        ctx.set('Last-Page', Math.ceil(postCount/10));
        ctx.body = posts.map(post =>({
                ...post,
                body : post.body.length <200 ? post.body : `${post.body.slice(0,200)}...`,
            }));
    } catch (e){
        ctx.throw(500,e);
    }
};

export const read = async ctx=>{
    const {id} = ctx.params;
    try{
        const post = await Post.findById(id).exec();
        if(!post){
            ctx.status = 404;
            return;
        }
        ctx.body = post;
    }catch (e){
        ctx.throw(500,e);
    }
};

export const remove = async ctx=>{
    const {id} = ctx.params;
    try{
        await Post.findByIdAndRemove(id).exec();
        ctx.status = 204;
    }catch (e){
        ctx.throw(500,e);
    }
};

export const update = async ctx => {
    const schema = Joi.object().keys({
        title : Joi.string(),
        body : Joi.string(),
        tags : Joi.array().items(Joi.string()),
    });
    const result = schema.validate(ctx.request.body);
    if(result.error){
        ctx.status =400;
        ctx.body = result.error;
        return;
    }
    const {id} = ctx.params;
    try{
        const post = Post.findByIdAndUpdate(id,ctx.request.body, {
            new: true,
        }).exec();
        if(!post){
            ctx.status = 404;
            return;
        }
        ctx.body = post;
    }catch (e){
        ctx.throw(500,e);
    }
};