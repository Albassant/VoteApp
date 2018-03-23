import React from 'react';
import PollActions from '../actions/PollActions';
import PollStore from '../stores/PollStore';
import PollsList from '../components/PollsList';
import NoPollsView from '../components/NoPollsView';

import LoadingIndicator from '../components/LoadingIndicator.jsx';
import withSubscription from './HOCs/withSubscription.jsx';

function PublicPollList(props) {
  const hasPolls = props.data.length > 0;
  return (
    props.isLoading ?
    <LoadingIndicator />
    :
    <div>
      { hasPolls ?
        <PollsList
          polls={props.data}
          title='All Polls'
          {...props}
        />
        :
        <NoPollsView
          title='All Polls'
          description="Uh oh, it seems no one has created a poll yet... You can be the first!"
          link='/polls/new'
          buttonLabel='Creare New'
        />
      }
    </div>
  )
};

export default withSubscription(PublicPollList, PollStore.getAllPolls, PollActions.loadAllPolls);
