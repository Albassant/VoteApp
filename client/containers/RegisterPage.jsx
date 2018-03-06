import React from 'react';
import RegisterForm from '../components/RegisterForm.jsx';
import querystring from 'querystring';

import UserActions from '../actions/UserActions';
import UserStore from '../stores/UserStore';

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: UserStore.getErrors(),
      message: UserStore.getMessage(),
      user: {
        email: '',
        name: '',
        password: ''
      }
    };

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
    this._onResponseReceived = this._onResponseReceived.bind(this);
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

  _onResponseReceived() {
    UserStore.removeChangeListener(this._onResponseReceived);
    this.setState({ errors: UserStore.getErrors(), message: UserStore.getMessage() }, () => {
      if (UserStore.isSuccessful()) {
        this.props.history.replace('/login');
      }
    });
  }

  /**
   * Process the form.
   *
   * @param {object} event - the JavaScript event object
   */
  processForm(event) {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();

    // create a string for an HTTP body message
    var formData = querystring.stringify({
                "name": this.state.user.name,
                "email": this.state.user.email,
                "password": this.state.user.password
              });
    UserStore.addChangeListener(this._onResponseReceived);
    UserActions.register(formData);
  }

  /**
   * Render the component.
   */
  render() {
    return (
      <RegisterForm
        onSubmit = {this.processForm}
        onChange = {this.changeUser}
        errors = {this.state.errors}
        user = {this.state.user}
        message = {this.state.message}
      />
    );
  }

}

export default RegisterPage;