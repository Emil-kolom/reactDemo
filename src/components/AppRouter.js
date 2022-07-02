import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import About from "../pages/About";
import PostPage from "../pages/PostPage";

const AppRouter = () => {
	return (
		<Routes>
			<Route path="/about" element={<About/>}/>
			<Route path="/posts" element={<PostPage/>}/>
			<Route path="*" element={
				/* replace - для избегания дополнительных перенаправлений после того, как пользователь нажмет «Назад»*/
				<Navigate to="/posts" replace />
			} />
		</Routes>
	);
};

export default AppRouter;