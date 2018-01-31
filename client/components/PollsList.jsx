import React, { PropTypes } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardText, CardTitle } from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import ActionDelete from 'material-ui/svg-icons/content/remove-circle';


const PollsList = ({
  polls,
  onDelete,
  onClick,
}) => (
  <MuiThemeProvider>
    <Card className="container">
      <CardTitle className="text-center" title="My Polls" subtitle="Here you can view and manage your polls"/>   
      <List>
        { polls.map((poll, key) => <ListItem 
                                     key={key} 
                                     primaryText={poll.name} 
                                     onClick={(event) => onClick(poll, event)} 
                                     rightIcon={<ActionDelete onClick={(event) => onDelete(poll, event)} />} />)}
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