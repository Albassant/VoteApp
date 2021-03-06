import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import Auth from '../modules/Auth';
import { withStyles } from 'material-ui/styles';

import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import ChevronRightIcon from 'material-ui-icons/ChevronRight';
import List, { ListItem, ListItemText } from 'material-ui/List';


const drawerWidth = 200;

const styles = theme => ({
  list: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  item: {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
      color: "rgba(0, 0, 0, 0.54)"
    },
  }
});

const MenuDrawer = ({ classes, open, handleDrawerClose }) => (
  <Drawer
    variant="persistent"
    open={open}
    onClose={handleDrawerClose}
  >
    <div className={classes.drawerHeader}>
      <IconButton onClick={handleDrawerClose}>
        <ChevronRightIcon />
      </IconButton>
    </div>
    <Divider />
      <List className={classes.list}>
        <ListItem
          button
          className={classes.item}
          component={(props) => <NavLink to='/public/polls' activeStyle={{textDecoration: 'underline'}} {...props} />}
        >
          <ListItemText primary="Polls" />
        </ListItem>

        <ListItem
          button
          className={classes.item}
          component={(props) => <NavLink exact to='/' activeStyle={{textDecoration: 'underline'}} {...props} />}
        >
          <ListItemText primary="About" />
        </ListItem>
      </List>
  </Drawer>
)

MenuDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
  handleDrawerClose: PropTypes.func,
}

export default withStyles(styles, { withTheme: true })(MenuDrawer);
