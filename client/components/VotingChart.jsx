import React from 'react';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';

import { withStyles } from 'material-ui/styles';
import Card from 'material-ui/Card';

import { common } from './styles/commonStyles';

const styles = {
  container: {
    width: '50%',
    minWidth: '350px',
    margin: '10px auto',
    textAlign: 'center',
    padding: '40px',
    marginTop: '20px'
  },
  actions: common.actions,
  content: {
    position: 'relative',
    width:'100%',
    height:'auto',
  }
};


function VotingChart ({ labels, data, classes }) {
  const chartData = {
    labels: labels,
    datasets: [{
      label: 'Votes',
      data: data
    }]
  };

  const options = {
    title: {
      display: false,
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
  };

  const plugins = [{
      beforeDatasetsDraw  : function(chart) {
        const labels = chart.data.labels;
        const meta = chart.data.datasets[0]._meta;
        const key = Object.keys(meta)[0];

        labels.forEach(function(e, i) {
          var bar = meta[key].data[i]._model;
          bar.backgroundColor = i % 2 == 0 ? common.orange.color : common.lightOrange.color;
        });
      }
   }];

  return (
    <Card className={classes.container}>
      <div className={classes.content}>
        <Bar data={chartData}
          width={50}
          height={25}
          options={{
            maintainAspectRatio: true,
            responsive: true,
          }}
          options={options}
          plugins={plugins}
        />
      </div>
    </Card>
  );
}

VotingChart.propTypes = {
  labels: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(VotingChart);