import React from 'react';
import './Movie.css';

export function Movie(props) {
	const {
		Title:title,
		Year:year,
		Type:type,
		Poster:poster,
		} = props;
	
    return (
	 <div className="movie-card">
		{
			poster === 'N/A'?
			<img className='card-img' src={`
			https://placehold.co/274x415?text=${title}`} alt='poster'/>
			:
			<img className='card-img' src={poster} alt='poster'/>
		}
		
		<p className='card-title'>{title}</p>
		<div className='card-info'>
			<p className='card-year'>{year}</p>
			<p className='card-type'>{type}</p>
		</div>
	 </div>);
}
