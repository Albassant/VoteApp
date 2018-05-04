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
    minHeight: '100vh',
    paddingBottom: '182px'
  },
  content: {
    width: '100%',
    minHeight: '100%',
    paddingBottom: theme.spacing.unit * 3,
  },
  contentTopPadding: {
    paddingTop: theme.spacing.unit * 4,
  },
  footer: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    left: 0,
    height: '182px'
  },
  toolbar: {
    ...theme.mixins.toolbar,
  },
})


class MenuWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openDrawer: false
    };

    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  toggleDrawer(open) {
    this.setState({ openDrawer: open });
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
        <Header openDrawer={openDrawer} handleDrawerOpen={() => this.toggleDrawer(true)} flat={flatHeader} />
        <MenuDrawer open={openDrawer} handleDrawerClose={() => this.toggleDrawer(false)} handleDrawerOpen={() => this.toggleDrawer(true)} />
        <div className={classes.container}>
          <div className={classes.toolbar} />
          <div className={classNames(classes.content, {[classes.contentTopPadding]: !flatHeader})}>
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
