import React from 'react';
import PropTypes from 'prop-types';
import Auth from '../modules/Auth';
import { Link } from 'react-router-dom';

import { withStyles } from 'material-ui/styles';
import Card, { CardHeader, CardActions } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';

import LoginPage from './LoginPage.jsx';

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
  },
  title: {
    marginBottom: '0.35em',
  }
};

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
      </div>
    );
  }

}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomePage);
