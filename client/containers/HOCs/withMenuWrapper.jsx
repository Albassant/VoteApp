import React from 'react';
import Menu from '../MenuWrapper.jsx';

function withMenuWrapper(WrappedComponent) {
  return class extends React.Component {
    render() {
      return (
        <Menu>
          <WrappedComponent />
        </Menu>
      )
    }
  };
}

export default withMenuWrapper;
