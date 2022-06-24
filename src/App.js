import React, {useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import Post from "./components/Post";
import './style/app.css'
import PostList from "./components/PostList";
import PostCreator from "./components/PostCreator";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Map', body: "Description"},
    {id: 2, title: 'In object', body: "Description"},
    {id: 3, title: 'post', body: "Description"}
  ]);

  const createPost = (newPost) =>{
    setPosts([...posts, newPost])
  }

  function removePost(post){
    setPosts(posts.filter(p=>p.id !== post.id))
  }

    return (
    <div className="App">
      <PostCreator create={createPost}/>
      {posts.length !== 0
          ?
          <PostList remove={removePost} posts={posts} title="Список постов 1"/>
          :
          <h1 style={{textAlign: 'center'}}>Посты не найдены</h1>
      }
    </div>
  );
}

export default App;
