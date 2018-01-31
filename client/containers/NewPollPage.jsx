import React from 'react';
import Auth from '../modules/Auth';
import axios from 'axios';
import PollActions from '../actions/PollActions';
import PollStore from '../stores/PollStore';

import PollForm from '../components/PollForm.jsx';

class NewPollPage extends React.Component {
  
  constructor(props) {
    super(props);
    
    let successMessage = localStorage.getItem('successMessage') || '';
    localStorage.removeItem('successMessage');
    
    this.state = {
      successMessage,
      poll: {
        name: '',
        options: ['', '']
      },
      valid: false
    }
    
    this.processForm = this.processForm.bind(this);
    this.changePollName = this.changePollName.bind(this);
    this.changePollOptions = this.changePollOptions.bind(this);
    this.addPollOption = this.addPollOption.bind(this);
    this.removePollOption = this.removePollOption.bind(this);
    this.formValidation = this.formValidation.bind(this);
  }

  processForm(event) {
    event.preventDefault();
    console.log('processForm');
    
    PollActions.createPoll(this.state.poll)
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log(error);
        if (error.response) {
          const errors = error.response.data.errors;
          errors.summary = error.response.data.message;
          this.setState({
            errors
          });
          console.log(error.response.data);
        }
        else {
          console.log("catch error: " + error);
        }
    });
  }
  
  changePollName(event) {
    const poll = this.state.poll;
    poll.name = event.target.value;
    
    this.setState({ poll });
    this.formValidation();
  }
  
  changePollOptions(event) {
    const index = +event.target.name;    
    const poll = this.state.poll;
    poll.options[index] = event.target.value;
    
    this.setState({ poll }, this.formValidation());
  }
  
  formValidation() {
    const poll = this.state.poll;
    
    if (poll.name.length === 0) {
      return this.setState({valid: false});
    }
    
    if (~poll.options.findIndex(option => option.length === 0)) {
      return this.setState({valid: false});
    }
    
    return this.setState({ valid: true });
  }
  
  addPollOption(event) {
    const poll = this.state.poll;
    poll.options.push('');
    this.setState({ poll }, this.formValidation());
  }
  
  removePollOption(event) {
    const poll = this.state.poll;
    poll.options.pop();
    this.setState({ poll }, this.formValidation());
  }
  
  render() {
    return (<PollForm 
              onSubmit={this.processForm}
              onChangeName={this.changePollName}
              onChangeOptions={this.changePollOptions}
              onAddOption={this.addPollOption}
              onRemoveOption={this.removePollOption}
              successMessage={this.state.successMessage}
              poll={this.state.poll}
              valid={this.state.valid}
            />)
  }
}

export default NewPollPage;