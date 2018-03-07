import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { withStyles } from 'material-ui/styles';
import Card, { CardActions } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

const footerHeight = 182;

const styles = theme => ({
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
    textDecoration: 'none',
  },
  white: {
    color: '#fff'
  }
})

function NoPollsView (props) {
  const { title,
          description,
          classes,
        } = props;
  return (
    <div className={classes.container}>
      <Card className={classes.content} elevation={0}>
        <Typography variant='title' className={classes.title}>
          {title}
        </Typography>
        <Typography variant='Subheading' className={classes.title}>
          {description}
        </Typography>
        <CardActions className={classes.actions}>
          <Button variant='raised' color='primary'>
            <Link to={'/polls/new'} className={`${classes.link} ${classes.white}`}>Create Poll</Link>
          </Button>
        </CardActions>
      </Card>
    </div>
  )
};

NoPollsView.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default withStyles(styles, {withTheme: true})(NoPollsView);
