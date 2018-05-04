import React from 'react';
import Auth from '../modules/Auth';

import PublicPollList from './PublicPollList';
import UserPollList from './UserPollList';
import NoPollsView from '../components/NoPollsView';

import Tabs from '../components/Tabs';
import { withStyles } from 'material-ui/styles';
import withMenuWrapper from './HOCs/withMenuWrapper.jsx';

import MyPollIcon from 'material-ui-icons/Poll';
import PublicPollIcon from 'material-ui-icons/Public';


const footerHeight = 182;

const styles = theme => ({
  container: {
    flex: 1,
    //minHeight: `calc(100vh - ${footerHeight}px)`,
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 3,
    boxSizing: 'border-box',
    overflowY: 'scroll'
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    width: '75%',
    margin: '0 auto',
     [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  toolbar: {
    ...theme.mixins.toolbar,
  },

});

class PollsPage extends React.Component {
  constructor(props) {
    super(props);
    this.tabHeads = [
      {
        label: 'My Polls',
        icon: MyPollIcon
      },
      {
        label: 'All Polls',
        icon: PublicPollIcon
      }
    ];
  }
//<div className={classes.toolbar} />
  render() {
    const { classes, isPublic } = this.props;
    return (
      <div className={classes.container}>

        <div className={classes.content}>
          <Tabs tabHeads={this.tabHeads} isPublic={isPublic}>
            { Auth.isUserAuthenticated()
              && <UserPollList />
              || <NoPollsView
                    title='My Polls'
                    description="Please, log in first to view your polls"
                    link='/login'
                    buttonLabel='Login'
                  />
            }
            <PublicPollList />
          </Tabs>
        </div>
      </div>
    );
  }
}

export default withMenuWrapper(withStyles(styles, { withTheme: true})(PollsPage));
