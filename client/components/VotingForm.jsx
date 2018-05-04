import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Card, { CardActions } from 'material-ui/Card';

import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormControl, FormControlLabel } from 'material-ui/Form';

import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

import { common } from './styles/commonStyles';

const styles = theme => ({
  container: {
    width: '50%',
    minWidth: '320px',
    margin: '0 auto',
    textAlign: 'center',
    padding: theme.spacing.unit * 3,
    backgroundColor: 'inherit'
  },
  actions: {
    ...common.actions,
    marginTop: '10px'
  },
  title: {
    marginBottom: '20px',
  }
})

const VotingForm = ({ classes,
                      onSubmit,
                      onChange,
                      poll,
                      optionIdx,
                      valid
                    }) => (
  <Card className={classes.container} elevation={0}>
    <Typography variant='headline' className={classes.title}>
      Your voice matters!
    </Typography>

    <form onSubmit={onSubmit}>

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
            key={option}
            value={`${key}`} control={<Radio />} label={option.question} />
           ) : null
          }
        </RadioGroup>
      </FormControl>

      <CardActions className={classes.actions}>
        <Button variant='raised' type="submit" color='primary' disabled={!valid}>Submit</Button>
      </CardActions>
    </form>
  </Card>
)


VotingForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  poll: PropTypes.object.isRequired,
  optionIdx: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(VotingForm);

/*
<Typography variant='title' className={classes.title}>
        {poll.name}
      </Typography>
*/