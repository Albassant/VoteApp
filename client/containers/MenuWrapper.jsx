import React from 'react';
import PropTypes from 'prop-types';

import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import MenuDrawer from '../components/MenuDrawer.jsx';

import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';

const styles = theme => ({
  fade: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: '1',
    position: 'fixed',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    opacity: 1,
    willChange: 'opacity',
    transition: 'opacity 195ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
  },
  hide: {
    opacity: '0',
    display: 'none'
  },
  container: {
    position: 'relative',
    minHeight: '100%',
    paddingBottom: '190px'
  },
  content: {
    width: '100%',
    minHeight: '100%',
  },
  footer: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    left: 0,
    height: '182px'
  }
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
// var newChildren = React.Children.map(children, function(child)
// {
//   return React.cloneElement(child, { openDrawer: openDrawer })
// });
  render() {
    const { classes, children, flatHeader } = this.props;
    const { openDrawer } = this.state;
    return (
      <div>
        <Header openDrawer={openDrawer} handleDrawerOpen={this.handleDrawerOpen} flat={flatHeader} />
        <MenuDrawer open={openDrawer} handleDrawerClose={this.handleDrawerClose} />
        <div className={classes.container}>
        <div className={classes.content}>
          { children }
          <div className={classNames(classes.fade, {[classes.hide]: !openDrawer})}></div>
        </div>
        <div className={classes.footer}>
          <Footer />
        </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(MenuWrapper);
