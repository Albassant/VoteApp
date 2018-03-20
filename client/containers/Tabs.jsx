import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import SwipeableViews from 'react-swipeable-views';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = {
  root: {
    width: '75%',
    zIndex: 0
  }
};

class TabsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.isPublic ? 1 : 0,
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
    const { classes, theme, tabHeads, children } = this.props;
console.log(children);
    const wrappedChildren = children.map((child, index) => (
      <TabContainer key={index} dir={theme.direction}>{child}</TabContainer>
    ));

    const tabs = tabHeads.map((tab, index) => (
      <Tab key={index} label={tab.label} icon={<tab.icon />} />
    ));

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
            { tabs }
          </Tabs>
        </div>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          { wrappedChildren }
        </SwipeableViews>
      </div>
    );
  }
}

TabsComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  tabHeads: PropTypes.array.isRequired
};

export default withStyles(styles, { withTheme: true })(TabsComponent);
