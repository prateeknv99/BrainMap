import React, {Component} from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Main from './components/Main';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <Main />
    </div>
  );
}

export default App;
