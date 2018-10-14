import React from 'react';
import {
    Grid,
    Button
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
    detailsButtons: { width: "100%" }
})

export const DetailedViewButtons = ({ classes, handleSave, handleRemove, handleCancel }) => (

    <Grid item xs={12}>
        <Grid container justify="space-evenly" spacing={8}>
            <Grid item xs={4}>
                <Button
                    variant="raised"
                    color="primary"
                    onClick={handleSave}
                    className={classes.detailsButtons}
                >Save</Button>
            </Grid>
            <Grid item xs={4}>
                <Button
                    variant="raised"
                    color="default"
                    onClick={handleCancel}
                    className={classes.detailsButtons}
                >Cancel</Button>
            </Grid>
            <Grid item xs={4}>
                <Button
                    variant="raised"
                    color="secondary"
                    onClick={handleRemove}
                    className={classes.detailsButtons}
                >Delete</Button>
            </Grid>
        </Grid>
    </Grid>

)
export default (withStyles(styles)(DetailedViewButtons));