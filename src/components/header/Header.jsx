import './Header.css';
import React from 'react';

export function Header() {
	return (
	<nav>
		<div className='Header'>
			<a href='' id='title'> React Movies</a>
			<a href='https://github.com/HeavenlyGandalf?tab=repositories' id='repo'>Repo</a>
		</div>
	</nav>
	)
}