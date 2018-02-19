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
    
    //FIXME check if it's not loading at the moment
    const polls = PollStore.getPolls();
    let poll = polls.find(poll => poll._id === params.id);
    if (poll) {
      this.setState({ poll });
    }
    else {
      // API request for specified poll
    }
  }
  
  
  processForm(event) {
    event.preventDefault();
    console.log('processForm');
    PollActions.updatePoll(this.state.poll._id, { index: this.state.option });
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