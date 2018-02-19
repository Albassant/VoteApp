import React from 'react';
import Auth from '../modules/Auth';
import axios from 'axios';
import PollActions from '../actions/PollActions';
import PollStore from '../stores/PollStore';

import PollForm from '../components/VotingForm.jsx';

class VotingPage extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      poll: { },
      option: ''
    }
    
    this.processForm = this.processForm.bind(this);
    this.changeOption = this.changeOption.bind(this);
  }

  componentWillMount() {
    const { match: { params } } = this.props;
    let poll = PollStore.getPoll(params.id);
    if (poll) {
      this.setState({ poll });
    }
    else {
      
      // create store for response data
      
      // check if user has already voted (server-side)
      // and show either voting form or statistics
      // TODO: poll owner can access statistics any time
    }
  }
  
  processForm(event) {
    event.preventDefault();
    console.log('processForm');
    
    PollActions.updatePoll(this.state.poll._id, { index: this.state.option });
    
    // TODO: show voting statistics instead
    this.props.history.replace('/polls');
  }
  
  changeOption(event) {
    const option = event.target.value;
    this.setState({ option });
    console.log(this.state.option);
  }
  
  render() {
    return (<PollForm 
              onSubmit={this.processForm}
              onChange={this.changeOption}
              optionIdx={this.state.option}
              poll={this.state.poll}
            />)
  }
}

export default VotingPage;