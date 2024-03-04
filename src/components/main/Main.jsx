import './Main.css';
import React from 'react';
import { Movies } from '../movies/Movies';
import { Search } from '../search/Search';
import {Preloader} from '../preloader/Preloader'


const API_KEY = process.env.REACT_APP_API_KEY;

export class Main extends React.Component{
	state = {
		movies: [],
		loading:true,
  	};
	
	componentDidMount() {
		this.doRequest();
	 }
	 
	doRequest = (text = 'Potter',type = 'all') => {
		this.setState({loading:true})
		fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${text}${type !== 'all'? `&type= ${type}`:''}`)
			.then(response => response.json())
			.then(data =>  this.setState({movies: data.Search,loading:false}))
			.catch((err)=> {
				console.error(err);
				this.setState({loading:false});
	});
	}


	render(){
		const { movies,loading } = this.state;
		return (
		<main className='container content'>
			<Search doRequest={this.doRequest}/>
			{ 
				loading?
				<Preloader/>
			:
			<Movies movies ={movies} />
			}
		</main>
		)
	}
}