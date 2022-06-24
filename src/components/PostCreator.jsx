import React, {useState} from 'react';
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/Input/MyInput";

const PostCreator = ({create}) => {
    const[post, setPost] = useState({title: '', body: ''});

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            id: Date.now(),
            ...post
        }
        create(newPost)
        setPost({title: '', body: ''})
    }
    return (
        <form>
            <MyInput
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
                type="text"
                placeholder="Название поста"/>
            <MyInput
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
                type="text"
                placeholder="Описание поста"/>
            <MyButton onClick={addNewPost} alt='alt button' autoFocus>Создать пост!</MyButton>
        </form>
    );
};

export default PostCreator;