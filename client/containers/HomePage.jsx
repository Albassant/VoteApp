import React from 'react';
import PropTypes from 'prop-types';
import Auth from '../modules/Auth';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { withStyles } from 'material-ui/styles';
import Card, { CardHeader, CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';

import PollIcon from 'material-ui-icons/Assignment';
import VoteIcon from 'material-ui-icons/Assessment';
import ShareIcon from 'material-ui-icons/Share';

import withMenuWrapper from './HOCs/withMenuWrapper.jsx';

const drawerWidth = 240;

const styles = theme => ({
  main: {
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 0,
    // minHeight: '100vh'
  },
  mainShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: drawerWidth
  },
  container: {
    display: 'flex',
    backgroundColor: '#3f51b5',
    color: '#fff',
    minHeight: '95vh',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    boxSizing: 'border-box'
  },
  content: {
    flex: '1 0 100%',
    display: 'block'
  },
  actions: {
    justifyContent: 'center',
    marginTop: 20
  },
  link: {
    textDecoration: 'none'
  },
  black: {
    color: 'rgba(0, 0, 0, 0.87)'
  },
  blackLight: {
    color: 'rgba(0, 0, 0, 0.54)'
  },
  orange: {
    color: '#ffb300'
  },
  title: {
    marginBottom: '0.35em',
  },
  optionsContainer: {
    display: 'flex',
    minHeight: '400px',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    textAlign: 'center',
    flexWrap: 'wrap'
  },
  option: {
    flex: 1,
    minWidth: '300px',
    maxWidth: '20%',
    [theme.breakpoints.between('xs', 'sm')]: {
      minWidth: '60%',
    },
  },
  icon: {
    marginTop: '16px',
    width: '72px',
    height: '72px'
  },
  title: {
    marginBottom: '16px'
  }
});

class HomePage extends React.Component {
  render() {
    const { classes, openDrawer } = this.props;
    return (
      <div className={ classNames(classes.main, {[classes.mainShift]: openDrawer}) }>
        <div className={classes.container}>
          <div>
            <img src="/logo.png" width='280px' alt="VoteApp logo" />
            <Typography variant='display2' color='inherit' className={classes.title}>
              VoteApp!
            </Typography>
            <Typography variant='headline' color='inherit'>
              free web-based application for poll voting contests creation
            </Typography>
            <Typography variant='headline' color='inherit'>
              and viewing the results in real time
            </Typography>
            <CardActions className={classes.actions}>
              <Button variant='raised'>
                <Link to={'/public/polls'} className={`${classes.link} ${classes.black}`}>View Polls</Link>
              </Button>
            </CardActions>
          </div>
        </div>
        <div className={classes.optionsContainer}>
          <div className={classes.option}>
            <PollIcon className={`${classes.icon} ${classes.orange}`} />
            <Typography variant="headline" component="h2" className={`${classes.blackLight} ${classes.title}`}>
              Create
            </Typography>
            <Typography component="p">
              Create polls any time anywhere with our online application. No need to install anything, just sign up and start working!
            </Typography>
          </div>
          <div className={classes.option}>
            <VoteIcon className={`${classes.icon} ${classes.orange}`} />
            <Typography variant="headline" component="h2" className={`${classes.blackLight} ${classes.title}`}>
              View
            </Typography>
            <Typography component="p">
              View results of voting on live graphs at any time in easy to understand format for your own polls and for polls you have voted
            </Typography>
          </div>
          <div className={classes.option}>
            <ShareIcon className={`${classes.icon} ${classes.orange}`} />
            <Typography variant="headline" component="h2" className={`${classes.blackLight} ${classes.title}`}>
              Share
            </Typography>
            <Typography component="p">
              Share your polls and polls you like with your friends via direct link or via popular social networks in one-click way
            </Typography>
          </div>
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withMenuWrapper(withStyles(styles, {withTheme: true})(HomePage));
