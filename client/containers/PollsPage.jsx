import React from 'react';
import PollActions from '../actions/PollActions';

import PublicPollList from './PublicPollList';
import UserPollList from './UserPollList';

import withMenuWrapper from './HOCs/withMenuWrapper.jsx';


class PollsPage extends React.Component {

  handlePollDelete(poll, event) {
    event.stopPropagation();
    PollActions.deletePoll(poll._id);
  }

  render() {
    return (
      this.props.isPublic ?
      <PublicPollList />
      :
      <UserPollList
        onDelete={this.handlePollDelete}
      />
    );
  }
}

export default withMenuWrapper(PollsPage);


