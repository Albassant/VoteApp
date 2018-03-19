import React from 'react';
import Auth from '../modules/Auth';
import UserStore from '../stores/UserStore';

import ReactDOM from 'react-dom';

class LogoutPage extends React.Component {
  componentWillMount() {
    // clear token
    Auth.deauthenticateUser();
    // change the current URL to /
    UserStore.clearLoginData();
    this.props.history.replace('/'); //FIXME!!! think about this scenario
  }

  render() {
    return null;
  }
}

export default LogoutPage;
