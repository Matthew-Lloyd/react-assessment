import React, {Component} from 'react';
import ToDo from './ToDo';
import NewToDoForm from './NewToDoForm';
import { handleAdd, handleComplete, handleRemove, getTodos} from '../store/actions/actionCreators';
import { connect } from 'react-redux';
import {Route} from 'react-router-dom';
import { Grid, List } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({
    listRoot: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: "#3C4858",
    },
    completed: {
        color: 'gray',
        textDecoration: 'line-through'
    },
    uncompleted: {
        color: 'black',
    }
});


class ToDoList extends Component {
    constructor (props) {
        super (props);
        this.handleAdd = this.handleAdd.bind(this);
    }
    componentDidMount() {
        // debugger
        console.log(this.props);
        this.props.getTodos();
    }
    handleAdd(val) {
        this.props.handleAdd(val);
    }
    removeToDo(id) {
        this.props.handleRemove(id);
    }
    
    handleComplete(id) {
        this.props.handleComplete(id);
    }
    render () {
        // debugger
            let todos = this.props.todos.todos.map((val, index) => (
                <ToDo
                    removeToDo={this.removeToDo.bind(this, val.id)}
                    handleComplete={this.handleComplete.bind(this, val.id)}
                    task={val.title}
                    description={val.description}
                    status={val.completed}
                    loading={val.loading}
                    id={val.id}
                    key={index}    
                />
        ));
        return (
        <div>
            <Grid container justify="center">
                <NewToDoForm handleSubmit={this.handleAdd} />
                    <List className={this.props.classes.listRoot}>
                        <Route exact path="/todos" component={() => <div>{todos}</div>} />
                    </List>
            </Grid>
        </div>
        );
    }
}

function mapStatetoProps(reduxState) {
    // debugger;
    return {
        todos: reduxState.todos
    };
}
export default connect(mapStatetoProps, { handleAdd, handleRemove, handleComplete, getTodos })(withStyles(styles)(ToDoList));