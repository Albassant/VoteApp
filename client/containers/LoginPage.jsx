import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Auth from '../modules/Auth';
import querystring from 'querystring';

import LoginFormDialog from '../components/LoginFormDialog.jsx';
import LoginForm from '../components/LoginForm.jsx';


class LoginPage extends React.Component {

  constructor(props) {
    super(props);

    let successMessage = localStorage.getItem('successMessage') || '';
    localStorage.removeItem('successMessage');

    // set the initial component state
    this.state = {
      errors: {},
      successMessage,
      user: {
        email: '',
        password: ''
      }
    };

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
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

    axios.post('/auth/login', formData)
    .then(response => {
      //this.setState({ errors: {} });
      Auth.authenticateUser(response.data.token); // save the token
      this.props.history.replace('/'); // change the current URL to / //FIXME!!! redirect to proper place
    })
    .catch(error => {
      const errors = error.response.data.errors || {};
      errors.summary = error.response.data.message;
      this.setState({ errors });
    });
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
        successMessage={this.state.successMessage}
        user = {this.state.user}
      />
    );
  }
}

LoginPage.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default LoginPage;
/*

*/

/*

<LoginFormDialog
        show={this.props.show}
        onClose={this.props.onClose}
        onSubmit = {this.processForm}
        onChange = {this.changeUser}
        errors = {this.state.errors}
        user = {this.state.user}
      />
*/