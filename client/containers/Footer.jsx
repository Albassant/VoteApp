import React from 'react';
import PropTypes from 'prop-types';
import Auth from '../modules/Auth';

import { withStyles } from 'material-ui/styles';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';


const styles = {
  footer: {
    display: 'block'
  }
};

class Footer extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <footer className={classes.footer}>
        <div>
          <h2>Quick Links</h2>
          <div>
            <div>
              <div>
                <ul>
                  <li>
                    <a href="https://github.com/Albassant/VoteApp/">GitHub</a>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <a href="/discover-more/community/">Glitch Source</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);




/*



*/