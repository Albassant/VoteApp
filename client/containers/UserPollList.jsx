import React from 'react';
import { Link } from 'react-router-dom';
import PollActions from '../actions/PollActions';
import PollStore from '../stores/PollStore';
import PollsList from '../components/PollsList';
import NoPollsView from '../components/NoPollsView';

//FIXME: create withLoadingIndicator HOC
import LoadingIndicator from '../components/LoadingIndicator';
import withSubscription from './HOCs/withSubscription';

import ConfirmationDialog from '../components/ConfirmationDialog';
import Button from 'material-ui/Button';

const NewPollLink = props => <Link to="/polls/new" {...props} />

class UserPollList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showConfirmation: false,
    }

    this.pollIdToDelete = '';
    this.pollNameToDelete = '';

    this.handlePollDelete = this.handlePollDelete.bind(this);
    this.handleCancelDelete = this.handleCancelDelete.bind(this);
    this.handleProceedDelete = this.handleProceedDelete.bind(this);
  }

  handlePollDelete(poll, event) {
    event.stopPropagation();
    this.pollToDelete = poll._id;
    this.pollNameToDelete = poll.name;
    this.setState({ showConfirmation: true });
  }

  handleProceedDelete() {
    PollActions.deletePoll(this.pollToDelete);
    this.setState({ showConfirmation: false });
  }

  handleCancelDelete() {
    this.setState({ showConfirmation: false });
  }

  render() {
    const { data } = this.props;
    const hasPolls = data.length > 0;
    return (
      this.props.isLoading ?
      <LoadingIndicator />
      :
      <div>
        { hasPolls ?
          <div>
          <Button component={NewPollLink} variant="raised" color="primary">
          Create New Poll
        </Button>
          <PollsList
            polls={data}
            onDelete={this.handlePollDelete}
            title='My Polls '
            {...this.props}
          />
          </div>
          :
          <NoPollsView title='My Polls' description="Uh oh, it seems you don't have any polls yet..." />
        }
        <ConfirmationDialog
          show={this.state.showConfirmation}
          onContinue={this.handleProceedDelete}
          onCancel={this.handleCancelDelete}
          title='Confirm'
          description={
            `Are you sure you want to delete "${this.pollNameToDelete}"?
            This operation cannot be undone.`
          }
        />
      </div>
    );
  }
}

export default withSubscription(UserPollList, PollStore.getPolls, PollActions.loadPolls);
