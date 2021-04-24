import React from 'react';
import { Bar } from 'react-chartjs-2';

export class ChartWithStaticData extends React.PureComponent {
  constructor(props) {
    super(props);
    this.chartInstance = null;
    this.onRef = this.onRef.bind(this);
    const {name, aqi} = this.props.data;
  }

  onRef(chart) {
    this.chartInstance = chart ? chart.chartInstance : null;
  }

  get data() {
    return ({
      labels: this.props.data.map(e => e.city) ||["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [{
        label: '# of AQI',
        data: this.props.data.map(e => e.aqi),
        borderWidth: 1,
        backgroundColor: this.props.data.map(e => e.color.color)
      }]
    })
  }

  options = {
    responsive: true,
    maintainAspectRatio: false,
    onClick: function(evt, element) {
        console.log(element);
    },
    tooltips: {
      enabled: false,
    },
    hover: {
      animationDuration: 0,
      onHover: (e) => {
        const chartInstance = this.chartInstance;
        if (!chartInstance) {
          return;
        }

        if (chartInstance.getElementAtEvent) {
          const point = chartInstance.getElementAtEvent(e);
          e.target.style.cursor = point.length ? 'pointer' : 'default';
        }
      }
    },
    legend: {
      display: false
    },
    layout: {
      padding: {
        top: 24
      }
    },
    scales: {
      yAxes: [{
        display: false,
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          display: true,
        }
      }],
      xAxes: [{
        gridLines: {
          color: 'blue',
          drawBorder: false,
          zeroLineColor: 'rgba(0, 0, 0, 0.5)'
        }
      }]
    }
  }


  render() {
    return (
      <div>
        <Bar
          data={this.data}
          options={this.options}
          ref={this.onRef}
        />
      </div>
    )
  }
}
