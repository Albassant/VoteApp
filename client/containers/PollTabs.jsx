import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';

import MyPollIcon from 'material-ui-icons/Poll';
import PublicPollIcon from 'material-ui-icons/Public';

import TabContainer from '../components/TabContainer';
import PublicPollList from './PublicPollList';
import UserPollList from './UserPollList';

const styles = theme => ({
  root: {
    // backgroundColor: theme.palette.background.paper,
    width: '75%',
    zIndex: 0
  }
});

class PollTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeIndex = this.handleChangeIndex.bind(this);
  }


  handleChange(event, value) {
    console.log(value);
    this.setState({ value });
  };

  handleChangeIndex(index) {
    console.log(index);
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <div>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
            centered
          >
            <Tab label="My Polls" icon={<MyPollIcon />} />
            <Tab label="All Polls" icon={<PublicPollIcon />} />
          </Tabs>
        </div>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}><UserPollList /></TabContainer>
          <TabContainer dir={theme.direction}><PublicPollList /></TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}
// pass labels and children to make this class abstract
PollTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(PollTabs);
