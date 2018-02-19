import React, { PropTypes } from 'react';
import Auth from '../modules/Auth';

import { withStyles } from 'material-ui/styles';
import Card, { CardHeader, CardActions } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';

const styles = {
  container: {
    
    backgroundColor: '#3f51b5',
    color: 'rgb(255, 255, 255)',
    
    minHeight: '87vh',
    maxHeight: '87vh',
    
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
    textAlign: 'center'
  },
  actions: {
    justifyContent: 'center',
    marginTop: 20
  }
};

class HomePage extends React.Component {
  
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <div>
          <Typography variant='display2' color='inherit'>
            VoteApp!
          </Typography>
          <Typography variant='headline' color='inherit'>
            Create poll voting contests and view the results in real time
          </Typography>
          { !Auth.isUserAuthenticated() && 
            <CardActions className={classes.actions}>
                <Button variant='raised' onClick={() => this.props.history.push('/login')}>Log in</Button>
                <Button variant='raised' color="secondary" onClick={() => this.props.history.push('/register')}>Register</Button>  
            </CardActions> 
          }
          { Auth.isUserAuthenticated() &&
            <CardActions className={classes.actions}>
              <Button variant='raised' onClick={() => this.props.history.push('/mypolls')}>My Polls</Button>
              <Button variant='raised' color="secondary" onClick={() => this.props.history.push('/new')}>New Poll</Button>  
            </CardActions> 
          }
        </div>
      </div>
    );
  }
  
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomePage);
