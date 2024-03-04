import './App.css';
import {Header} from '../src/components/header/Header'
import {Main} from '../src/components/main/Main'
import {Footer} from '../src/components/footer/Footer'
import { Component } from 'react';

class App extends Component {



render() {
  
  return (
        <div className="App">
          <Header />
          <Main />
          <Footer />
        </div>
    );
  }
}

export default App;
