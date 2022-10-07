import React, {Component} from 'react';
import logo from './logo.svg';
import bg from './bg.png'
import './App.css';
import Aiode from './aideo'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='container_bg'>
          <img src={bg} alt="bg" height={"100%"}/>
        </div>

      
      <Aiode></Aiode>
      </header>
    </div>
  );
}

export default App;
