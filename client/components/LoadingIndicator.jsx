import React from 'react';
import { withStyles } from 'material-ui/styles';
import { CircularProgress } from 'material-ui/Progress';

import styles from './commonStyles';

const LoadingIndicator = ({ classes }) => (
  <div className={classes.container}>
    <CircularProgress color="secondary" />
  </div>
)

export default withStyles(styles)(LoadingIndicator);

