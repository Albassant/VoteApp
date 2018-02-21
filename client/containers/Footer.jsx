import React from 'react';
import PropTypes from 'prop-types';
import Auth from '../modules/Auth';

import { withStyles } from 'material-ui/styles';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

import cyan from 'material-ui/colors/cyan';

const styles = {

};

class Footer extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <footer class="footer">
        <div class="mainContainer">
          <h2 class="block header">Quick Links</h2>
          <div class="block container">
            <div class="listContainer">
              <div class="listResponsive">
                <ul class="list">
                  <li class="listItem">
                    <a class="listLink" href="https://github.com/Albassant/VoteApp/">GitHub</a>
                  </li>
                </ul>
              </div>
              <div class="listResponsive">
                <ul class="list">
                  <li class="listItem">
                    <a class="listLink" href="/discover-more/community/">Glitch Source</a>
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