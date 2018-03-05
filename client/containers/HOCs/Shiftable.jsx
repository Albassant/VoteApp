import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';

const drawerWidth = 240;

const styles = theme => ({
  content: {
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 0,
    height: '100%'
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: drawerWidth
  },
})

function Shiftable(props) {
  const { classes, shift } = props;
  return (
    <div className={classNames(classes.content, {[classes.contentShift]: shift})}>
      { props.children }
    </div>
  );
}

Shiftable.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  shift: PropTypes.bool.isRequired,
};

export default withStyles(styles, { withTheme: true })(Shiftable);