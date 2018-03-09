import React from 'react';

import PublicPollList from './PublicPollList';
import UserPollList from './UserPollList';

import PollTabs from './PollTabs';
import { withStyles } from 'material-ui/styles';
import withMenuWrapper from './HOCs/withMenuWrapper.jsx';

const footerHeight = 182;

const styles = {
  container: {
    flex: 1,
    minHeight: `calc(100vh - ${footerHeight}px)`,
    paddingTop: '84px',
    paddingBottom: '64px',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    width: '100%'
  },
}

class PollsPage extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
      <PollTabs />
      </div>
    );
  }
}

export default withMenuWrapper(withStyles(styles)(PollsPage));


/*
this.props.isPublic ?
      <PublicPollList />
      :
      <UserPollList />

*/