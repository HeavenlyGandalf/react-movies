import './Movies.css';
import React from 'react';
import { Movie } from '../movie/Movie';

export function Movies(props) {
	const {movies = {}} = props
    return (
	 	<div className="movies">
			{
				movies.length?
				movies.map(movie => (
					<Movie key={movie.imdbID} {...movie} /> 
				))
				:
				<h3>По вашему запросу ничего не найдено 	&#128270;</h3>
			}
	 	</div>
	 );
}