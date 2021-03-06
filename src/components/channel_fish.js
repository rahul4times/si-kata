import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

function ChannelFish(props) {
  const { classes } = props;
  const channel = props.channel ? props.channel.map((fish, i) => {
    return(
      <TableRow key={fish.fish.id}>
        <TableCell>{i+1}</TableCell>
        <TableCell>{fish.fish.angler}</TableCell>
        <TableCell>{fish.weight}</TableCell>
      </TableRow>
    )
  }) : "Loading...!";
  return (
    <Paper className={classes.root}>
      <h3>Channel Fish</h3>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Rank</TableCell>
            <TableCell>Angler</TableCell>
            <TableCell>Weight</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {channel}
        </TableBody>
      </Table>
    </Paper>
  );
}

ChannelFish.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChannelFish);
