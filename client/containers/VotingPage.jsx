import React from 'react';
import Auth from '../modules/Auth';

import PollActions from '../actions/PollActions';
import PollStore from '../stores/PollStore';
import PropTypes from 'prop-types';

import LoadingIndicator from '../components/LoadingIndicator.jsx';
import VotingForm from '../components/VotingForm.jsx';
import VotingChart from '../components/VotingChart.jsx';
import VotingShare from '../components/VotingShare.jsx';
import MessageSnackbar from '../components/MessageSnackbar.jsx';
import Typography from 'material-ui/Typography';

import withMenuWrapper from './HOCs/withMenuWrapper.jsx';
import NoPollsView from '../components/NoPollsView';

import { withStyles } from 'material-ui/styles';

const footerHeight = 182;

const styles = theme => ({
  container: {
    flex: 1,
    minHeight: `calc(100vh - ${footerHeight}px)`,
    paddingTop: theme.spacing.unit * 3,
    boxSizing: 'border-box',
  },
  toolbar: {
    ...theme.mixins.toolbar,
  },
  title: {
    textAlign: 'center',
    marginTop: '40px'
  }
});

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
      showSnackbar: false,
      validForm: false,
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

    console.log('voting')
    if (Auth.isUserAuthenticated())
    {
      console.log('voting isUserAuthenticated')
      PollActions.getPoll(params.id);
    }
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
    this.setState({ option, validForm: true });
  }

  handleCopyToClipboard() {
    console.log('on copy to clipboard');
    this.setState({ showSnackbar: true });
  }

  handleHideSnackbar() {
    this.setState({ showSnackbar: false });
  }

  render() {
    if (!Auth.isUserAuthenticated()) {
      return (
        <NoPollsView
          title='Please, authorize'
          description="Only registered users can view polls and vote. Please, log in first"
          link='/login'
          buttonLabel='Login'
        />
      );
    }

    const { poll, isLoading, showSnackbar } = this.state;
    const { classes, openDrawer } = this.props;

    if (isLoading || !poll) return (<LoadingIndicator />);

    return (
      <div className={classes.container}>
        <div className={classes.toolbar} />
        <Typography variant='display1' className={classes.title}>
          {poll.name}
        </Typography>
        { !poll.voted &&
          <VotingForm
            onSubmit={this.processForm}
            onChange={this.changeOption}
            optionIdx={this.state.option}
            poll={poll}
            valid={this.state.validForm}
          />
        }
        { (poll.voted || poll.owner) &&
          <VotingChart
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


export default withMenuWrapper(withStyles(styles, { withTheme: true })(VotingPage));
