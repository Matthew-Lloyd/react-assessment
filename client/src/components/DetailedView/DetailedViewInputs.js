import React from 'react';
import {
    Grid,
    TextField,
    Button,

} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
    detailsButtons: {
        width: "100%",
    }
})

export const DetailedViewInputs = ({ classes, handleOnChange, handleOnCompleted, todo }) => (
    <div>
        <Grid item xs={12}>
        <TextField
            label="Task"
            name="title"
            value={todo.title}
            onChange={handleOnChange}
            className={classes.detailsInput}
        />
        <Button
            variant="raised"
            color="default"
            size="medium"
            disabled={todo.completed}
            onClick={() => handleOnCompleted(todo.id)}
        >Complete</Button>
        </Grid>
        <Grid item xs={12}>
            <TextField
                label="Description"
                multiline
                name="description"
                value={todo.description}
                onChange={handleOnChange}
                className={classes.detailsDescription}
            />
        </Grid>
    </div>
)
export default (withStyles(styles)(DetailedViewInputs));