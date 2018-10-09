import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Button, TextField, Paper, Typography } from '@material-ui/core';
import { ArrowLeft } from '@material-ui/icons'
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { getTodos, editTodo, handleComplete, handleRemove } from '../store/actions/actionCreators';

const styles = theme => ({
    detailsRoot: {
        flexGrow: 1,
        width: "100%",
        maxWidth: 360,
        padding: theme.spacing.unit * 2,
        backgroundColor: "#3C4858"
    },
    detailsRootInner: {
        flexGrow: 1,
        width: "100%",
        maxWidth: 360,
        padding: theme.spacing.unit * 2,
        backgroundColor: "#fff"
    },
    detailsInput: {
        marginRight: theme.spacing.unit
    },
    detailsDescription: {
        width: "100%",
        marginBottom: theme.spacing.unit * 2
    },
    detailsButtons: {
        width: "100%",
    },
    detailsBackButton: {
        marginBottom: theme.spacing.unit,
    },
    detailsButtonText: {
        fontSize: "0.8em"
    }
});

export class DetailedView extends Component {

    state = {
        title: "",
        description: "",
        error: ""
    }

    handleBack = () => {
        this.props.history.push("/");
    }

    handleOnChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
        this.props.todo[name] = value;
    }

    handleOnCompleted = () => {
        this.props.handleComplete(this.props.todo.id);
    }

    handleCancel = () => {
        const { todo, initialTodo } = this.props;
        this.setState({ ...this.props.initialTodo });
        todo.title = initialTodo.title;
        todo.description = initialTodo.description;
    }

    handleSave = () => {
        const { title, description, completed, id } = this.props.todo;
        let updates = {
            title,
            description,
            completed
        };

        if (updates.title === "" || updates.title.length < 1) {
            return this.setState({ error: "Title cannot be empty!" });
        }
        this.props.editTodo(id, updates);
        this.props.history.push("/");
    }

    handleRemove = () => {
        this.props.handleRemove(this.props.todo.id)
        this.props.history.push("/");
    }
    componentDidMount () {
        this.props.getTodos();
    }

    render() {
        const { todo, classes, loaded } = this.props;
        return (
            loaded ?
                <Grid container justify="center" >
                    <Grid item xs={12} className={classes.detailsRoot}>
                        <Paper>
                            <Grid container className={classes.detailsRootInner}>
                                <Grid item xs={6}>
                                    <Button variant="flat" color="default" className={classes.detailsBackButton} size="medium" onClick={this.handleBack}>
                                        <ArrowLeft />
                                        <Typography variant="button" className={classes.detailsButtonText} >Back to Tasks</Typography>
                                    </Button>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Task"
                                        name="title"
                                        value={todo.title}
                                        onChange={this.handleOnChange}
                                        className={classes.detailsInput}
                                    />
                                    <Button
                                        variant="raised"
                                        color="default"
                                        size="medium"
                                        disabled={todo.completed}
                                        onClick={() => this.handleOnCompleted(todo.id)}
                                    >Complete</Button>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Description"
                                        multiline
                                        name="description"
                                        value={todo.description}
                                        onChange={this.handleOnChange}
                                        className={classes.detailsDescription}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container justify="space-evenly" spacing={8}>
                                        <Grid item xs={4}>
                                            <Button
                                                variant="raised"
                                                color="primary"
                                                onClick={this.handleSave}
                                                className={classes.detailsButtons}
                                            >Save</Button>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Button
                                                variant="raised"
                                                color="default"
                                                onClick={this.handleCancel}
                                                className={classes.detailsButtons}
                                            >Cancel</Button>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Button
                                                variant="raised"
                                                color="secondary"
                                                onClick={this.handleRemove}
                                                className={classes.detailsButtons}
                                            >Delete</Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
                 : <p>loading...</p>
        );
    }
}

DetailedView.propTypes = {
    classes: PropTypes.object.isRequired
}

const mapStateToProps = (state, props) => {
	if(state.todos.loaded){
		const currentTodo = state.todos.todos.find((todo) => todo.id === parseInt(props.match.params.id, 10));
        const { title, description, completed } = currentTodo;
		const initialTodo = {
			title: title,
			description: description,
			completed: completed
		};
		return { 
			todo: currentTodo,
			initialTodo: initialTodo,
			loaded: state.todos.loaded 
		}
	}

	return { 
		todo: {},
		initialTodo: {},
		loaded: state.todos.loaded 
	}
};

const mapDispatchToProps = (dispatch) => ({
    getTodos: () => dispatch(getTodos()),
    editTodo: (id, updates) => dispatch(editTodo(id, updates)),
    handleComplete: (id) => dispatch(handleComplete(id)),
    handleRemove: (id) => dispatch(handleRemove(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(DetailedView));