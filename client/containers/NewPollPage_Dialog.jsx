import React from 'react';
import PropTypes from 'prop-types';
import PollActions from '../actions/PollActions';

import PollFormDialog from '../components/PollFormDialog';


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
  }

  processForm(event) {
    event.preventDefault();
    console.log('processForm');

    PollActions.createPoll(this.state.poll);
    this.props.onClose();
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
      <PollFormDialog show={this.props.show}
        onClose={this.props.onClose}
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

NewPollPage.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default NewPollPage;