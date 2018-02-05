import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';

import { withStyles } from 'material-ui/styles';
import { Card, CardText, CardHeader, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';

import styles from '../styles';

function RegisterForm(props) {
  const { classes, successMessage, errors, onChange, onSubmit, user } = props;
  return (
    <Card>
    <CardHeader title="Register" />
    <form action = "/" onSubmit = {onSubmit}>

      {errors.summary && <p>{errors.summary}</p>}

      <div>
        <TextField
          label="Name"
          name="name"
          onChange={onChange}
          error={errors.name}
          value={errors && errors.name || user.name}
        />
      </div>

      <div>
        <TextField
          label="Email"
          name="email"
          error={errors.email}
          onChange={onChange}
          value={errors && errors.email || user.email}
        />
      </div>

      <div>
        <TextField
          label="Password"
          type="password"
          name="password"
          onChange={onChange}
          error={errors.password}
          value={errors && errors.password || user.password}
        />
      </div>

      <div>
        <Button variant='raised' type="submit" color='primary'>Create New Account</Button>
      </div>

      <CardContent>
        <Typography component="p">
          Already have an account? <Link to={'/login'}>Log in</Link>
        </Typography>
      </CardContent>
    </form>
  </Card>
  );
}

RegisterForm.propTypes = {
  classes: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default withStyles(styles)(RegisterForm);