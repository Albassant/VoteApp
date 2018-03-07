import React from 'react';
import PollActions from '../actions/PollActions';
import PollStore from '../stores/PollStore';
import PollsList from '../components/PollsList';

//TODO: create withLoadingIndicator HOC
import LoadingIndicator from '../components/LoadingIndicator.jsx';
import withSubscription from './HOCs/withSubscription.jsx';

class PublicPollList extends React.Component {
  render() {
    const hasPolls = this.props.data.length > 0;
    return (
      this.props.isLoading ?
      <LoadingIndicator />
      :
      <div>
        { hasPolls ?
          <PollsList
            polls={this.props.data}
            title='All Polls'
            {...this.props}
          />
          :
          <NoPollsView title='All Polls' description="Uh oh, it seems no one has created a poll yet... You can be the first!" />
        }
      </div>
    );
  }
}

export default withSubscription(PublicPollList, PollStore.getAllPolls, PollActions.loadAllPolls);
