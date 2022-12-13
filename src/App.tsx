import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  type Player = {
    name: string;
    age?: number;
  };
  const nico: Player = {
    name: 'nico',
    age: 23,
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div>{nico.age}</div>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'>
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
