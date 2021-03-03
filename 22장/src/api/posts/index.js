import Router from 'koa-router';
import * as postsCtrl from './post.ctrl';
import {checkObjectId} from "./post.ctrl";

const posts = new Router();

posts.get('/',postsCtrl.list);
posts.post('/',postsCtrl.write);
posts.get('/:id',checkObjectId, postsCtrl.read);
posts.delete('/:id',checkObjectId, postsCtrl.remove);
posts.patch('/:id',checkObjectId, postsCtrl.update);

export default posts;