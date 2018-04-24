import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';
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

import { common } from './styles/commonStyles';

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
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
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
  leftGroup: {
    flex: 1,
  },
  leftButtons: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  logo: {
    display: 'inline-flex',
    cursor: 'pointer',
    marginRight: '10px',
    marginLeft: '12px'
  },
  link: common.link,
  black: common.black,
  white: common.white,
  navButton: {
    '&:hover': {
      backgroundColor: 'inherit',
      textDecoration: 'underline',
      color: "rgba(0, 0, 0, 0.54)"
    },
  },
});

class Header extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      anchorEl: null,
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
          <div className={classes.leftGroup}>
            <Typography
              variant='title'
              color="inherit"
              noWrap
              className={classes.logo}
            >
              <NavLink className={classNames(classes.link, classes.white)} to={'/'}>
                VoteApp!
              </NavLink>
            </Typography>
            <Button
              color="inherit"
              className={classNames(classes.leftButtons, classes.navButton)}
              component={(props) => (
                <Link to='/'
                  className={classNames(classes.link, classes.white)}
                  activeStyle={{textDecoration: 'underline', color: "rgba(0, 0, 0, 0.54)"}}
                  {...props}
                >
                  About
                </Link>)
              }
            />
            <Button color="inherit" className={classNames(classes.leftButtons, classes.navButton)}>
              <NavLink to={'/public/polls'} className={classNames(classes.link, classes.white)} activeStyle={{textDecoration: 'underline'}}>
                Polls
              </NavLink>
            </Button>
          </div>
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
                    <NavLink exact to={'/'} className={classNames(classes.link, classes.black)}>
                      My Account (TBD)
                    </NavLink>
                  </MenuItem>
                  <MenuItem onClick={this.handleClose}>
                    <NavLink to={'/logout'} className={classNames(classes.link, classes.black)}>
                      Log out
                    </NavLink>
                  </MenuItem>
                </Menu>
              </div>
            )}

            { !Auth.isUserAuthenticated() &&
              <div className={classNames(classes.rightButtons, {[classes.rightButtonsShift]: openDrawer})}>
                <Button color="inherit" className={classes.navButton}>
                  <NavLink to={'/login'} className={classNames(classes.link, classes.white)} activeStyle={{textDecoration: 'underline'}}>
                    Log in
                  </NavLink>
                </Button>
                <Button color="inherit" className={classes.navButton}>
                  <NavLink to={'/register'} className={classNames(classes.link, classes.white)} activeStyle={{textDecoration: 'underline'}}>
                    Register
                  </NavLink>
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
