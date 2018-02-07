import React from 'react';
import Auth from '../modules/Auth';
import axios from 'axios';
import PollActions from '../actions/PollActions';
import PollStore from '../stores/PollStore';

import PollsList from '../components/PollsList';

//var tmp = [{ id:"1", name: 'hello'}, { id:"2", name: 'big'}, { id:"3", name: 'small' }, { id:"4", name: 'world'}];

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

  componentWillMount() {
    PollActions.loadPolls();
  }
  
  componentDidMount() {
    PollStore.addChangeListener(this._onChange);
  }
  
  componentWillUnmount() {
    PollStore.removeChangeListener(this._onChange);
  }
  
  handlePollDelete(poll, event) {
    event.stopPropagation();
    PollActions.deletePoll(poll._id);
  }
  
  handlePollClick(poll, event) {
    // TODO load selected poll form or visuals
    this.props.history.push(`/vote/${poll._id}`);
    console.log("handlePollClick " + poll.name);
  }
  
  handleAddNewPoll() {
    this.props.history.push('/new');
  }

  render() {
    return (
      <PollsList 
        polls={this.state.polls} 
        onClick={this.handlePollClick} 
        onDelete={this.handlePollDelete} 
        onCreateNew={this.handleAddNewPoll} 
      />
    );
  }
}

export default PollsPage;


