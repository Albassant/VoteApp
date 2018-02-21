import React from 'react';
import PollActions from '../actions/PollActions';
import PollStore from '../stores/PollStore';
import PollsList from '../components/PollsList';

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
    this._onChange = this._onChange.bind(this);

    this.handleAddNewPoll = this.handleAddNewPoll.bind(this);
    this.handlePollClick = this.handlePollClick.bind(this);
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

  handlePollClick(poll, event) {
    this.props.history.push(`/polls/${poll._id}`); // TODO: use Link from router-dom
  }

  handleAddNewPoll() {
    this.props.history.push('/polls/new');
  }

  render() {
    return (
      <PollsList
        polls={this.state.polls}
        onDelete={this.handlePollDelete}
      />
    );
  }
}

export default PollsPage;


