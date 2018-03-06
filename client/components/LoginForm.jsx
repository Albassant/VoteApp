import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { withStyles } from 'material-ui/styles';
import Card, { CardContent, CardActions } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import green from 'material-ui/colors/green';

import withMenuWrapper from '../containers/HOCs/withMenuWrapper.jsx';

const footerHeight = 182;

const styles = {
  container: {
    flex: 1,
    minHeight: `calc(100vh - ${footerHeight}px)`,
    paddingTop: '84px',
    paddingBottom: '64px',
    boxSizing: 'border-box',
  },
  content: {
    width: '25%',
    minWidth: '350px',
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
  },
  message: {
    color: green[500],
    marginTop: '10px'
  }
}

function LoginForm(props) {
  const { classes, message, errors, onChange, onSubmit, user } = props;
  return (
    <div className={classes.container}>
      <Card className={classes.content}>
        <Typography variant='title' className={classes.title}>
          Log in
        </Typography>

        <form action="/" onSubmit={onSubmit}>

          { message && <Typography variant='body2' className={classes.message}>{message}</Typography> }
          { errors.summary && <Typography variant='body2' color='error'>{errors.summary}</Typography> }

          <div className={classes.field}>
            <TextField
              label="Email"
              name="email"
              onChange={onChange}
              error={Boolean(errors.email)}
              helperText={errors.email}
              value={user.email}
              fullWidth
              autoFocus={true}
            />
          </div>

          <div className={classes.field}>
            <TextField
              label="Password"
              type="password"
              name="password"
              onChange={onChange}
              error={Boolean(errors.password)}
              helperText={errors.password}
              value={user.password}
              fullWidth
            />
          </div>

          <CardActions className={classes.actions}>
            <Button variant='raised' type="submit" color='primary'>Log in</Button>
          </CardActions>

           <CardContent>
            <Typography component="p">
              Not registered yet? <Link to={'/register'}>Register</Link>
            </Typography>
          </CardContent>
        </form>
      </Card>
    </div>
  )
};

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default withMenuWrapper(withStyles(styles)(LoginForm));
