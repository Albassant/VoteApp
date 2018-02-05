import React, { PropTypes } from 'react';
import Auth from '../modules/Auth';

import { withStyles } from 'material-ui/styles';
import Card, { CardHeader, CardActions } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';

const styles = {
  container: {
    margin: 0,
    textAlign: 'center',
    backgroundColor: '#3f51b5',
    color: 'rgb(255, 255, 255)',
    minHeight: '90vh',
    maxHeight: '90vh',
    flexGrow: 1,
  },
  align: {
    alignItems: 'center',
  },
  justify: {
    justifyContent: 'center',
  },
  separate: {
    marginTop: '20px'
  }
};

class HomePage extends React.Component {
  
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        { !Auth.isUserAuthenticated() && 
          <Grid alignContent='center' alignItems='center'>
            
            <Typography variant='display1' color='inherit'>
              Welcome to VoteApp!
            </Typography>
            <Typography variant='subheading' color='inherit'>
              Here you can create your own polls, manage and share them.
            </Typography>
            <Typography variant='subheading' color='inherit'>
              And vote on everyone's polls!
            </Typography>
            <Typography variant='subheading' color='inherit' className={classes.separate}>
              But first, you need to log in to start working on your polls
            </Typography>
            
            <CardActions className={classes.justify}>
              <Button variant='raised' onClick={() => this.props.history.push('/login')}>Log in</Button>
              <Button variant='raised' color="secondary" onClick={() => this.props.history.push('/register')}>Register</Button>  
            </CardActions> 
          </Grid>   
        }
        { Auth.isUserAuthenticated() &&
          <div className={classes.container}>
            <CardHeader 
              classes={{
                title: classes.title,
                subheader: classes.subheader,
              }}
              title="My VoteApp"
              subheader="View your polls or create a new one"
            />
            <CardActions className={classes.actions}>
              <Button variant='raised' color="primary" onClick={() => this.props.history.push('/new')}>New Poll</Button>
              <Button variant='raised' color="secondary" onClick={() => this.props.history.push('/mypolls')}>My Polls</Button>  
            </CardActions> 
          </div>
        }
      </div>
    );
  }
  
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomePage);
