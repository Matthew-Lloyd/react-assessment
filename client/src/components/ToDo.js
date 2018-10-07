import React, {Component} from 'react';
import {
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    IconButton,
    Button
} from '@material-ui/core';
import { Close } from '@material-ui/icons';
// import { handleComplete } from '../store/actions/actionCreators';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({
    listRoot: {
        // flexGrow: 1,
        // width: '100%',
        // maxWidth: 360,
        // backgroundColor: "#3C4858",
        // textAlign: 'center'
    }
});


const ToDo = ({ id, task, status, removeToDo, handleComplete }) => <ListItem>
    <ListItemText 
        style={status ? (
            {color: 'grey', textDecoration: 'line-through'}
            ) : (
            {color: 'black'})}
    >
        {id}: {task}
    </ListItemText>
    <Button onClick={handleComplete}>
        Complete
    </Button>
    <IconButton onClick={removeToDo}>
        <Close>X</Close>
    </IconButton>
</ListItem>;

export default ToDo;