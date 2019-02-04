import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import LogIn from './components/LogIn';
import Users from './components/Users';
import Treatments from './components/Treatments';
import Record from './components/Record';
import {Switch, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={LogIn} />
          <Route exact path='/users' component={Users} />
          <Route exact path='/treatments' component={Treatments} />
          <Route exact path='/record' component={Record} />
        </Switch>
      </div>
    );
  }
}

export default App;
