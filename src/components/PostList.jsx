import React from 'react';
import Post from "./Post";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostList = ({posts, title, remove}) => {

	if(!posts.length){
		return <h1 style={{textAlign: 'center'}}>Посты не найдены</h1>
	}

	return (
		<div>
			<h1 style={{textAlign: 'center'}}>{title}</h1>
			<TransitionGroup>
				{posts.map(post =>
					<CSSTransition
						key={post.id}
						timeout={500}
						classNames="post"
					>
						<Post remove={remove} post={post} />
					</CSSTransition>
				)}
			</TransitionGroup>
		</div>
	);
};

export default PostList;