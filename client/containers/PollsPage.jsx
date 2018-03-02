import React from 'react';
import PollActions from '../actions/PollActions';

import PublicPollList from './PublicPollList';
import UserPollList from './UserPollList';
import NewPollPage from './NewPollPage';

import withMenuWrapper from './HOCs/withMenuWrapper.jsx';


class PollsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showNewPollDialog: false
    };

    this.toggleNewPollDialog = this.toggleNewPollDialog.bind(this);
  }

  handlePollDelete(poll, event) {
    event.stopPropagation();
    PollActions.deletePoll(poll._id);
  }

  toggleNewPollDialog() {
    const newState = !this.state.showNewPollDialog;
    this.setState( { showNewPollDialog: newState  });
  }

  render() {
    return (
      this.state.isPublic ?
      <PublicPollList />
      :
      <div>
        <UserPollList
          onDelete={this.handlePollDelete}
          onClick={this.toggleNewPollDialog}
          openDrawer={this.props.openDrawer}
        />
        <NewPollPage show={this.state.showNewPollDialog} onClose={this.toggleNewPollDialog} />
      </div>
    );
  }
}

export default withMenuWrapper(PollsPage);


