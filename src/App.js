import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
// import Card from './components/Card';
import Home from './Pages/Home';
// import LogIn from './Pages/LogIn';
// import Form from './Pages/SignUp'

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <switch>
          <Route exact path = "/" component={Home} />
          {/* <Route exact path = "/login" component={LogIn} />
          <Route exact path = "/signUp" component={Form} /> */}
        </switch>
      </div>
    </Router>
  );
}

export default App;

