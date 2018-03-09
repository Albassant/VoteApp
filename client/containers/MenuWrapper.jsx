import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header.jsx';
import Footer from './Footer.jsx';
import MenuDrawer from './MenuDrawer.jsx';

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


class MenuWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openDrawer: false
    };

    this.handleDrawerClose = this.handleDrawerClose.bind(this);
    this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
  }

  handleDrawerOpen() {
    this.setState({ openDrawer: true });
  };

  handleDrawerClose() {
    this.setState({ openDrawer: false });
  };

  render() {
    const { children, classes, flatHeader } = this.props;
    const { openDrawer } = this.state;

    // var newChildren = React.Children.map(children, function(child) {
    //   return React.cloneElement(child, { openDrawer: openDrawer })
    // });

    return (
      <div>
        <Header openDrawer={openDrawer} handleDrawerOpen={this.handleDrawerOpen} flat={flatHeader} />
        <MenuDrawer open={openDrawer} handleDrawerClose={this.handleDrawerClose} />
        <div className={classNames(classes.content, {[classes.contentShift]: openDrawer})}>
           { children }
        </div>
        <div className={classNames(classes.content, {[classes.contentShift]: openDrawer})}>
          <Footer />
        </div>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(MenuWrapper);
