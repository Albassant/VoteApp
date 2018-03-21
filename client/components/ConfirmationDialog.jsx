import React from 'react';
import PropTypes from 'prop-types';

import Dialog, { DialogActions, DialogContent, DialogTitle, DialogContentText } from 'material-ui/Dialog';
import Button from 'material-ui/Button';


function ConfirmationDialog(props) {
  const { show,
          title,
          description,
          onContinue,
          onCancel,
        } = props;
  return (
    <Dialog
      open={show}
      onClose={onCancel}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">{description}</DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button variant='raised' type="submit" color='secondary' onClick={onContinue}>
          Continue
        </Button>
        <Button variant='raised' type="submit" color='primary' onClick={onCancel} autoFocus>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  )
};

ConfirmationDialog.propTypes = {
  show: PropTypes.bool.isRequired,
  onContinue: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default ConfirmationDialog;

