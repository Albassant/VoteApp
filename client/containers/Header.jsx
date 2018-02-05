import React, { PropTypes } from 'react';
import Auth from '../modules/Auth';

import { withStyles } from 'material-ui/styles';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

import cyan from 'material-ui/colors/cyan';

const styles = {
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
};

class Header extends React.Component {
  render() {
    const { classes } = this.props;
    return (
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <Typography className={classes.flex} type="title" color="inherit" onClick={() => this.props.history.push('/')}>
                VoteApp
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
        </div>
      
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);

