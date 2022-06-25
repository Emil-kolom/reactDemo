import React, {useMemo, useState} from "react";
import './style/app.css'
import PostList from "./components/PostList";
import PostCreator from "./components/PostCreator";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/Input/MyInput";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/modal/MyModal";
import MyButton from "./components/UI/button/MyButton";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Map', body: "Description"},
        {id: 2, title: 'In object', body: "Description"},
        {id: 3, title: 'post', body: "Description"}
    ]);
    const [filter, setFilter] = useState({sort:'', query:''});
    const [modal, setModal] = useState(false);

    //useMemo - кеширует и отслеживает изменения каждого объекта из переданных в массиве 2 параметром
    const sortedPosts = useMemo(()=>{
        console.log('Отработала ф-ция')
        if(filter.sort){
            return [...posts].sort((a,b)=> a[filter.sort].localeCompare(b[filter.sort]));
        }
        return posts;
    }, [filter.sort, posts]);

    const sortedAndSearchPosts = useMemo(()=>{
        return sortedPosts.filter( post => post.title.toLowerCase().includes(filter.query))
    }, [filter.query, sortedPosts])

    const createPost = (newPost) =>{
        setPosts([...posts, newPost])
    }

    function removePost(post){
        setPosts(posts.filter(p=>p.id !== post.id))
    }

    return (
        <div className="App">
            <MyButton onClick={()=>setModal(true)}>
                Создать пост
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostCreator create={createPost}/>
            </MyModal>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            <PostList remove={removePost} posts={sortedAndSearchPosts} title="Список постов 1"/>
        </div>
    );
}

export default App;
