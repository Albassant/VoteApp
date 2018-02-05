import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';

import { withStyles } from 'material-ui/styles';
import Card, { CardText, CardHeader, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';

import styles from '../styles';

function LoginForm(props) {
  const { classes, successMessage, errors, onChange, onSubmit, user } = props;
  return(
    <Card>
      <CardHeader title="Log In" />
      <form action="/" onSubmit={onSubmit}>

        {successMessage && <p>{successMessage}</p>}
        {errors.summary && <p>{errors.summary}</p>}

        <div>
          <TextField
            label="Email"
            name="email"
            error={errors.mail}
            onChange={onChange}
            value= {errors && errors.email || user.email}
          />
        </div>

        <div>
          <TextField
            label="Password"
            type="password"
            name="password"
            onChange={onChange}
            error={errors.password}
            value= {errors && errors.password || user.password}
          />
        </div>

        <div>
          <Button variant='raised' type="submit" color='primary'>Log in</Button>
        </div>

         <CardContent>
          <Typography component="p">
            Not registered yet? <Link to={'/register'}>Register</Link>
          </Typography>
        </CardContent>
      </form>
    </Card>
  )
};

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default withStyles(styles)(LoginForm);
