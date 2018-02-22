import React from 'react';
import Auth from '../modules/Auth';
import axios from 'axios';
import PollActions from '../actions/PollActions';
import PollStore from '../stores/PollStore';

import PollForm from '../components/VotingForm.jsx';
import PollChart from '../components/VotingChart.jsx';

function getPollDataFromFlux() {
    return {
        isLoading: PollStore.isLoading(),
        poll: PollStore.getPoll()
    };
}

class VotingPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      poll: getPollDataFromFlux(),
      option: '',
    }
    this._onChange = this._onChange.bind(this);

    this.processForm = this.processForm.bind(this);
    this.changeOption = this.changeOption.bind(this);
  }

  _onChange() {
    console.log( 'on change' );
    let poll = getPollDataFromFlux().poll;
    this.setState({ poll });
  }

   componentDidMount() {
    console.log('did mount');
    const { match: {params } } = this.props;
    console.log(params);
    PollStore.addChangeListener(this._onChange);
    PollActions.getPoll(params.id);

    // TODO: poll owner can access chart any time
  }

  componentWillUnmount() {
    PollStore.removeChangeListener(this._onChange);
  }

  processForm(event) {
    event.preventDefault();
    PollActions.updatePoll(this.state.poll._id, { index: this.state.option });
  }

  changeOption(event) {
    const option = event.target.value;
    this.setState({ option });
    console.log(this.state.option);
  }

  render() {
     return (
      this.state.poll ?
        this.state.poll.voted ?
        <PollChart
          title={this.state.poll.name}
          labels={this.state.poll.questions.map(q => q.question)}
          data={this.state.poll.questions.map(q => q.rating)}
        />
        :
        <PollForm
          onSubmit={this.processForm}
          onChange={this.changeOption}
          optionIdx={this.state.option}
          poll={this.state.poll}
          showChart={this.state.poll.owner}
        />
        : null
    )
  }
}

export default VotingPage;
