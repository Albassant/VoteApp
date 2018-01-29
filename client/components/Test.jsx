import React, { PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const Test = ({ secretData, onClick }) => (
  <MuiThemeProvider>
    <Card className="container">
      <CardTitle
        title="Dashboard"
        subtitle="You should get access to this page only after authentication."
      />

      {secretData && <CardText style={{ fontSize: '16px', color: 'green' }}>{secretData}</CardText>}
      <CardActions>
        <FlatButton label="Click Me" onClick={onClick}/>
      </CardActions>

    </Card>
  </MuiThemeProvider>
);

Test.propTypes = {
  secretData: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Test;