import React from 'react';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';
import { Link } from 'react-router-dom';

import { withStyles } from 'material-ui/styles';
import Card, { CardText, CardHeader, CardContent, CardActions } from 'material-ui/Card';
import Typography from 'material-ui/Typography';


const styles = {
  container: {
    width: '50%',
    minWidth: '350px',
    margin: '10px auto',
    textAlign: 'center',
    paddingLeft: '40px',
    paddingRight: '40px'
  },
  actions: {
    justifyContent: 'center',
  },
  title: {
    margin: '20px 0',
    paddingTop: '20px'
  }
};

function VotingChart ({ title, labels, data, classes }) {
  const chartData = {
    labels: labels,
    datasets: [{
      label: 'hello',
      data: data,
      backgroundColor: ['#ffb300', '#ffd54f']
    }]
  };

  const options = {
    title: {
      display: true,
      text: title,
      fontSize:24
    },
    legend: {
      display:false
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero:true,
          min: 0,
          callback: function(value, index, values) {
            if (Math.floor(value) === value) {
              return value;
            }
          }
        }
      }]
    }
  }

  /*
  <Typography variant='title' className={classes.title}>
        {title}
      </Typography>
  */

  return (
    <Card className={classes.container}>

      <Bar data={chartData}
        width={50}
        height={25}
        options={{
          maintainAspectRatio: false
        }}
        options={options}
      />

      <CardContent>
        <Typography component="p">
        <Link to={'/polls'}>Back to polls</Link>
        </Typography>
      </CardContent>
    </Card>
  );
}

VotingChart.propTypes = {
  title: PropTypes.string.isRequired,
  labels: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(VotingChart);