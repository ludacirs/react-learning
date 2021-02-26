import React from 'react';

const Sample = ({loadingPost, loadingUsers, post, users}) => {
    console.log(loadingPost);
    console.log(loadingUsers)
    return (
        <div>
            <section>
                <h1>POST</h1>
                {loadingPost && 'loading...'}
                {!loadingPost && post && (
                    <div>
                        <h3>{post.title}</h3>
                        <h3>{post.body}</h3>
                    </div>
                )}
            </section>
            <hr/>
            <section>
                <h1>user list</h1>
                {loadingUsers && 'loading...'}
                {!loadingUsers && users && (
                    <ul>
                        {users.map(user=><li key={user.id}> {user.username} {user.email}</li>)}
                    </ul>
                )}
            </section>
        </div>
    );
};

export default Sample;
