import React from 'react';

const SearchBox = ({ searchchange }) => {
	return (
		<div className='pa2'>
			<input 
				className='pa3 ba b--red bg-washed-red'
				type='search'
				placeholder='search places' 
				onChange={searchchange}
			/>
		</div>
	);
}

export default SearchBox;