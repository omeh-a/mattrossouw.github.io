import React from 'react';
import logo from './logo.svg';
import Counter from './Counter';
import Headline from './Headline';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          JOE MAMA
        </p>
        <div>
            <Headline value="JOE"/>
        </div>
      </header>
    </div>
  );
}

export default App;
