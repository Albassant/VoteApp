import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { withStyles } from 'material-ui/styles';
import Card, { CardContent, CardActions } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';

import withMenuWrapper from '../containers/HOCs/withMenuWrapper.jsx';
import { common, regForms } from './styles/commonStyles';

const styles = theme => ({
  actions: common.actions,
  ...regForms,
});


function LoginForm(props) {
  const { classes, message, errors, onChange, onSubmit, user } = props;
  return (
    <Card className={classes.content}>
      <Typography variant='title' gutterBottom>
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
  )
};

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default withMenuWrapper(withStyles(styles, {withTheme: true})(LoginForm));
