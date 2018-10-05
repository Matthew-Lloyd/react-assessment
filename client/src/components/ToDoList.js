import React, {Component} from 'react';
import ToDo from './ToDo';
import { handleAdd, removeToDo, getTodos} from '../store/actions/actionCreators';
import { getTodosSaga } from '../store/sagas/todoSaga';
import { connect } from 'react-redux';
import {Route} from 'react-router-dom';
import NewToDoForm from './NewToDoForm';
import PropTypes from 'prop-types';
import {
	Grid, 
	List, 
 } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({
    listRoot: {
        flexGrow: 1,
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    }
});


class ToDoList extends Component {
    constructor (props) {
        super (props);
        this.handleAdd = this.handleAdd.bind(this);
    }
    componentDidMount() {
        // debugger
        this.props.getTodos();
    }
    handleAdd(val) {
        this.props.handleAdd(val);
    }
    removeToDo(id) {
        this.props.removeToDo(id);
    }
    render () {
        // debugger
            let todos = this.props.todos.map((val, index) => (
                    <ToDo
                        removeToDo={this.removeToDo.bind(this, val.id)}
                        task={val.title}
                        description={val.description}
                        status={val.completed}
                        loading={val.loading}
                        id={index}    
                    />
        ));
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

ToDoList.propTypes = {
    classes: PropTypes.object.isRequired
};

function mapStatetoProps(reduxState) {
    // debugger;
    return {
        todos: reduxState.todos
    };
}
export default connect(mapStatetoProps, { handleAdd, removeToDo, getTodos })(withStyles(styles)(ToDoList));