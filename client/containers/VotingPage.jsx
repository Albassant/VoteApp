import React from 'react';

import PollActions from '../actions/PollActions';
import PollStore from '../stores/PollStore';
import PropTypes from 'prop-types';

import LoadingIndicator from '../components/LoadingIndicator.jsx';
import VotingForm from '../components/VotingForm.jsx';
import VotingChart from '../components/VotingChart.jsx';
import VotingShare from '../components/VotingShare.jsx';
import MessageSnackbar from '../components/MessageSnackbar.jsx';

import withMenuWrapper from './HOCs/withMenuWrapper.jsx';

import { withStyles } from 'material-ui/styles';

const footerHeight = 182;

const styles = {
  container: {
    flex: 1,
    minHeight: `calc(100vh - ${footerHeight}px)`,
    paddingTop: '84px',
    paddingBottom: '64px',
    boxSizing: 'border-box'
  },
}

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
      showSnackbar: false
    }
    this._onChange = this._onChange.bind(this);

    this.processForm = this.processForm.bind(this);
    this.changeOption = this.changeOption.bind(this);

    this.handleCopyToClipboard = this.handleCopyToClipboard.bind(this);
    this.handleHideSnackbar = this.handleHideSnackbar.bind(this);
  }

  _onChange() {
    let state = getPollDataFromFlux();
    this.setState(state);
  }

   componentDidMount() {
    const { match: { params } } = this.props;
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
  }

  handleCopyToClipboard() {
    console.log('on copy to clipboard');
    this.setState({ showSnackbar: true });
  }

  handleHideSnackbar() {
    this.setState({ showSnackbar: false });
  }

  render() {
    const { poll, isLoading, showSnackbar } = this.state;
    const { classes, openDrawer } = this.props;

    if (isLoading || !poll) return (<LoadingIndicator />);

    return (
      <div className={classes.container}>
        { !poll.voted &&
          <VotingForm
            onSubmit={this.processForm}
            onChange={this.changeOption}
            optionIdx={this.state.option}
            poll={poll}
          />
        }
        { (poll.voted || poll.owner) &&
          <VotingChart
            title={poll.name}
            labels={poll.questions.map(q => q.question)}
            data={poll.questions.map(q => q.rating)}
            openDrawer={openDrawer}
          />
        }
        { (poll.voted || poll.owner) &&
          <VotingShare
            onCopyClick={this.handleCopyToClipboard}
            url={poll.url}
            description={poll.name}
          />
        }
        <MessageSnackbar show={showSnackbar} handleClose={this.handleHideSnackbar} message='The poll link has been copied to clipboard'/>
      </div>
    )
  }
}

VotingPage.propTypes = {
  classes: PropTypes.object.isRequired
};


export default withMenuWrapper(withStyles(styles)(VotingPage));
