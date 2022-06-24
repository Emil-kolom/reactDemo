import React, {useRef, useState} from 'react';
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/Input/MyInput";

const PostCreator = () => {
    const[title, setTitle] = useState('')

    /////
    const bodyInputRef = useRef()
    /////

    const addNewPost = (e) => {
        e.preventDefault();
        console.log(bodyInputRef.current.value)
    }
    return (
        <form>
            {/*Управляемый компонент*/}
            <MyInput
                value={title}
                onChange={e => setTitle(e.target.value)}
                type="text"
                placeholder="Название поста"/>
            {/*Неуправляемый*/}
            {/*<input ref={bodyInputRef} type={'text'}/>*/}
            <MyInput
                //Ссылается сам на себя
                ref={bodyInputRef}
                type="text"
                placeholder="Описание поста"/>
            <MyButton onClick={addNewPost} alt='alt button' autoFocus>Создать пост!</MyButton>
        </form>
    );
};

export default PostCreator;