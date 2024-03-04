import './Footer.css';
import React from 'react';

export function Footer() {
	return (
	<div className='Footer'>
		<p id='info'>© {new Date().getFullYear()} Copyright Text</p>
	</div>
	)
}