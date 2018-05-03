import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Auth from '../modules/Auth';

import { withStyles } from 'material-ui/styles';
import { CardActions } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

import PollIcon from 'material-ui-icons/Assignment';
import ResultIcon from 'material-ui-icons/Assessment';
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
    paddingBottom: '64px',
    paddingLeft: '32px',
    paddingRight: '32px',
  },
  logo: {
    height: '35vw',
    width: 'auto',
    maxHeight: '275px',
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
    justifyContent: 'center', //fallback
    justifyContent: 'space-around',
    alignItems: 'center',
    textAlign: 'center',
    flexWrap: 'wrap',
    overflow: 'hidden',
    paddingTop: '32px',
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
    width: '72px',
    height: '72px'
  },
  optionDesc: {
    marginBottom: '32px',
  },
  button: {
    backgroundColor: '#fff',
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

  componentDidMount() {
    this.optionsContainer = document.getElementById('options-container');
    console.log(this.optionsContainer);
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
            <img src="/logo.png" width='280px' alt="VoteApp logo" className={classNames(classes.logo, classes.noOpacity, classes.bounceInDown)}/>
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
              <Button variant='raised'
                className={classes.button}
                component={(props) => <Link to={ Auth.isUserAuthenticated() ? '/polls' : '/register' } {...props} />}
              >
                Get Started
              </Button>
            </CardActions>
          </div>
        </div>
        <div id="options-container" className={classes.optionsContainer}>
          <VisibilitySensor onChange={this.handleOnVisibilityChange} minTopValue={10} >
            <FloatingOption Icon={PollIcon}
              title="Create efficient polls"
              description="Easy to create polls. Just name your poll, add as many options as you want and save it with one click"
              classes={classes}
              visible={optionsVisible}
              animationClass={classes.fadeInLeft}
            />
          </VisibilitySensor>
          <VisibilitySensor onChange={this.handleOnVisibilityChange} minTopValue={10} >
            <FloatingOption Icon={ShareIcon}
              title="Share to get results"
              description="Share your polls and polls you like with your friends via direct link or via popular social networks in a one-click way"
              classes={classes}
              visible={optionsVisible}
              animationClass={classes.fadeInCenter}
            />
          </VisibilitySensor>
          <VisibilitySensor onChange={this.handleOnVisibilityChange} minTopValue={10} >
            <FloatingOption Icon={ResultIcon}
              title="Collect accurate results"
              description="View results of voting on live graphs at any time in easy to understand format"
              classes={classes}
              visible={optionsVisible}
              animationClass={classes.fadeInRight}
            />
          </VisibilitySensor>
        </div>
      </div>
    );
  }
}

function FloatingOption({ Icon, title, description, classes, visible, animationClass }) {
  return (
    <div className={classNames(classes.option, classes.noOpacity, visible && animationClass)}>
      <Icon className={`${classes.icon} ${classes.orange}`} />
      <Typography variant="headline" component="h2" className={`${classes.blackLight} ${classes.title}`}>
        {title}
      </Typography>
      <Typography component="p" className={classes.optionDesc}>
        {description}
      </Typography>
    </div>
  )
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withMenuWrapper(withStyles(styles, { withTheme: true })(HomePage), true);
