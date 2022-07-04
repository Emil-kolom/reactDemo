import React from 'react';
import '../style/post.css'
import MyButton from "./UI/button/MyButton";
import {useNavigate} from "react-router-dom";

const Post = (props) => {
  let navigate = useNavigate();

    const navToIdPage = (e) => {
      e.preventDefault();
      navigate(`/posts/${props.post.id}`);
    }

    return (
        <div>
            <div className={"post"}>
                <div className={"post__content"}>
                    <strong onClick={navToIdPage}
                            className='post__title'
                    >{props.post.id}. {props.post.title}</strong>
                    <div>{props.post.body}</div>
                </div>
                <MyButton onClick={()=> props.remove(props.post)}>Delete!</MyButton>
            </div>
        </div>
    );
};

export default Post;