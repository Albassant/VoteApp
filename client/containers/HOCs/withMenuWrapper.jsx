import React from 'react';
import Menu from '../MenuWrapper.jsx';


function withMenuWrapper(WrappedComponent, flatHeader = false, openDrawer = true) {
  return class extends React.Component {
    render() {
      return (
        <Menu flatHeader={flatHeader} openDrawer={openDrawer}>
          <WrappedComponent {...this.props} />
        </Menu>
      )
    }
  };
}

export default withMenuWrapper;
