import React, { Component } from 'react';
import { Line, Pie } from 'react-chartjs-2';

export default class PieChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: 'React',
          lineData: {
            labels: ["January"],
            datasets: [{
                label: "Old User",
                backgroundColor: '#08AEEA',
                borderColor: '#08AEEA',
                data: [0, 10, 5, 14, 30, 40, 55],
            },
            {
                label: "New User",
                backgroundColor: '#2AF598',
                borderColor: '#2AF598',
                data: [100, 104, 120, 80, 95, 80, 70],
            }]
        },
    
        pieData: {
            labels: ["January"],
            datasets: [{
                backgroundColor: ['rgba(255, 0, 0, 0.7)','rgba(255, 100, 50, 0.7)'],
                borderColor: ['rgba(255, 0, 0, 0.7)','rgba(255, 100, 50, 0.7)'],
                data: [25, 10],
            }]
        },
        lineChartOptions:{
          maintainAspectRatio: true,
          legend: {
            position: 'bottom',
            color: 'rgba(0,0,0,0)',
          }
        },
        pieChartOptions:{
          maintainAspectRatio: true,
          legend: {
            position: 'bottom',
          }
        },
        };
      }
    
      render() {
        return (
          <div>
            <p>
            <h2>Pie Chart</h2>
            <Pie data={this.state.pieData} options={this.state.pieChartOptions} width={600} height={400} redraw/>
            </p>
          </div>
        );
      }
}
