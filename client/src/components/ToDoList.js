import React, {Component} from 'react';
import ToDo from './ToDo';
import { handleAdd, handleComplete, handleRemove, getTodos} from '../store/actions/actionCreators';
import { connect } from 'react-redux';
import {Route} from 'react-router-dom';
import { Grid, List } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({
    listRoot: {
        // flexGrow: 1,
        width: '100%',
        maxWidth: 360,
        backgroundColor: "#3C4858",
        // textAlign: 'center'
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
        // export const TodoList = ({ classes, todos }) => (
        //     <Grid container justify="center">
        //         <List className={classes.listRoot} >
        //             {todos.map(todo =>
        //                 <TodoListItem key={todo.id} todo={todo} />)}
        //         </List>
        //     </Grid>
        // );
            let todos = this.props.todos.map((val, index) => (
                <ToDo
                    removeToDo={this.removeToDo.bind(this, val.id)}
                    handleComplete={this.handleComplete.bind(this, val.id)}
                    task={val.title}
                    description={val.description}
                    status={val.completed}
                    loading={val.loading}
                    id={index}    
                />
        ));
        return (
        <div>
            <Grid container justify="center">
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