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

import Header from './Header.jsx';
import Footer from './Footer.jsx';


const drawerWidth = 240;

const styles = theme => ({
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  }
});

class MenuWrapper extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };

    this.handleDrawerClose = this.handleDrawerClose.bind(this);
    this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
  }

  handleDrawerOpen() {
    this.setState({ open: true });
  };

  handleDrawerClose() {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    const drawer = (
      <Drawer
        variant="persistent"
        open={open}
        classes={{ paper: classes.drawerPaper }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={this.handleDrawerClose}>
            <ChevronRightIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button>
            <ListItemText primary="Trash" />
          </ListItem>
          <ListItem button component="a" href="#simple-list">
            <ListItemText primary="Spam" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button>
            <ListItemText primary="Trash" />
          </ListItem>
          <ListItem button component="a" href="#simple-list">
            <ListItemText primary="Spam" />
          </ListItem>
        </List>
      </Drawer>
    );

    return (
      <div className={classes.root}>
        <Header openDrawer={this.state.open} handleDrawerOpen={this.handleDrawerOpen} />
        { drawer }
        { React.cloneElement(this.props.children, { openDrawer: this.state.open })}
        <Footer openDrawer={this.state.open} />
      </div>
    );
  }
}

MenuWrapper.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MenuWrapper);
