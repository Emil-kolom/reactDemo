import React from 'react';
import MyButton from "./UI/button/MyButton";

const PostCreator = () => {
    return (
        <form>
            <input type="text" placeholder="Название поста"/>
            <input type="text" placeholder="Описание поста"/>
            <MyButton alt='alt button' autoFocus>Создать пост!</MyButton>
        </form>
    );
};

export default PostCreator;