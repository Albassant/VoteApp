import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardText, CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import IconButton from 'material-ui/IconButton';
import ActionRemove from 'material-ui/svg-icons/content/remove-circle-outline';
import {red500} from 'material-ui/styles/colors';

const hints = ['Your favourite hot beverage', 'Coffee', 'Tea'];

const PollForm = ({
  onSubmit,
  onChangeName,
  onChangeOptions,
  onAddOption,
  onRemoveOption,
  poll,
  valid
}) => (
  <MuiThemeProvider>
    <Card className="container">
      
      <form className="wide-form" action="/polls" onSubmit={onSubmit}>
        <h2 className="card-heading text-center">Create New Poll</h2>
        
        <div className="field-line">
          <TextField multiLine={true} fullWidth={true}
            name="name"
            onChange={onChangeName}
            hintText={hints[0]}
            value={poll.name}
          />
        </div>
        
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
                    <ActionRemove color={red500}/>
                </IconButton>
              }
            </div>
          )
        }

        <CardActions className="text-center">
          <RaisedButton type="button" label="Add Option" primary onClick={onAddOption}/>
          <RaisedButton type="submit" label="Submit" secondary disabled={!valid}/>
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
