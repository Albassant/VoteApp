import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Auth from '../modules/Auth';

import { withStyles } from 'material-ui/styles';
import { CardActions } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

import PollIcon from 'material-ui-icons/Assignment';
import VoteIcon from 'material-ui-icons/Assessment';
import ShareIcon from 'material-ui-icons/Share';

import withMenuWrapper from './HOCs/withMenuWrapper.jsx';


const styles = theme => ({
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
    textDecoration: 'none',
    fontWeight: '500'
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
  },
  button: {
    backgroundColor: '#fff',
  }
});
// ${classes.black}
class HomePage extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.container}>
          <div>
            <img src="/logo.png" width='280px' alt="VoteApp logo" />
            <Typography variant='display2' color='inherit' className={classes.title}>
              VoteApp!
            </Typography>
            <Typography variant='headline' color='inherit'>
              Poll creation and voting have never been easier!
            </Typography>

            { !Auth.isUserAuthenticated() &&
            <Typography variant='headline' color='inherit'>
              No need to install anything, just sign up and start working
            </Typography>
            }
            <CardActions className={classes.actions}>
            { Auth.isUserAuthenticated() ?
              <Button variant='raised' className={classes.button}>
                <Link to={'/polls'} className={`${classes.link} ${classes.black}`}>My Polls</Link>
              </Button>
              :
              <Button variant='raised' className={classes.button}>
                <Link to={'/register'} className={`${classes.link} ${classes.black}`}>Get Started</Link>
              </Button>
            }
            </CardActions>


          </div>
        </div>
        <div className={classes.optionsContainer}>
          <div className={classes.option}>
            <PollIcon className={`${classes.icon} ${classes.orange}`} />
            <Typography variant="headline" component="h2" className={`${classes.blackLight} ${classes.title}`}>
              Create efficient polls
            </Typography>
            <Typography component="p">
              Easy to create polls. Just name your poll, add as many options as you want and save it with one click.
            </Typography>
          </div>
          <div className={classes.option}>
            <ShareIcon className={`${classes.icon} ${classes.orange}`} />
            <Typography variant="headline" component="h2" className={`${classes.blackLight} ${classes.title}`}>
              Share to get results
            </Typography>
            <Typography component="p">
              Share your polls and polls you like with your friends via direct link or via popular social networks in a one-click way
            </Typography>
          </div>
          <div className={classes.option}>
            <VoteIcon className={`${classes.icon} ${classes.orange}`} />
            <Typography variant="headline" component="h2" className={`${classes.blackLight} ${classes.title}`}>
              Collect accurate results
            </Typography>
            <Typography component="p">
              View results of voting on live graphs at any time in easy to understand format.
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

export default withMenuWrapper(withStyles(styles, { withTheme: true })(HomePage));
