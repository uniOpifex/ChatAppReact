import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatBoxComponent from './components/chat/ChatboxComponent';
import HomeComponent from './components/HomeComponent';

import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";

class App extends Component {

  
  
  render() {
    const Home = () => (<HomeComponent />)
    const Chatbox = () => (<ChatBoxComponent/>)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Router>
          <Switch>
            <Route exact path="/" render={Chatbox}/>
          </Switch>
        </Router>

          
      </div>
    );
  }
}

export default App;
