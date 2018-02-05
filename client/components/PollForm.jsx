import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardText, CardActions, CardTitle } from 'material-ui/Card';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';

import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
//import ActionRemove from 'material-ui/svg-icons/content/remove-circle-outline';
//import {red500} from 'material-ui/styles/colors';

import theme from '../styles';

import red from 'material-ui/colors/red';

const hints = ['Your favourite hot beverage', 'Coffee', 'Tea'];

const PollForm = ({
  onSubmit,
  onChangeName,
  onChangeOptions,
  onAddOption,
  onRemoveOption,
  poll,
  valid,
  errorMessage
}) => (
  <MuiThemeProvider theme={theme}>
    <Card className="container text-center">
      <CardTitle title="Create New Poll" />   
      <form className="wide-form" action="/polls" onSubmit={onSubmit}>
        
        {errorMessage.length > 0 && <p className="error-message text-center">{errorMessage}</p>}
        
        <h4>Name your poll</h4>
        <div className="field-line">
          <TextField multiLine={true} fullWidth={true}
            name="name"
            onChange={onChangeName}
            hintText={hints[0]}
            value={poll.name}
          />
        </div>
        
        <h4>Options</h4>
        {
          poll.options.map((opt, i) => 
             <div key={i} className="field-line" style={{position: 'relative', display: 'inline-block', width: 568}}>
              <TextField multiLine={true} fullWidth={true}
                name={`${i}`}
                onChange={onChangeOptions}
                hintText={i < 3 && hints[i+1] || 'Your Option'}
                value={opt}
              />
              { 
                i > 1 && 
                <IconButton style={{position: 'absolute', right: 30, top: 10, width: 20, height: 20}} onClick={onRemoveOption}>
                    <Icon color={red[500]}>remove_circle</Icon>
                </IconButton>
              }
            </div>
          )
        }

        <CardActions>
          <Button raised type="button" label="Add Option" primary onClick={onAddOption}/>
          <Button raised type="submit" label="Submit" secondary disabled={!valid}/>
        </CardActions>
      </form>
    </Card>
  </MuiThemeProvider>
);

PollForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChangeName: PropTypes.func.isRequired,
  onChangeOptions: PropTypes.func.isRequired,
  poll: PropTypes.object.isRequired,
  valid: PropTypes.bool.isRequired
};

export default PollForm;
