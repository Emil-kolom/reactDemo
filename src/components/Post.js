import React from 'react';
import '../style/post.css'
import MyButton from "./UI/button/MyButton";

const Post = (props) => {
    return (
        <div>
            <div className={"post"}>
                <div className={"post__content"}>
                    <strong>{props.post.id}. {props.post.title}</strong>
                    <div>{props.post.body}</div>
                </div>
                <MyButton>Удалить</MyButton>
            </div>
        </div>
    );
};

export default Post;