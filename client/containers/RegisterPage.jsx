import React from 'react';
import RegisterForm from '../components/RegisterForm.jsx';
import axios from 'axios';
import querystring from 'querystring';

class RegisterPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    // set the initial component state
    this.state = {
      errors: {},
      user: {
        email: '',
        name: '',
        password: ''
      }
    };

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
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

    console.log(formData);
    axios.post('/auth/register', formData)
    .then(response => {
      this.setState({
          errors: {}
        });

      console.log(this.state.errors);
      console.log('The form is valid');
      // set a message
      localStorage.setItem('successMessage', response.data.message);
      // make a redirect
      this.props.history.replace('/login'); // FIXME!!! think about this scenario
    })
    .catch(error => {
      if (error.response) {
        const errors = error.response.data.errors;
        errors.summary = error.response.data.message;
        this.setState({
          errors
        });
        console.log(error.response.data);
      }
      else {
        console.log("catch error: " + error);
      }
    });
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
      />
    );
  }

}

export default RegisterPage;