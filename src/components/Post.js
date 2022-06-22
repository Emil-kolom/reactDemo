import React from 'react';
import '../style/post.css'

const Post = (props) => {
    return (
        <div>
            <div className={"post"}>
                <div className={"post__content"}>
                    <strong>{props.post.id}. {props.post.title}</strong>
                    <div>{props.post.body}</div>
                </div>
            </div>
        </div>
    );
};

export default Post;