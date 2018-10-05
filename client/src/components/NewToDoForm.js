import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Grid, Button, Paper, TextField, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { handleAdd } from '../store/actions/actionCreators';

const styles = theme => ({
    addNewRoot: {
        flexGrow: 1,
        width: '100%',
        maxWidth: 360,
        margin: theme.spacing.unit * 2
    },
    paper: {
        padding: theme.spacing.unit * 2
    }
});

export class NewToDoForm extends Component {
    state = {
        title: "",
        description: "",
        completed: false
    }

    handleOnChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmitTodo = () => {
        if (this.state.title === "" || this.state.title.length < 3) {
            console.log("Title is required for the todo");
        } else {
            this.props.handleAdd(this.state);
            this.setState({ title: "" });
        }
    }


    render() {
        return (
            <Grid container justify="center" >
                <Grid item xs={12} className={this.props.classes.addNewRoot}>
                    <Paper className={this.props.classes.paper}>
                        <Grid container>
                            <Grid item xs={12}>
                                <Typography variant="display1">
                                    TO-DO
								</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name="title"
                                    value={this.state.title}
                                    margin="normal"
                                    onChange={this.handleOnChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    color="primary"
                                    variant="raised"
                                    onClick={this.handleSubmitTodo}
                                >Add Todo</Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}

NewToDoForm.propTypes = {
    classes: PropTypes.object.isRequired
}


const mapDispatchToProps = (dispatch) => ({
    handleAdd: (todo) => dispatch(handleAdd(todo))
});

export default connect(null, mapDispatchToProps)(withStyles(styles)(NewToDoForm));

// export default class NewToDoForm extends Component {
//     constructor(props) {
//         super(props)
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.handleChange = this.handleChange.bind(this);
//         this.state = {
//             task: ""
//         };

//     }
//     handleSubmit(e) {
//         e.preventDefault();
//         this.props.handleSubmit(this.state.task);
//         e.target.reset();
//         this.props.history.push("/todos");

//     }
//     handleChange(e) {
//         this.setState({
//             [e.target.name]: e.target.value
//         });
//     }
//     state = {
//         title: "",
//         description: "",
//         completed: false
//     }

//     handleOnChange = (event) => {
//         const { name, value } = event.target;
//         this.setState({ [name]: value });
//     }

//     handleSubmitTodo = () => {
//         if (this.state.title === "" || this.state.title.length < 3) {
//             console.log("Title is required for the todo");
//         } else {
//             this.props.addTodo(this.state);
//             this.setState({ title: "" });
//         }
//     }


//     render () {
//         return (
//             <div>
                
//             <form onSubmit={this.handleSubmit}>
//                 <label htmlFor="task">Task</label>
//                 <input
//                     type="text"
//                     name="task"
//                     id="task"
//                     onChange={this.handleChange}
//                 />
//                 <button>Add a Todo!</button>
//             </form>
//             </div>

//         )
//     }
// }