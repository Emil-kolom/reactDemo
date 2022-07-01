import React from 'react';
import MyButton from "../button/MyButton";
import {usePagination} from "../../../hooks/usePosts";

const Pagination = ({totalPages, page, changePage}) => {
	let pagesArray = usePagination(totalPages);

	return (
		<div className='page__wrapper'>
			{pagesArray.map((value)=>
				<MyButton
					onClick={()=>changePage(value)}
					key={value}
					addedClass={page === value?'page_current':''}
				>
					{value}
				</MyButton>
			)
			}
		</div>
	);
};

export default Pagination;