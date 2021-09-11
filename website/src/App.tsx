import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "./Pages/Home"
import './App.css';

const App : React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home}/>
      </Router>
    </div>
  );
}

export default App;
