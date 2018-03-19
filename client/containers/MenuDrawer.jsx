import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Auth from '../modules/Auth';
import { withStyles } from 'material-ui/styles';

import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import ChevronRightIcon from 'material-ui-icons/ChevronRight';
import List, { ListItem, ListItemText, ListItemIcon } from 'material-ui/List';


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
  },
  toolbar: {
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
//<div className={classes.toolbar} />
const MenuDrawer = ({ classes, open, handleDrawerClose }) => (
  // openDrawer ?
  <Drawer
    variant="persistent"
    open={open}
    classes={{ paper: classes.drawerPaper }}
  >
    <div className={classes.drawerHeader}>
      <IconButton onClick={handleDrawerClose}>
        <ChevronRightIcon />
      </IconButton>
    </div>
    <Divider />
      <List>
        <ListItem button>
          <Link to='/public/polls' className={classes.item}>
            <ListItemText primary="Polls" />
          </Link>
          </ListItem>

        <ListItem button>
          <Link to='/' className={classes.item}>
            <ListItemText primary="About" />
          </Link>
        </ListItem>
      </List>
  </Drawer>
  // : null
)

MenuDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
  handleDrawerClose: PropTypes.func,
}

export default withStyles(styles, { withTheme: true })(MenuDrawer);
