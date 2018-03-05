import React from 'react';
import PollActions from '../actions/PollActions';
import PollStore from '../stores/PollStore';
import PollsList from '../components/PollsList';

//TODO: create withLoadingIndicator HOC
import LoadingIndicator from '../components/LoadingIndicator.jsx';
import withSubscription from './HOCs/withSubscription.jsx';

class PublicPollList extends React.Component {
  render() {
    return (
      this.props.isLoading ?
      <LoadingIndicator />
      :
      <PollsList
        polls={this.props.data}
        title='All Polls'
        {...this.props}
      />
    );
  }
}

export default withSubscription(PublicPollList, PollStore.getAllPolls, PollActions.loadAllPolls);
