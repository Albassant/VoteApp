import React from 'react';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';

function VotingChart ({ title, labels, data }) { //labels, data
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

    return (
        <div>
            <Bar data={chartData}
                    width={50}
                    height={25}
                    options={{
                		maintainAspectRatio: false
                	}}
                    options={options}
                />
        </div>
    );
}

VotingChart.propTypes = {
    title: PropTypes.string.isRequired,
    labels: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired
};

export default VotingChart;