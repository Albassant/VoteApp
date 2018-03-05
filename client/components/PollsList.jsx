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

const footerHeight = 182;

const styles = {
  container: {
    flex: 1,
    minHeight: `calc(100vh - ${footerHeight}px)`,
    paddingTop: '84px',
    paddingBottom: '64px',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    width: '100%'
  },
  content: {
    position: 'relative',
    width: '50%',
    minWidth: '350px',
    textAlign: 'center',
    paddingLeft: '40px',
    paddingRight: '40px',
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
          title,
          classes,
        } = props;
  return (
    <div className={classes.container}>
      <Card className={classes.content} elevation={0}>
        <Typography variant='title' className={classes.title}>{title}</Typography>
          <List className="list">
          {
            polls.map((poll, key) =>
            <div>
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
  title: PropTypes.string.isRequired
};

export default withStyles(styles)(PollsList);
