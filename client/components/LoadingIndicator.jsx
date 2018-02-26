import React from 'react';
import { withStyles } from 'material-ui/styles';
import { CircularProgress } from 'material-ui/Progress';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '25vh'
  }
};

const Header = ( { classes }) => (
  <div className={classes.container}>
    <CircularProgress color="secondary" />
  </div>
)

export default withStyles(styles)(Header);

