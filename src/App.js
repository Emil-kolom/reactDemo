import React, {useEffect, useState} from "react";
import './style/app.css'
import PostList from "./components/PostList";
import PostCreator from "./components/PostCreator";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/modal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import {usePosts} from "./hooks/usePosts";
import PostService from "./API/PostService";
import Loader from "./components/UI/loader/Loader";
import {useFetching} from "./hooks/useFetching";

function App() {
	const [posts, setPosts] = useState([]);
	const [filter, setFilter] = useState({sort:'', query:''});
	const [modal, setModal] = useState(false);
	const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query);
	const [fetchPosts, isPostLoading, postError] = useFetching(async ()=>{
		const posts = await PostService.getAll();
		setPosts(posts);
	})

	//Второй параметр - отслеживаемые компоненты
	//Возвращаемое значение - при unmount событии
	useEffect(()=>{
			fetchPosts().catch((e)=>{
				console.log(e)
			});
		}, []);

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
			{isPostLoading
				? <div style={{display:"flex", justifyContent: "center"}}><Loader/></div>
				: <PostList remove={removePost} posts={sortedAndSearchPosts} title="Список постов 1"/>
			}
		</div>
	);
}

export default App;
