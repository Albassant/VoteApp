import React from 'react';
import Auth from '../modules/Auth';
import querystring from 'querystring';

import UserActions from '../actions/UserActions';
import UserStore from '../stores/UserStore';

import LoginForm from '../components/LoginForm.jsx';


class LoginPage extends React.Component {

  constructor(props) {
    super(props);

    // set the initial component state
    this.state = {
      errors: UserStore.getErrors(),
      message: UserStore.getMessage(),
      user: {
        email: '',
        password: ''
      }
    };

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
    this._onResponseReceived = this._onResponseReceived.bind(this);
  }

  componentDidMount() {
    UserStore.addChangeListener(this._onResponseReceived);
  }

  componentWillUnmount() {
    UserStore.removeChangeListener(this._onResponseReceived);
  }

  _onResponseReceived() {
    this.setState({ errors: UserStore.getErrors(), message: UserStore.getMessage() }, () => {
      if (UserStore.isSuccessful()) {
        this.props.history.replace('/'); //FIXME replace with link user wanted to open at first
      }
    });
  }

  /**
   * Process the form.
   *
   * @param {object} event - the JavaScript event object
   */
  processForm(event) {
    event.preventDefault();

    var formData = querystring.stringify({ // create a string for an HTTP body message
                "email": this.state.user.email,
                "password": this.state.user.password });

    UserActions.login(formData);
  }

  /**
   * Change the user object.
   *
   * @param {object} event - the JavaScript event object
   */
  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({ user });
  }

  render() {
    return (
      <LoginForm
        onSubmit = {this.processForm}
        onChange = {this.changeUser}
        errors = {this.state.errors}
        message={this.state.message}
        user = {this.state.user}
      />
    );
  }
}

export default LoginPage;
