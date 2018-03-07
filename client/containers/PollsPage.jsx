import React from 'react';

import PublicPollList from './PublicPollList';
import UserPollList from './UserPollList';

import withMenuWrapper from './HOCs/withMenuWrapper.jsx';


class PollsPage extends React.Component {
  render() {
    return (
      this.props.isPublic ?
      <PublicPollList />
      :
      <UserPollList />
    );
  }
}

export default withMenuWrapper(PollsPage);


