import React from 'react';
import Auth from '../modules/Auth';

import ReactDOM from 'react-dom';

class LogoutPage extends React.Component {
  componentWillMount() {
    // clear token
    Auth.deauthenticateUser();
    // change the current URL to /
    this.props.history.replace('/');
  }

  render() {
    return null;
  }
}

export default LogoutPage;
