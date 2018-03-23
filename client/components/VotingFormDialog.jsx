import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';

import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormControl } from 'material-ui/Form';
import Dialog, { DialogActions, DialogContent, DialogTitle } from 'material-ui/Dialog';

import Button from 'material-ui/Button';

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
  title: {
    margin: '20px 0',
    paddingTop: '20px'
  }
}


const VotingFormDialog = ({ classes,
                            show,
                            onSubmit,
                            onChange,
                            onClose,
                            poll,
                            optionIdx
                          }) => (
  <Dialog
    open={show}
    onClose={onClose}
    aria-labelledby="form-dialog-title"
  >
    <DialogTitle id="form-dialog-title">{poll.name}</DialogTitle>
    <DialogContent>
      <FormControl component="fieldset">
        <RadioGroup
          name={poll._id}
          className={classes.group}
          value={optionIdx}
          onChange={onChange}
        >
          { poll.questions ?
              poll.questions.map((option, key) =>
                <FormControlLabel
                key={key}
                value={`${key}`} control={<Radio />} label={option.question} />
               )
              :
              null
          }
        </RadioGroup>
      </FormControl>
    </DialogContent>

    <DialogActions>
      <Button variant='raised' type="submit" color='primary' onClick={onSubmit}>
        Submit
      </Button>
      <Button variant='raised' type="submit" color='secondary' onClick={onClose}>
        Cancel
      </Button>
    </DialogActions>
  </Dialog>
)


VotingFormDialog.propTypes = {
  show: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  poll: PropTypes.object.isRequired,
  optionIdx: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(VotingFormDialog);

