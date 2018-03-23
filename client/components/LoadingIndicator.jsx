import React from 'react';
import { withStyles } from 'material-ui/styles';
import { CircularProgress } from 'material-ui/Progress';

import { common } from './commonStyles';

const styles = {
  container: {
    ...common.container,
    height: '50vh'
  }
}

const LoadingIndicator = ({ classes }) => (
  <div className={classes.container}>
    <CircularProgress color="secondary" />
  </div>
)

export default withStyles(styles)(LoadingIndicator);

