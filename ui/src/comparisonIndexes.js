import React, { Component } from "react";
import { render } from "react-dom";

// react table
import ReactTable from "react-table-6";  
import "react-table-6/react-table.css" 
import { ChartWithStaticData } from "./bubbleChart";


export default class ComparisonIndexes extends Component {
  constructor() {
    super();
    this.state = {
        isLoaded: false,
      data: [
       
      ]
    };

  }

  getColor(aqi){
    let board = {color : "", category : ""};
    if(aqi >0 && aqi < 50)board = {color : "DarkGreen", category : "Good"}
    else if(aqi >51 && aqi <= 100)board = {color : "OliveDrab", category : "Satisfactory"}
    else if(aqi >101 && aqi <= 200)board = {color : "Yellow", category : "Moderate"}
    else if(aqi >201 && aqi <= 300)board = {color : "Orange", category : "Poor"}
    else if(aqi >301 && aqi <= 400)board = {color : "OrangeRed", category : "Very Poor"}
    else if(aqi >401 && aqi <= 500)board = {color : "SaddleBrown", category : "Severe"}
    return board
  }

  componentDidMount() {
    fetch("http://localhost:8000/api/aqi")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            data: result.map(e => e = {...e, color : this.getColor(e.aqi)})
          });
          
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    
    const columns = [
      {
        columns: [
          {
            Header: "CITY",
            accessor: "city",
            Cell: row => <span className="text-center" >{row.value}</span>
          },
          {
            Header: "Current AQI",
            accessor: "aqi",
            Cell: row => <span className="text-center" style={{color: this.getColor(row.value).color }}> {row.value}</span>
          }
        ]
      }
    ];
    return (
      <div>
        <ReactTable
          data={this.state.data}
          columns={columns}
          noDataText="No Data Available"
          defaultPageSize={5}
          className="-striped -highlight"
        />
        <div>
          {
            (this.state.data.length >  0)?
                <ChartWithStaticData data = {this.state.data}></ChartWithStaticData>: null
          }
         
           
          
        </div>
     
      </div>
    );
  }
}


