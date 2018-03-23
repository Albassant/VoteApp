import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Auth from '../modules/Auth';

import { withStyles } from 'material-ui/styles';
import { CardActions } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

import PollIcon from 'material-ui-icons/Assignment';
import VoteIcon from 'material-ui-icons/Assessment';
import ShareIcon from 'material-ui-icons/Share';

import withMenuWrapper from '../containers/HOCs/withMenuWrapper.jsx';
import classNames from 'classnames';
import VisibilitySensor from 'react-visibility-sensor';

import { common  } from './styles/commonStyles';
import { getStylesForAnimation } from './styles/animations';

const styles = theme => ({
  container: {
    display: 'flex',
    backgroundColor: '#3f51b5',
    color: '#fff',
    minHeight: '90vh',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    boxSizing: 'border-box',
  },
  actions: {
    ...common.actions,
    marginTop: 20
  },
  link: {
    ...common.link,
    fontWeight: '500'
  },
  black: common.black,
  blackLight: common.blackLight,
  orange: common.orange,
  title: {
    marginBottom: '0.35em',
  },
  optionsContainer: {
    display: 'flex',
    minHeight: '400px',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    textAlign: 'center',
    flexWrap: 'wrap',
    overflow: 'hidden'
  },
  option: {
    flex: 1,
    minWidth: '300px',
    maxWidth: '20%',
    [theme.breakpoints.between('xs', 'sm')]: {
      minWidth: '60%',
    },
  },
  icon: {
    marginTop: '16px',
    width: '72px',
    height: '72px'
  },
  button: {
    backgroundColor: '#ffb300',
  },
  toolbar: {
    ...theme.mixins.toolbar,
  },
  noOpacity: {
    opacity: 0
  },
  ...getStylesForAnimation('fadeIn', '1s', '1.2s'),
  ...getStylesForAnimation('fadeInCenter', '1s', '0.5s'),
  ...getStylesForAnimation('fadeInLeft', '1s', '0s'),
  ...getStylesForAnimation('fadeInRight', '1s', '0s'),
  ...getStylesForAnimation('zoomIn', '0.6s', '0s'),
  ...getStylesForAnimation('bounceInDown', '0.6s', '0.9s'),
  ...getStylesForAnimation('bounceInLeft', '0.6s', '0.3s'),
  ...getStylesForAnimation('bounceInRight', '0.6s', '0.6s'),
});

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      optionsVisible: false,
    };

    this.handleOnVisibilityChange = this.handleOnVisibilityChange.bind(this);
  }

  handleOnVisibilityChange(isVisible) {
    if (this.state && !this.state.optionsVisible) {
      this.setState({ optionsVisible: isVisible});
    }
  }

  render() {
    const { classes } = this.props;
    const { optionsVisible } = this.state;
    return (
      <div>
        <div className={classes.toolbar} />
        <div className={classes.container}>
          <div>
            <img src="/logo.png" width='280px' alt="VoteApp logo" className={classNames(classes.noOpacity, classes.bounceInDown)}/>
            <Typography variant='display2' color='inherit' className={classNames(classes.title, classes.noOpacity, classes.zoomIn)}>
              VoteApp!
            </Typography>
            <Typography variant='headline' color='inherit' className={classNames(classes.noOpacity, classes.bounceInLeft)}>
              Poll creation and voting have never been easier!
            </Typography>
            { !Auth.isUserAuthenticated() &&
              <Typography variant='headline' color='inherit' className={classNames(classes.noOpacity, classes.bounceInRight)}>
                No need to install anything, just sign up and start working
              </Typography>
            }
            <CardActions className={classNames(classes.actions, classes.noOpacity, classes.fadeIn)}>
              <Button variant='raised' className={classes.button}>
                <Link to={ Auth.isUserAuthenticated() ? '/polls' : '/register' } className={`${classes.link} ${classes.black}`}>Get Started</Link>
              </Button>
            </CardActions>
          </div>
        </div>
        <VisibilitySensor onChange={this.handleOnVisibilityChange} partialVisibility={'bottom'} offset={{bottom: -300}}>
          <div className={classes.optionsContainer}>
            <div className={classNames(classes.option, classes.noOpacity, optionsVisible && classes.fadeInLeft)}>
              <PollIcon className={`${classes.icon} ${classes.orange}`} />
              <Typography variant="headline" component="h2" className={`${classes.blackLight} ${classes.title}`}>
                Create efficient polls
              </Typography>
              <Typography component="p">
                Easy to create polls. Just name your poll, add as many options as you want and save it with one click.
              </Typography>
            </div>
            <div className={classNames(classes.option, classes.noOpacity, optionsVisible && classes.fadeInCenter)}>
              <ShareIcon className={`${classes.icon} ${classes.orange}`} />
              <Typography variant="headline" component="h2" className={`${classes.blackLight} ${classes.title}`}>
                Share to get results
              </Typography>
              <Typography component="p">
                Share your polls and polls you like with your friends via direct link or via popular social networks in a one-click way
              </Typography>
            </div>
            <div className={classNames(classes.option, classes.noOpacity, optionsVisible && classes.fadeInRight)}>
              <VoteIcon className={`${classes.icon} ${classes.orange}`} />
              <Typography variant="headline" component="h2" className={`${classes.blackLight} ${classes.title}`}>
                Collect accurate results
              </Typography>
              <Typography component="p">
                View results of voting on live graphs at any time in easy to understand format.
              </Typography>
            </div>
          </div>
        </VisibilitySensor>
      </div>
    );
  }
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withMenuWrapper(withStyles(styles, { withTheme: true })(HomePage), true);
