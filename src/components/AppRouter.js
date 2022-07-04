import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import About from "../pages/About";
import PostPage from "../pages/PostPage";
import PostIdPage from "./PostIdPage";

const AppRouter = () => {
	return (
		<Routes>
			<Route path="/about" element={<About/>}/>
			<Route path="/posts" element={<PostPage/>}/>
			<Route path="/posts/:id" element={<PostIdPage/>}/>
			<Route path="*" element={
				/* replace - заменит текущую запись в стеке истории вместо добавления новой.*/
				<Navigate to="/posts" replace />
			} />
		</Routes>
	);
};

export default AppRouter;