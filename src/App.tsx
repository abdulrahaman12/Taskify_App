import React from 'react';
import './App.css';
import Taskify from './Taskify/Taskify';

// never doesnot return anything
// void returns undefined

// alias - two types - type & interface 

type Y = {
  a: string,
  b: number
}

type X = Y & {
  c: boolean,
  d: string
}

interface Guy extends Y {
  e: string,
  f: number
}

const App: React.FC = () => {
  return (
    <div className="App">
      <Taskify />
    </div>
  );
}

export default App;
