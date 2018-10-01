import React, {Component} from 'react';
import ToDo from './ToDo';
import {addToDo, removeToDo} from './actionCreators';
import { connect } from 'react-redux';
import {Route} from 'react-router-dom';
import NewToDoForm from './NewToDoForm';

class ToDoList extends Component {
    constructor (props) {
        super (props);
        this.handleAdd = this.handleAdd.bind(this);
    }
    handleAdd(val) {
    this.props.addToDo(val);
    }
    removeToDo(id) {
        this.props.removeToDo(id);
    }
    render () {
        let todos = this.props.todos.map((val, index) => (
        <ToDo
            removeToDo={this.removeToDo.bind(this, val.id)}
            task={val.task} 
            key={index}    
         />));
        return (
        <div>
            <Route
                path="/todos/new"
                component={props => (<NewToDoForm {...props} handleSubmit={this.handleAdd} />
                )}
             />
            <Route exact path="/todos" component={() => <div>{todos}</div>} />
        </div>
        );
    }
}
function mapStatetoProps(reduxState) {
    return {
        todos: reduxState.todos
    };
}
export default connect(mapStatetoProps, {addToDo, removeToDo})(ToDoList);