import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Auth from '../modules/Auth';

import { withStyles } from 'material-ui/styles';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Menu, { MenuItem } from 'material-ui/Menu';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

const styles = {
  logo: {
    flex: 1,
    cursor: 'pointer'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  link: {
    textDecoration: 'none',
    color: '#fff'
  }
};

class Header extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <AppBar position="fixed" elevation={0}>
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography className={classes.logo} variant='display1' type="title" color="inherit">
            <Link className={classes.link} to={'/'}>
              VoteApp!
            </Link>
          </Typography>

          { !Auth.isUserAuthenticated() &&
            <div>
              <Button color="inherit">
                <Link to={'/login'} className={classes.link}>
                  Log in
                </Link>
              </Button>
              <Button color="inherit">
                <Link to={'/register'} className={classes.link}>
                  Register
                </Link>
              </Button>
            </div>
          }
          { Auth.isUserAuthenticated() &&
            <Button color="inherit">
              <Link to={'/logout'} className={classes.link}>
                Log out
              </Link>
            </Button>
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

