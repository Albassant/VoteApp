import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';

import { withStyles } from 'material-ui/styles';
import Card, { CardText, CardHeader, CardContent, CardActions } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Icon from 'material-ui/Icon';

const hints = ['Your favourite hot beverage', 'Coffee', 'Tea'];

const styles = {
  container: {
    width: '40%',
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

function PollForm(props) {
  const { classes, 
          onSubmit,
          onChangeName,
          onChangeOptions,
          onAddOption,
          onRemoveOption,
          poll,
          valid,
          errorMessage } = props;
  return (
    <Card className={classes.container}>
      <Typography variant='title' className={classes.title}>
        New Poll
      </Typography>
      
      <form action="/polls" onSubmit={onSubmit}>

        {errorMessage.length > 0 && <p>{errorMessage}</p>}

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
                <Icon color="secondary" className={classes.icons} onClick={onRemoveOption}>remove_circle_outline</Icon>
              }
            </div>
          )
        }

        <CardActions className={classes.actions}>
          <Button variant='raised' color='primary' onClick={onAddOption}>Add option</Button>
          <Button variant='raised' type="submit" color='primary' disabled={!valid}>Submit</Button>
        </CardActions>
        
        <CardContent>
          <Typography component="p">
            <Link to={'/mypolls'}>Back to polls</Link>
          </Typography>
        </CardContent>
      </form>
    </Card>
  )
};

PollForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChangeName: PropTypes.func.isRequired,
  onChangeOptions: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  poll: PropTypes.object.isRequired,
  valid: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PollForm);

