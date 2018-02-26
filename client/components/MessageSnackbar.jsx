import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Snackbar from 'material-ui/Snackbar';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';

const styles = theme => ({
  close: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4,
  },
});

const MessageSnackbar = ({ show, message, classes, handleClose, showActionButton, handleAction }) => (
  <Snackbar
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
    open={show}
    autoHideDuration={6000}
    onClose={handleClose}
    SnackbarContentProps={{
      'aria-describedby': 'message-id',
    }}
    message={<span id="message-id">{message}</span>}
    action={[
      <Button key="copy" color="secondary" size="small" onClick={handleAction} hidden={!showActionButton}>
        Copy Link
      </Button>,
      <Icon key="close" onClick={handleClose}>close</Icon>
    ]}
  />
)

MessageSnackbar.propTypes = {
  classes: PropTypes.object.isRequired,
  message: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired
};

export default withStyles(styles)(MessageSnackbar);