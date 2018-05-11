import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Bar, defaults } from 'react-chartjs-2';
import { Parser as HtmlToReactParser } from 'html-to-react';

import { withStyles } from 'material-ui/styles';
import Card from 'material-ui/Card';

import { common } from './styles/commonStyles';

import distinctColors from 'distinct-colors';
import chroma from 'chroma-js';

const htmlToReactParser = new HtmlToReactParser();
defaults.global.animations = false;


const styles = theme => ({
  container: {
    width: '75%',
    height: '100%',
    margin: '0 auto',
    textAlign: 'center',
    padding: '40px',
    overflow: 'auto',
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

const options = {
  maintainAspectRatio: true,
  responsive: true,
  title: {
    display: false,
  },
  legend: {
    display: false,
  },
  legendCallback: chart => {
    var text = [];
    text.push('<ul class="legend">');
    for (var i = 0; i < chart.data.datasets.length; i++) {
      text.push('<li><div>');
      text.push(`<div class="rect" style="background-color:${chart.data.datasets[i].backgroundColor}"></div>`);
      text.push(`<span>${chart.data.datasets[i].label}</span>`);
      text.push('</li></div>');
    }
    text.push('</ul>');
    console.log(text.join(''));
    return text.join('');
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
        max: 100,
        stepSize: 10,
        callback: (value, index, values) => `${value}%`
      }
    }]
  },
  tooltips: {
    callbacks: {
      label: function(tooltipItem, data) {
          var label = data.datasets[tooltipItem.datasetIndex].label || '';

          if (label) {
              label += ': ';
          }
          label += tooltipItem.yLabel + '%';
          return label;
      },
    }
  }
};

class VotingChart extends Component {
  constructor(props) {
    super(props);

    this._setup();

    this.chart = null;
    this.setChartRef = element => {
      this.chart = element;
      this.forceUpdate();
    }
  }

  _setup(props) {
    const { datalabels, data} = this.props;

    const palette = distinctColors({count: data.length});
    const fillColors = palette.map(c => `rgba(${c.alpha(0.25).rgba()})`);
    const outlineColors = palette.map(c => `rgba(${c.rgba()})`);

    const total = data.reduce((prev, curr) => prev + curr);

    const datasets = data.map((d, i) => {
        return {
          label: datalabels[i],
          data: [Math.round(d / total * 100)],
          backgroundColor: fillColors[i],
          borderColor: outlineColors[i],
          borderWidth: 1
        }
      });

    this.chartData = {
      labels: ['Votes'],
      datasets: datasets
    };
  }

  render() {
    const classes = this.props.classes;
    return (
      <Card className={classes.container}>
        <div className={classes.content}>
          <Bar data={this.chartData}
            options={options}
            ref={this.setChartRef}
          />
          { this.chart && htmlToReactParser.parse(this.chart.chartInstance.generateLegend()) }
        </div>
      </Card>
    );
  }
}

VotingChart.propTypes = {
  datalabels: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, {withTheme: true})(VotingChart);
