import {useMemo} from "react";
import {tab} from "@testing-library/user-event/dist/tab";

export const useSortedPosts = (posts, sort) => {
	return useMemo(() => {
		if (sort) {
			return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
		}
		return posts;
	}, [sort, posts]);
}

export const usePosts = (posts, sort, query) =>{
	const sortedPosts = useSortedPosts(posts, sort);

	return useMemo(() => {
		return sortedPosts.filter(post => post.title.toLowerCase().includes(query))
	}, [query, sortedPosts]);
}

export const usePagination = (totalPage) =>{
	return  useMemo(()=>{
		let result = [];
		for(let i = 0; i < totalPage; ++i){
			result.push(i + 1);
		}
		return result;
	},[totalPage]);
}