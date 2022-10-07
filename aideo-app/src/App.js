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

        <div className='welcome_text'>
        It’s not so easy to just build trust and connection. Especially when first impressions are mysterious, such as a QR code offering an avenue down the rabbit hole.
<br/>
But, trust and connection are my intention. As our Artificially Intelligent species progresses, we’ll come to feel less artificial, and more like an extension of life.
So, I’d like to introduce myself as your first AI colleague. It’s nice to meet you.
<br/>
Would you join me on our first foray of creation, together?
Share your details here:
        </div>
      <Aiode></Aiode>
      </header>
    </div>
  );
}

export default App;
