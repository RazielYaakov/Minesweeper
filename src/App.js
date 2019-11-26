import React from 'react';
import logo from './misesweeper.jpg';
import './App.css';
import Game from './components/Game';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="minesweeperLogo"/>
      </header>
      <Game/>
    </div>
  );
}

export default App;
