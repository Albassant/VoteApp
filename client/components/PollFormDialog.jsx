import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';

import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Icon from 'material-ui/Icon';
import Typography from 'material-ui/Typography';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';

const styles = {
  container: {
    width: '50%',
    minWidth: '350px',
    margin: '10px auto',
    textAlign: 'center',
  },
  actions: {
    justifyContent: 'center',
  },
  field: {
    margin: '20px auto',
    position: 'relative',
    display: 'inline-block',
    width: '80%'
  },
  icons: {
    position: 'absolute',
    right: '10px',
    top: '10px',
    cursor: 'pointer'
  },
  title: {
    margin: '20px 0',
    paddingTop: '20px'
  }
}

const hints = ['Your favourite hot beverage', 'Coffee', 'Tea'];

const PollFormDialog = ({ show,
                          poll,
                          onClose,
                          onChangeName,
                          onChangeOptions,
                          onRemoveOption,
                          onAddOption,
                          onSubmit,
                          valid,
                          classes }) => (
  <Dialog
    open={show}
    onClose={onClose}
    aria-labelledby="form-dialog-title"
  >
    <DialogTitle id="form-dialog-title">New Poll</DialogTitle>
    <DialogContent>
      <Typography variant="subheading">Name your poll</Typography>
      <TextField
          name="name"
          label={hints[0]}
          onChange={onChangeName}
          value={poll.name}
          fullWidth
          multiline
          autoFocus
      />

      <Typography variant="subheading">Options</Typography>
      {
        poll.options.map((opt, i) =>
           <div key={i} className={classes.field}>
              <TextField
                name={`${i}`}
                onChange={onChangeOptions}
                label={i < 3 && hints[i+1] || 'Your Option'}
                value={opt}
                fullWidth
                multiline
              />
              {
                i > 1 &&
                <Icon color="secondary" className={classes.icons} onClick={onRemoveOption}>remove_circle_outline</Icon>
              }
          </div>
        )
      }
    </DialogContent>
    <DialogActions>
      <Button variant='raised' color='primary' onClick={onAddOption}>
        Add option
      </Button>
      <Button variant='raised' type="submit" color='primary' disabled={!valid} onClick={onSubmit}>
        Submit
      </Button>
      <Button variant='raised' type="submit" color='secondary' onClick={onClose}>
        Cancel
      </Button>
    </DialogActions>
  </Dialog>
)

PollFormDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  poll: PropTypes.object.isRequired
}

export default withStyles(styles)(PollFormDialog);