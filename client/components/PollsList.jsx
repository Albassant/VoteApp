import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { withStyles } from 'material-ui/styles';
import Card from 'material-ui/Card';
import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import RemoveIcon from 'material-ui-icons/RemoveCircleOutline';
import Divider from 'material-ui/Divider';


const styles = {
  container: {

  },
  content: {
    position: 'relative',
    width: '100%',
    minWidth: '350px',
    textAlign: 'center',
  },
  icons: {
    position: 'absolute',
    right: '0px',
    top: '0px',
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
//<Typography variant='title' className={classes.title}>{title}</Typography>
function PollsList (props) {
  const { polls,
          onDelete,
          classes,
        } = props;
  return (
    <div className={classes.container}>
      <Card className={classes.content} elevation={0}>
        <List className="list">
        {
          polls.map((poll, key) =>
          <div key={key}>
            <ListItem button>
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
            <Divider />
          </div>
          )
        }
        </List>
      </Card>
    </div>
  )
};

PollsList.propTypes = {
  classes: PropTypes.object.isRequired,
  polls: PropTypes.array.isRequired,
  // title: PropTypes.string.isRequired
};

export default withStyles(styles)(PollsList);
