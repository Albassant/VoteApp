import React from 'react';
import PollActions from '../actions/PollActions';
import PollStore from '../stores/PollStore';
import PollsList from '../components/PollsList';

import NewPollPage from './NewPollPage';
import LoadingIndicator from '../components/LoadingIndicator.jsx';

function getStateFromFlux() {
    return {
        isLoading: PollStore.isLoading(),
        polls: PollStore.getPolls()
    };
}

class PollsPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = getStateFromFlux();

    this.state.showNewPollDialog = false;

    this._onChange = this._onChange.bind(this);
    this.toggleNewPollDialog = this.toggleNewPollDialog.bind(this);
  }

  _onChange() {
    let state = getStateFromFlux();

    state.polls.forEach(poll => {
      var date = new Date(poll.createdAt);
      poll.createdAt = date.toLocaleDateString('en-GB');
    });

    this.setState(state);
  }

  componentDidMount() {
    PollStore.addChangeListener(this._onChange);
    PollActions.loadPolls();
  }

  componentWillUnmount() {
    PollStore.removeChangeListener(this._onChange);
  }

  handlePollDelete(poll, event) {
    event.stopPropagation();
    PollActions.deletePoll(poll._id);
  }

  toggleNewPollDialog() {
    const newState = !this.state.showNewPollDialog;
    this.setState( { showNewPollDialog: newState  });
  }

  render() {
    return (
      this.state.isLoading ?
        <LoadingIndicator /> :
        <div>
          <PollsList
            polls={this.state.polls}
            onDelete={this.handlePollDelete}
            onNewPollClick={this.toggleNewPollDialog}
          />
          <NewPollPage show={this.state.showNewPollDialog} onClose={this.toggleNewPollDialog} />
        </div>
    );
  }
}

export default PollsPage;

/*

*/


