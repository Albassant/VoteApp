import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { withStyles } from 'material-ui/styles';
import Card, { CardText, CardHeader, CardContent, CardActions } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';

import Dialog, { DialogActions, DialogContent, DialogTitle } from 'material-ui/Dialog';

const styles = {
  container: {
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
  }
}

function LoginForm(props) {
  const { show, onClose, classes, errors, onChange, onSubmit, user } = props;
  return (
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      open={show}
      onClose={onClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Log In</DialogTitle>
      <DialogContent>
          <TextField
            label="Email"
            name="email"
            onChange={onChange}
            error={!!errors.email}
            value={user.email}
            fullWidth
            autoFocus={true}
          />

          <TextField
            label="Password"
            type="password"
            name="password"
            onChange={onChange}
            error={!!errors.password}
            value={user.password}
            fullWidth
          />
      </DialogContent>

      <DialogActions>
        <Button variant='raised' type="submit" color='primary' onClick={onSubmit}>
          Log In
        </Button>
        <Button variant='raised' type="submit" color='secondary' onClick={onClose}>
          Cancel
        </Button>
        <Typography component="p">
          Not registered yet? <Link to={'/register'}>Register</Link>
        </Typography>
      </DialogActions>
    </Dialog>
  )
};

LoginForm.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default withStyles(styles)(LoginForm);
