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
  container: common.container,
  actions: common.actions,
  ...regForms,
  toolbar: theme.mixins.toolbar
});


const RegisterForm = ({ classes, errors, message, onChange, onSubmit, user }) => (
  <div>
    <div className={classes.toolbar} />
    <div className={classes.container}>
      <Card className={classes.content}>
        <Typography variant='title' gutterBottom>
          Register
        </Typography>
        <form action="/" onSubmit={onSubmit}>

          { message && <Typography variant='body2' className={classes.message}>{message}</Typography> }
          { errors.summary && <Typography variant='body2' color='error'>{errors.summary}</Typography> }

          <div className={classes.field}>
             <TextField
               label="Name"
               name="name"
               onChange={onChange}
               error={Boolean(errors.name)}
               helperText={errors.name}
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
              error={Boolean(errors.email)}
              helperText={errors.email}
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
              error={Boolean(errors.password)}
              helperText={errors.password}
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
    </div>
  </div>
)


RegisterForm.propTypes = {
  classes: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default withMenuWrapper(withStyles(styles, {withTheme: true})(RegisterForm));
