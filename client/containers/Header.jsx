import React from 'react';
import PropTypes from 'prop-types';
import Auth from '../modules/Auth';

import { withStyles } from 'material-ui/styles';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

import cyan from 'material-ui/colors/cyan';

const styles = {
  logo: {
    flex: 1,
    cursor: 'pointer'
  },
};

class Header extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.logo} variant='display1' type="title" color="inherit" onClick={() => this.props.history.push('/')}>
            VoteApp!
          </Typography>

          { !Auth.isUserAuthenticated() &&
            <div>
              <Button color="inherit" onClick={() => this.props.history.push('/login')}>Log in</Button>
              <Button color="inherit" onClick={() => this.props.history.push('/register')}>Register</Button>
            </div>
          }
          { Auth.isUserAuthenticated() &&
            <Button color="inherit" onClick={() => this.props.history.push('/logout')}>Log out</Button>
          }
        </Toolbar>
      </AppBar>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);

