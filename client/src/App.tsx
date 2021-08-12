import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {saySomethingStupid} from "./obtain_reqs"
import {MajorPlanner} from "./MajorPlanner"

function App() {

  const [data, setData] = useState(null);

  useEffect(() =>
  {
    fetch("/api")
    .then((res) => res.json())
    .then((data) => setData(data.message));
  }, []);

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
        <p>{!data ? "Loading..." : data}</p>
        <button onClick={saySomethingStupid}> Click and check console </button>
      </header>
      <MajorPlanner filepath="./Existing Major Requirements/poopoo.json"/>
    </div>
  );
}

//ask user whether they want to scrape or use saved major plans
//"existing" major plans are individual major plans that have been created before
//existing major plans will only explicitly include their own requirements
//the requirements of the particular school they belong to will also be existing plans
//which are simply added to the major plan, same as adding another major

export default App;
