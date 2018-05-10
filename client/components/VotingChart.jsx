import React from 'react';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';

import { withStyles } from 'material-ui/styles';
import Card from 'material-ui/Card';

import { common } from './styles/commonStyles';

import distinctColors from 'distinct-colors';
import chroma from 'chroma-js';


const styles = theme => ({
  container: {
    width: '75%',
    margin: '0 auto',
    textAlign: 'center',
    padding: '40px',
    [theme.breakpoints.down('sm')]: {
      padding: '40px 0px',
      width: '90%',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '20px 0px',
      width: '90%',
      minWidth: '300px'
    },
  },
  actions: common.actions,
  content: {
    position: 'relative',
    width: '100%',
    height:'auto',
  }
});


function VotingChart ({ datalabels, data, classes }) {

  const palette = distinctColors({count: data.length});
  const fillColors = palette.map(c => `rgba(${c.alpha(0.25).rgba()})`);
  const outlineColors = palette.map(c => `rgba(${c.rgba()})`);
  const datasets = data.map((d, i) => {
      return {
        label: datalabels[i],
        data: [d],
        backgroundColor: fillColors[i],
        borderColor: outlineColors[i],
        borderWidth: 1
      }
    });

    console.log(datasets);

  const chartData = {
    labels: ['Votes'],
    datasets: datasets
  };

  const options = {
    maintainAspectRatio: true,
    responsive: true,
    title: {
      display: false,
    },
    legend: {
      display: true,
      position: 'bottom',
    },
    scales: {
      xAxes: [{
        ticks: {
          display: true,
          autoSkip: false,
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true,
          min: 0,
          callback: function(value, index, values) {
            if (Math.floor(value) === value) {
              return value;
            }
          }
        }
      }]
    },
  };

  return (
    <Card className={classes.container}>
      <div className={classes.content}>
        <Bar data={chartData}
          options={options}
        />
      </div>
    </Card>
  );
}

VotingChart.propTypes = {
  datalabels: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, {withTheme: true})(VotingChart);
