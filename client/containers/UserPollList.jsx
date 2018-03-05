import React from 'react';
import PollActions from '../actions/PollActions';
import PollStore from '../stores/PollStore';
import PollsList from '../components/PollsList';

//FIXME: create withLoadingIndicator HOC
import LoadingIndicator from '../components/LoadingIndicator.jsx';
import withSubscription from './HOCs/withSubscription.jsx';

class UserPollList extends React.Component {
  render() {
    return (
      this.props.isLoading ?
      <LoadingIndicator />
      :
      <PollsList
        polls={this.props.data}
        onDelete={this.props.onDelete}
        title='My Polls '
        {...this.props}
      />
    );
  }
}

export default withSubscription(UserPollList, PollStore.getPolls, PollActions.loadPolls);
