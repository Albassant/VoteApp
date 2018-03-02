import React from 'react';
import Menu from '../MenuWrapper.jsx';


function withMenuWrapper(WrappedComponent) {
  return class extends React.Component {
    render() {
      return (
        <Menu>
          <WrappedComponent {...this.props} />
        </Menu>
      )
    }
  };
}

export default withMenuWrapper;
