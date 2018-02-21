import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { withStyles } from 'material-ui/styles';
import Card, { CardActions } from 'material-ui/Card';
import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';

const styles = {
  container: {
    width: '50%',
    minWidth: '350px',
    margin: '0 auto',
    textAlign: 'center',
    paddingLeft: '40px',
    paddingRight: '40px'
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
  },
  actions: {
    justifyContent: 'center',
  },
  link: {
    textDecoration: 'none'
  },
  white: {
    color: '#fff'
  }
}

function PollsList (props) {
  const { polls,
          onDelete,
          classes
        } = props;
  return (
    <Card className={classes.container}>
      <Typography variant='title' className={classes.title}>My Polls</Typography>
        <List className="list">
        {
          polls.map((poll, key) =>
            <ListItem button key={key}>
              <Link  to={`/polls/${poll._id}`} className={classes.link}>
                <ListItemText primary={poll.name} secondary={poll.createdAt} />
              </Link>
              <ListItemSecondaryAction>
                <Icon color="secondary" className={classes.icons} onClick={(event) => onDelete(poll, event)}>remove_circle_outline</Icon>
              </ListItemSecondaryAction>
            </ListItem>
          )
        }
      </List>
      <CardActions className={classes.actions}>
        <Button variant='raised' color='secondary'><Link to={'/polls/new'} className={`${classes.link} ${classes.white}`}>Create New</Link></Button>
      </CardActions>
    </Card>
  )
};

PollsList.propTypes = {
  classes: PropTypes.object.isRequired,
  polls: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default withStyles(styles)(PollsList);
