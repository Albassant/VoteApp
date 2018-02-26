import React from 'react';
import PropTypes from 'prop-types';
import Auth from '../modules/Auth';
import { Link } from 'react-router-dom';

import { withStyles } from 'material-ui/styles';
import Card, { CardHeader, CardActions } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';


const styles = {
  container: {
    flex: '0 0 auto',
    display: 'flex',
    backgroundColor: '#3f51b5',
    color: '#fff',
    minHeight: '90vh',
    alignItems: 'center',
    justifyContent: 'center',

    textAlign: 'center'
  },
  actions: {
    justifyContent: 'center',
    marginTop: 20
  },
  link: {
    textDecoration: 'none'
  },
  white: {
    color: '#fff'
  },
  black: {
    color: 'rgba(0, 0, 0, 0.87)'
  }
};

class HomePage extends React.Component {

  render() {
    const { classes } = this.props;
    return (

      <div className={classes.container}>
        <div>
          <Typography variant='display2' color='inherit'>
            VoteApp!
          </Typography>
          <Typography variant='headline' color='inherit'>
            Create poll voting contests and view the results in real time
          </Typography>
          { !Auth.isUserAuthenticated() &&
            <CardActions className={classes.actions}>
                <Button variant='raised'>
                  <Link to={'/login'} className={`${classes.link} ${classes.black}`}>Log in</Link>
                </Button>
                <Button variant='raised' color="secondary">
                  <Link to={'/register'} className={`${classes.link} ${classes.white}`}>Register</Link>
                </Button>
            </CardActions>
          }
          { Auth.isUserAuthenticated() &&
            <CardActions className={classes.actions}>
              <Button variant='raised'>
                <Link to={'/polls'} className={`${classes.link} ${classes.black}`}>My Polls</Link>
              </Button>
            </CardActions>
          }
        </div>
      </div>

    );
  }

}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomePage);
