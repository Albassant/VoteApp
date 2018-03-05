import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header.jsx';
import Footer from './Footer.jsx';
import MenuDrawer from './MenuDrawer.jsx';
import Shiftable from './HOCs/Shiftable.jsx';


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
    const { classes, children } = this.props;
    const { open } = this.state;
    return (
      <div>
        <Header openDrawer={open} handleDrawerOpen={this.handleDrawerOpen} />
        <MenuDrawer open={open} handleDrawerClose={this.handleDrawerClose} />
        <Shiftable shift={open}>
          { React.cloneElement(children, {openDrawer: open}) }
        </Shiftable>
        <Footer openDrawer={open} />
      </div>
    );
  }
}

export default MenuWrapper;
