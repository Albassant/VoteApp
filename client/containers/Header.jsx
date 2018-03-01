import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Auth from '../modules/Auth';
import classNames from 'classnames';

import { withStyles } from 'material-ui/styles';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import ChevronRightIcon from 'material-ui-icons/ChevronRight';
import List, { ListItem, ListItemText } from 'material-ui/List';

const drawerWidth = 240;

const styles = theme => ({
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: drawerWidth
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  logo: {
    marginRight: 'auto',
    cursor: 'pointer'
  },
  link: {
    textDecoration: 'none',
    color: '#fff'
  }
});

class Header extends React.Component {
  render() {
    const { classes, openDrawer, handleDrawerOpen } = this.props;
    return (
      <AppBar
        position="fixed"
        elevation={0}
        className={classNames(classes.appBar, {[classes.appBarShift]: openDrawer})}
      >
        <Toolbar disableGutters={!openDrawer}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={classNames(classes.menuButton, openDrawer && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant='title'
            color="inherit"
            noWrap
            className={classes.logo}
          >
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
  openDrawer: PropTypes.bool.isRequired,
  handleDrawerOpen: PropTypes.func.isRequired
};

export default withStyles(styles, { withTheme: true })(Header);
