import React, { PropTypes } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardText, CardTitle } from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
//import ActionDelete from 'material-ui/svg-icons/content/remove-circle-outline';
import Icon from 'material-ui/Icon';
import red from 'material-ui/colors/red';
import theme from '../styles';

const PollsList = ({
  polls,
  onDelete,
  onClick,
  successMessage
}) => (
  <MuiThemeProvider theme={theme}>
    <Card className="container">
      
      <CardTitle className="text-center" title="My Polls" subtitle="Here you can view and manage your polls"/>
      
      {successMessage && <p className="success-message">{successMessage}</p>}
      
      <List className="list">
        { polls.map((poll, key) => <ListItem 
                                     key={key} 
                                     primaryText={poll.name}
                                     secondaryText={poll.createdAt}
                                     onClick={(event) => onClick(poll, event)} 
                                     rightIcon={<Icon color={red[500]} onClick={(event) => onDelete(poll, event)}>remove_circle</Icon>} />)}
      </List>
    </Card>
  </MuiThemeProvider>
);

PollsList.propTypes = {
  polls: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PollsList;