import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';

import { withStyles } from 'material-ui/styles';
import Card, { CardText, CardHeader, CardContent, CardActions } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';

//import styles from '../styles';

const styles = {
  container: {
    width: '400px',
    margin: '0 auto',
    textAlign: 'center',
  },
  actions: {
    justifyContent: 'center',
  },
  field: {
    margin: '20px 40px'
  },
  title: {
    marginTop: '20px',
    paddingTop: '20px'
  }
}


function RegisterForm(props) {
  const { classes, errors, onChange, onSubmit, user } = props;
  return (
    <Card className={classes.container}>
      <Typography variant='title' className={classes.title}>
        Register
      </Typography>
      <form action="/" onSubmit={onSubmit}>

        {errors.summary && <p>{errors.summary}</p>}

        <div className={classes.field}>
           <TextField
             label="Name"
             name="name"
             onChange={onChange}
             error={!!errors.name}
             value={user.name}
             fullWidth
             autoFocus={true}
           />
        </div>
               
        <div className={classes.field}>
          <TextField
            label="Email"
            name="email"
            onChange={onChange}
            error={!!errors.email}
            value={user.email}
            fullWidth
          />
        </div>

        <div className={classes.field}>
          <TextField
            label="Password"
            type="password"
            name="password"
            onChange={onChange}
            error={!!errors.password}
            value={user.password}
            fullWidth
          />
        </div>

        <CardActions className={classes.actions}>
          <Button variant='raised' type="submit" color='primary'>Register</Button>
        </CardActions>

         <CardContent>
          <Typography component="p">
            Already have an account? <Link to={'/login'}>Log in</Link>
          </Typography>
        </CardContent>
      </form>
    </Card>
  )
};

RegisterForm.propTypes = {
  classes: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default withStyles(styles)(RegisterForm);
