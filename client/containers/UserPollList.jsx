import React from 'react';
import PollActions from '../actions/PollActions';
import PollStore from '../stores/PollStore';
import PollsList from '../components/PollsList';
import NoPollsView from '../components/NoPollsView';

//FIXME: create withLoadingIndicator HOC
import LoadingIndicator from '../components/LoadingIndicator.jsx';
import withSubscription from './HOCs/withSubscription.jsx';

class UserPollList extends React.Component {
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
            onDelete={this.props.onDelete}
            title='My Polls '
            {...this.props}
          />
          :
          <NoPollsView title='My Polls' description="Uh oh, it seems you don't have any polls yet..." />
        }
      </div>
    );
  }
}

export default withSubscription(UserPollList, PollStore.getPolls, PollActions.loadPolls);
