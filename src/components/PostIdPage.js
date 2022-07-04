import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import PostService from "../API/PostService";
import {useFetching} from "../hooks/useFetching";
import Loader from "./UI/loader/Loader";


const PostIdPage = () => {
	const params = useParams();
	const [post, setPost] = useState({});
	const [comments, setComments] = useState([]);

	const [fetchPostById, isLoading, error] = useFetching(async (id)=> {
		const response = await PostService.getPostById(id);
		setPost(response.data);
	})

	const [fetchCommentsByPostId, isCommentsLoading, commentsError] = useFetching(async (id)=> {
		const response = await PostService.getCommentsByPostId(id);
		setComments(response.data);
	})

	useEffect(()=>{
		fetchPostById(params.id);
		fetchCommentsByPostId(params.id);
	}, [])

	return (
		<div>
			{ isLoading
				? <Loader/>
				: <div>
						<h2>{post.id}. {post.title}</h2>
						<p>{post.body}</p>
					</div>
			}
			<br/>
			<h2 style={{marginBottom:'15px'}}>Комментарии</h2>
			{isCommentsLoading
				? ''
				: comments.map(comment => {
					return <div key={comment.id} style={{marginBottom: '10px'}}>
						<h3>{comment.name}.</h3>
						<p>{comment.body}</p>
						</div>
				})
			}
		</div>
	);
};

export default PostIdPage;