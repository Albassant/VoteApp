import React from 'react';
import { withStyles } from 'material-ui/styles';
import { CircularProgress } from 'material-ui/Progress';

const footerHeight = 182;

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: `calc(100vh - ${footerHeight}px)`,
    paddingTop: '84px',
    paddingBottom: '64px',
    boxSizing: 'border-box'
  },
};

const LoadingIndicator = ({ classes }) => (
  <div className={classes.container}>
    <CircularProgress color="secondary" />
  </div>
)

export default withStyles(styles)(LoadingIndicator);

