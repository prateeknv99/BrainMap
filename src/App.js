import React, {Component} from 'react';
import { BrowserRouter } from 'react-router-dom';
import {Switch, Route, Redirect} from "react-router-dom";
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Nav from './components/Nav';
import Main from './components/Main';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <header className="App-header">
          <Nav />
        </header>
        {/* <Main /> */}
        <Switch>
          <Route exact path="/" component={Main} />
          {/* <Route path="/product/:itemType/:id" render={(props)=> <Product {...props} data={this.state.data} sendItemToCart = {(newItem)=>{this.newCartItem = newItem}} />} /> */}
          <Redirect to="/" />
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
