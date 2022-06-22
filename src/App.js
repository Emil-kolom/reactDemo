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
  const [posts2, setPosts2] = useState([
    {id: 1, title: 'Python', body: "Description"},
    {id: 2, title: 'Python 2', body: "Description"},
    {id: 3, title: 'Python 3', body: "Description"}
  ]);

    return (
    <div className="App">
      <PostCreator/>
      <PostList posts={posts} title="Список постов 1"/>
      <PostList posts={posts2} title="Список постов 2"/>
    </div>
  );
}

export default App;
