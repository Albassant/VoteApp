import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../modules/Auth';

import { withStyles } from 'material-ui/styles';
import Card, { CardHeader, CardActions } from 'material-ui/Card';
import Button from 'material-ui/Button';

const styles = {
  card: {
    margin: 0,
    width: '100%',
    textAlign: 'center',
    height: '600px',
  },
  actions: {
    justifyContent: 'center',
  },
  title: {
    marginTop: '50px',
    fontSize: '2rem',
  },
  subheader: {
    fontSize: '1.25rem',
  },
  content: {
    height: '200px',
  }
};

class Main extends React.Component {
  
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Card className={classes.card} elevation={0}>
          
          { !Auth.isUserAuthenticated() && 
            <div>
              <CardHeader 
                classes={{
                  content: classes.content,
                  title: classes.title,
                  subheader: classes.subheader,
                }}
                title="Welcome to VoteApp!"
                subheader="Here you can create your own polls, manage and share them. And vote on everyone's polls!"
              />
              <CardActions className={classes.actions}>
                <Button variant='raised' color="primary" onClick={() => this.props.history.push('/login')}>Log In</Button>
                <Button variant='raised' color="secondary" onClick={() => this.props.history.push('/register')}>Register</Button>
              </CardActions>
            </div>
          }
          { Auth.isUserAuthenticated() &&
            <div>
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
          
        </Card>
      </div>
    );
  }
  
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Main);