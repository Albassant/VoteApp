import React from 'react';
import Menu from '../MenuWrapper.jsx';


function withMenuWrapper(WrappedComponent, flatHeader = false) {
  return class extends React.Component {
    render() {
      return (
        <Menu flatHeader={flatHeader}>
          <WrappedComponent {...this.props} />
        </Menu>
      )
    }
  };
}

export default withMenuWrapper;
