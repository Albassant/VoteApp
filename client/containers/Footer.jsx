import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

import Shiftable from './HOCs/Shiftable.jsx';


const styles = theme => ({
  footer: {
    backgroundColor: '#e0e0e0',
    color: 'rgba(0, 0, 0, 0.87)',
    padding: '16px',
  },
  title: {
    padding: '16px',
  },
  container: {
    paddingLeft: '16px',
    marginLeft: '16px'
  },
  item: {
    marginBottom: '16px',
    fontSize: '0.85rem'
  },
  link: {
    color: 'inherit',
    textDecoration: 'none',
    ':hover': {
      textDecoration: 'underline'
    }
  },
  copyContainer: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: '0.85rem'
  }
});

class Footer extends React.Component {
  render() {
    const { classes, openDrawer } = this.props;
    return (
      <Shiftable shift={openDrawer}>
      <footer className={classes.footer}>
        <Typography className={classes.title} variant='subheading' color="inherit" gutterBottom>Quick Links</Typography>
        <div className={classes.container}>
          <div className={classes.item}>
            <a className={classes.link} href="https://github.com/Albassant/VoteApp/">GitHub</a>
          </div>
          <div className={classes.item}>
            <a className={classes.link} href="https://ide.c9.io/albassant/voteapp">Cloud9 Source</a>
          </div>
        </div>
        <div className={classes.copyContainer}>
          <Typography variant='body2' color="inherit" className={classes.copyright}>freeCodeCamp challenge by Valentina</Typography>
        </div>
      </footer>
      </Shiftable>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  openDrawer: PropTypes.bool.isRequired
};

export default withStyles(styles, { withTheme: true })(Footer);
