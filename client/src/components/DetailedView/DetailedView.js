import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Button, Typography } from '@material-ui/core';
import { ArrowLeft } from '@material-ui/icons'
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { getTodos, editTodo, handleComplete, handleRemove } from '../../store/actions/actionCreators';
import { DetailedViewButtons } from './DetailedViewButtons';
import { DetailedViewInputs } from './DetailedViewInputs';
import { styles } from './DetailedViewStyles';

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
                            <Grid container className={classes.detailsRootInner}>
                                <Grid item xs={6}>
                                    <Button variant="flat" color="default" className={classes.detailsBackButton} size="medium" onClick={this.handleBack}>
                                        <ArrowLeft />
                                        <Typography variant="button" className={classes.detailsButtonText} >Back to Tasks</Typography>
                                    </Button>
                                </Grid>
                                <DetailedViewInputs
                                    classes={classes}
                                    handleOnChange={this.handleOnChange.bind(this)}
                                    handleOnCompleted={this.handleOnCompleted.bind(this)}
                                    todo={todo}
                                
                                />
                                <DetailedViewButtons
                                    classes={classes}
                                    handleSave={this.handleSave.bind(this)}
                                    handleCancel={this.handleCancel.bind(this)}
                                    handleRemove={this.handleRemove.bind(this)}

                                />
                            </Grid>
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