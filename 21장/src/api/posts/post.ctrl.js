let postId = 1;

const posts = [
    {
        id: 1,
        title : 'title',
        body : 'contents',
    },
];

exports.write = ctx =>{
    const {title, body} = ctx.request.body;

    postId += 1;
    const post = {id :postId, title, body};
    posts.push(post);
    ctx.body = post;
};

exports.list = ctx=>{
    ctx.body = posts;
};

exports.read = ctx=>{
    const {id} = ctx.params;

    const post = posts.find(p=> p.id.toString()===id);
    if(!post) {
        ctx.status = 404;
        ctx.body = {
            message : 'no post',
        };
        return ;
    }
    ctx.body = post;
};

exports.remove = ctx=>{
    const {id} = ctx.params;

    const index = posts.findIndex(p=> p.id.toString()=== id);

    if(index===-1){
        ctx.status = 404;
        ctx.body = {
            message : 'no post',
        };
        return ;
    }
    posts.splice(index,1);
    ctx.status = 204;
};

exports.replace = ctx => {
    // PUT 메서드는 전체 포스트 정보를 입력하여 데이터를 통째로 교체할 때 사용합니다.
    const { id } = ctx.params;
    // 해당 id를 가진 post가 몇 번째인지 확인합니다.
    const index = posts.findIndex(p => p.id.toString() === id);
    // 포스트가 없으면 오류를 반환합니다.
    if (index === -1) {
        ctx.status = 404;
        ctx.body = {
            message: '포스트가 존재하지 않습니다.',
        };
        return;
    }
    // 전체 객체를 덮어씌웁니다.
    // 따라서 id를 제외한 기존 정보를 날리고, 객체를 새로 만듭니다.
    posts[index] = {
        id,
        ...ctx.request.body,
    };
    ctx.body = posts[index];
};

/* 포스트 수정(특정 필드 변경)
PATCH /api/posts/:id
{ title, body }
*/
exports.update = ctx => {
    // PATCH 메서드는 주어진 필드만 교체합니다.
    const { id } = ctx.params;
    // 해당 id를 가진 post가 몇 번째인지 확인합니다.
    const index = posts.findIndex(p => p.id.toString() === id);
    // 포스트가 없으면 오류를 반환합니다.
    if (index === -1) {
        ctx.status = 404;
        ctx.body = {
            message: '포스트가 존재하지 않습니다.',
        };
        return;
    }
    // 기존 값에 정보를 덮어씌웁니다.
    posts[index] = {
        ...posts[index],
        ...ctx.request.body,
    };
    ctx.body = posts[index];
};