import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { withStyles } from 'material-ui/styles';
import Card, { CardActions } from 'material-ui/Card';
import List, { ListItem, ListItemSecondaryAction, ListItemText, ListItemIcon } from 'material-ui/List';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import RemoveIcon from 'material-ui-icons/RemoveCircleOutline';

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
          onNewPollClick,
          classes
        } = props;


  console.log(polls);


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

              { onDelete &&
                <ListItemSecondaryAction>
                  <IconButton color="secondary" className={classes.icons} onClick={(event) => onDelete(poll, event)}>
                    <RemoveIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              }
            </ListItem>
          )
        }
      </List>
      { onNewPollClick &&
        <CardActions className={classes.actions}>
          <Button variant='raised' color='secondary' onClick={onNewPollClick}>Create New</Button>
        </CardActions>
      }
    </Card>
  )
};

PollsList.propTypes = {
  classes: PropTypes.object.isRequired,
  polls: PropTypes.array.isRequired,
};

export default withStyles(styles)(PollsList);
