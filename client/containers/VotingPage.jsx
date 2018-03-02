import React from 'react';
import Auth from '../modules/Auth';
import axios from 'axios';
import PollActions from '../actions/PollActions';
import PollStore from '../stores/PollStore';

import LoadingIndicator from '../components/LoadingIndicator.jsx';
import VotingForm from '../components/VotingForm.jsx';
import VotingChart from '../components/VotingChart.jsx';

import withMenuWrapper from './HOCs/withMenuWrapper.jsx';

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
    const { match: { params } } = this.props;
    console.log(params);
    PollStore.addChangeListener(this._onChange);
    PollActions.getPoll(params.id);
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
    if(!this.state.poll) return null;

    return (
      this.state.isLoading ?
      <LoadingIndicator /> :
      <div>
        { !this.state.poll.voted &&
            <VotingForm
              onSubmit={this.processForm}
              onChange={this.changeOption}
              optionIdx={this.state.option}
              poll={this.state.poll}
            />
        }
        { (this.state.poll.voted || this.state.poll.owner) &&
            <VotingChart
              title={this.state.poll.name}
              labels={this.state.poll.questions.map(q => q.question)}
              data={this.state.poll.questions.map(q => q.rating)}
            />
        }
      </div>
    )
  }
}

export default withMenuWrapper(VotingPage);
