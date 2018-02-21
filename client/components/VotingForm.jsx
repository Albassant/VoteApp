import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { withStyles } from 'material-ui/styles';
import Card, { CardText, CardHeader, CardContent, CardActions } from 'material-ui/Card';

import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormLabel, FormControl, FormControlLabel, FormHelperText } from 'material-ui/Form';

import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Icon from 'material-ui/Icon';

const hints = ['Your favourite hot beverage', 'Coffee', 'Tea'];

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

function VotingForm(props) {
  const { classes,
          onSubmit,
          onChange,
          poll,
          optionIdx
        } = props;
  return (
    <Card className={classes.container}>
      <Typography variant='title' className={classes.title}>
        {poll.name}
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
              key={key}
              value={`${key}`} control={<Radio />} label={option.question} />
             ) : null
            }
          </RadioGroup>
        </FormControl>

        <CardActions className={classes.actions}>
          <Button variant='raised' type="submit" color='primary'>Submit</Button>
        </CardActions>

        <CardContent>
          <Typography component="p">
            <Link to={'/polls'}>Back to polls</Link>
          </Typography>
        </CardContent>
      </form>
    </Card>
  )
};

VotingForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  poll: PropTypes.object.isRequired,
  optionIdx: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(VotingForm);

