import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ToDoList from './components/ToDoList';
import NewToDoForm from './components/NewToDoForm';
import DetailedView from './components/DetailedView';
import {Link, Route, Redirect} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to the App!</h1>
        {/* <p>
          <Link to="/todos">See my To-Dos!</Link>
        </p>
        <p>
          <Link to="/todos/new">Add New To-Do!</Link>
        </p> */}
        <Route
          path="/todo/details/:id"
          component={DetailedView} />
        <Route path="/todos/" component={ToDoList} />
        {/* <Route
          path="/todos/new"
          component={props => (<NewToDoForm {...props} handleSubmit={this.handleAdd} />
          )}
        /> */}
          
        <Route exact path="/" render={() => <Redirect to='/todos' />} />
      </div>
    );
  }
}

export default App;
