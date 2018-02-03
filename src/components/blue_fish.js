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

function BlueFish(props) {
  const { classes } = props;

  const blue = props.blueFish ? props.blueFish.map((fish, i) => {
    return (
      <TableRow key={fish.fish.id}>
        <TableCell>{i+1}</TableCell>
        <TableCell>{fish.fish.angler}</TableCell>
        <TableCell>{fish.weight}</TableCell>
      </TableRow>
    )
  }) : "Loading...!";


  console.log("blue fish props: ", props);
  return (
    <Paper className={classes.root}>
      <h3>Blue Fish</h3>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Rank</TableCell>
            <TableCell>Angler</TableCell>
            <TableCell>Weight</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {blue}
        </TableBody>
      </Table>
    </Paper>
  );
}

BlueFish.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BlueFish);
