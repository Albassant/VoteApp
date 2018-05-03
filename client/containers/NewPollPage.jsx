import React from 'react';
import PollActions from '../actions/PollActions';
import PollStore from '../stores/PollStore';

import PollForm from '../components/PollForm';

class NewPollPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
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

    this._handleChange = this._handleChange.bind(this);
  }

  processForm(event) {
    event.preventDefault();
    PollStore.addChangeListener(this._handleChange);
    PollActions.createPoll(this.state.poll);
  }

  _handleChange() {
    PollStore.removeChangeListener(this._handleChange);
    const poll = PollStore.getPoll();
    this.props.history.push(`/polls/${poll._id}`);
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
      return this.setState({ valid: false });
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
    return (
      <PollForm
        poll={this.state.poll}
        onChangeName={this.changePollName}
        onChangeOptions={this.changePollOptions}
        onRemoveOption={this.removePollOption}
        onAddOption={this.addPollOption}
        valid={this.state.valid}
        onSubmit={this.processForm}
      />
    )
  }
}

export default NewPollPage;