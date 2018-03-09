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
import IconButton from 'material-ui/IconButton';
import Menu, { MenuItem } from 'material-ui/Menu';
import MenuIcon from 'material-ui-icons/Menu';
import AccountCircle from 'material-ui-icons/AccountCircle';

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
    marginRight: 12,
  },
  rightButtons: {
    marginRight: 12,
  },
  rightButtonsShift: {
    marginRight: -12,
  },
  hide: {
    display: 'none',
  },
  logo: {
    flex: 1,
    cursor: 'pointer'
  },
  link: {
    textDecoration: 'none',
  },
  black: {
    color: 'rgba(0, 0, 0, 0.87)'
  },
  white: {
    color: '#fff'
  }
});

class Header extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      anchorEl: null
    };

    this.handleClose = this.handleClose.bind(this);
    this.handleMenu = this.handleMenu.bind(this);
  }

  handleMenu(event) {
    this.setState({ anchorEl: event.currentTarget });
  }

  handleClose() {
    this.setState({ anchorEl: null });
  }

  render() {
    const { classes, openDrawer, handleDrawerOpen, flat } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <AppBar
        position="fixed"
        elevation={flat ? 0 : 1}
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
            <Link className={classNames(classes.link, classes.white)} to={'/'}>
              VoteApp!
            </Link>
          </Typography>

           {Auth.isUserAuthenticated() && (
              <div>
                <IconButton
                  className={classNames(classes.rightButtons, {[classes.rightButtonsShift]: openDrawer})}
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>
                    <Link to={'/'} className={classNames(classes.link, classes.black)}>
                      My Account (TBD)
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={this.handleClose}>
                    <Link to={'/logout'} className={classNames(classes.link, classes.black)}>
                      Log out
                    </Link>
                  </MenuItem>
                </Menu>
              </div>
            )}

            { !Auth.isUserAuthenticated() &&
              <div className={classNames(classes.rightButtons, {[classes.rightButtonsShift]: openDrawer})}>
                <Button color="inherit">
                  <Link to={'/login'} className={classNames(classes.link, classes.white)}>
                    Log in
                  </Link>
                </Button>
                <Button color="inherit">
                  <Link to={'/register'} className={classNames(classes.link, classes.white)}>
                    Register
                  </Link>
                </Button>
              </div>
            }

        </Toolbar>
      </AppBar>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  openDrawer: PropTypes.bool.isRequired,
  handleDrawerOpen: PropTypes.func.isRequired,
  flat: PropTypes.bool.isRequired
};

export default withStyles(styles, { withTheme: true })(Header);
