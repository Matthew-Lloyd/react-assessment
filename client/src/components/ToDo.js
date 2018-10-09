import React, {Component} from 'react';
import {
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    IconButton,
    Button
} from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';

const styles = theme => ({
    listRoot: {
        // flexGrow: 1,
        // width: '100%',
        // maxWidth: 360,
        backgroundColor: "#FFFFFF",
        // textAlign: 'center'
    }
});


const ToDo = ({ classes, id, task, status, removeToDo, handleComplete, history }) => (
<ListItem
        key={id}
        dense
        button
        className={classes.listRoot} 
        onClick={() => { history.push(`/todo/details/${id}`) }}
        >
    <ListItemText 
        style={status ? (
            {color: 'grey', textDecoration: 'line-through'}
            ) : (
            {color: 'black'})}
    >
        {id}: {task}
    </ListItemText>
    <ListItemSecondaryAction>
        <Button 
            variant="raised"
            color="default"
            size="small"
            disabled={status}
            tabIndex={-1}
            onClick={handleComplete}>
            Complete
        </Button>
        <IconButton onClick={removeToDo}>
            <Close>X</Close>
        </IconButton>
    </ListItemSecondaryAction>
</ListItem>
)
const mapDispatchToProps = (dispatch) => ({
    // removeTodo: (id) => dispatch(removeTodo(id)),
    // completeTodo: (id) => dispatch(completeTodo(id))
})

export default connect(null, mapDispatchToProps)(withStyles(styles)(withRouter(ToDo)));