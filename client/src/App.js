import React, { Component } from 'react';
import './App.css';
import ToDoList from './components/ToDoList';
import DetailedView from './components/DetailedView/DetailedView';
import {Link, Route, Redirect} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to the App!</h1>
        <Route
          path="/todo/details/:id"
          component={DetailedView} />
        <Route path="/todos/" component={ToDoList} />          
        <Route exact path="/" render={() => <Redirect to='/todos' />} />
      </div>
    );
  }
}

export default App;
