import React from 'react';
import PropTypes from 'prop-types';

import withMenuWrapper from '../containers/HOCs/withMenuWrapper.jsx';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import RemoveIcon from 'material-ui-icons/RemoveCircleOutline';

const hints = ['Your favourite hot beverage', 'Coffee', 'Tea'];

import { common, forms } from './styles/commonStyles';

const styles = theme => ({
  ...forms,
  actions: common.actions,
  button: {
    margin: '10px'
  },
  icons: {
    position: 'absolute',
    right: '-20px',
    top: '0px',
    cursor: 'pointer'
  },
});


const PollForm = ({ classes,
                    onSubmit,
                    onChangeName,
                    onChangeOptions,
                    onAddOption,
                    onRemoveOption,
                    poll,
                    valid }) => (
  <Card className={classes.content}>
    <Typography variant='title' gutterBottom={true}>
      New Poll
    </Typography>

    <form onSubmit={onSubmit}>

      <Typography variant="subheading">Name your poll</Typography>
      <div className={classes.field}>
        <TextField
          name="name"
          label={hints[0]}
          onChange={onChangeName}
          value={poll.name}
          fullWidth
          multiline
          autoFocus={true}
        />
      </div>

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
              <IconButton color="secondary" className={classes.icons} onClick={onRemoveOption}>
                <RemoveIcon />
              </IconButton>
            }
          </div>
        )
      }

      <CardActions className={classes.actions}>
        <Button className={classes.button} variant='raised' color='primary' onClick={onAddOption}>Add option</Button>
        <Button className={classes.button} variant='raised' type="submit" color='primary' disabled={!valid}>Submit</Button>
      </CardActions>

    </form>
  </Card>
)


PollForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChangeName: PropTypes.func.isRequired,
  onChangeOptions: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  poll: PropTypes.object.isRequired,
  valid: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired
};

export default withMenuWrapper(withStyles(styles, {withTheme: true})(PollForm));

