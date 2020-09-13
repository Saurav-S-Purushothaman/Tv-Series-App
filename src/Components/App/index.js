import React from 'react';
import './App.css';
import Intro from '../Intro';
import Main from '../Main';
import { render } from '@testing-library/react';
import 'whatwg-fetch';


class App extends React.Component{
  constructor(props){
    super(props);
  }
  

  render(){
   return (
    <div className="App">
      <header className="App-header">
        <h1>TV SERIES APP</h1>
      </header>
      
       <Main />
     </div>
  );
 }
}

export default App;
