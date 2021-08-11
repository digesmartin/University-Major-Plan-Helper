import React from 'react';
import logo from './logo.svg';
import './App.css';
import {saySomethingStupid} from "./obtain_reqs"

function App() {

  /**
   * when app starts up, we could either check for new majors online or 
   * use majors we've seen before
   * so to speak, we can store major requirements and simply draw from 
   * those if we'd like
   */

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {"Learn React or don't, I can't stop you"}
        </a>
        <button onClick={saySomethingStupid}> Click and check console </button>
      </header>
    </div>
  );
}

export default App;
