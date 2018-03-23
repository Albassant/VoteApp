import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { withStyles } from 'material-ui/styles';
import Card, { CardActions } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

import { common, forms } from './commonStyles';

const styles ={
  container: {
    ...common.container,
    height: '100%',
    alignItems: 'start'
  },
  content: forms.content,
  title: common.title,
  actions: common.actions,
  icons: {
    position: 'absolute',
    right: '10px',
    top: '10px',
    cursor: 'pointer'
  },
  link: common.link,
  white: common.white,
}

const NoPollsView = ({ title, description, link, buttonLabel, classes }) => (
  <div className={classes.container}>
    <Card className={classes.content} elevation={0}>
      <Typography variant='title' className={classes.title}>
        {title}
      </Typography>
      <Typography variant='subheading' className={classes.title}>
        {description}
      </Typography>
      <CardActions className={classes.actions}>
        <Button variant='raised' color='primary'>
          <Link to={link} className={classNames(classes.link, classes.white)}>{buttonLabel}</Link>
        </Button>
      </CardActions>
    </Card>
  </div>
)

NoPollsView.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired
};

export default withStyles(styles)(NoPollsView);
