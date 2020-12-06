import React from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios';
import './App.css';

const columns = [
  {
    name: 'ID',
    selector: 'id',
  },
  {
    name: 'Type',
    selector: 'type',
  },
  {
    name: 'Value',
    selector: 'value',
  },
  {
    name: 'Alert',
    selector: d => d.alert.toString()
  },
  {
    name: 'Timestamp',
    selector: 'timestamp',
  },
];

const conditionalRowStyles = [
  {
    when: row => row.alert === true,
    style: {
      color: 'red',
    },
  },
];

class App extends React.Component {
  state = {
    seconds: 60,
    readings: []
  };

  fetchSensorData = function(){
    axios.get(`https://localhost:44309/api/values`)
    .then(res => {
      console.log(res.data);
      this.setState(({ readings }) => ({
        readings: readings.concat(res.data)
      }));
    })
  }

  clearReadings = function(){
    this.setState(() => ({
      readings: []
    }))
  }

  componentDidMount() {
    this.fetchSensorData();
    this.myInterval = setInterval(() => {
      const { seconds } = this.state;
      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1
        }))
      }
      else{
        this.fetchSensorData();
        this.setState(() => ({
          seconds: 60
        }))
      }
    }, 1000)
  }

  render(){
    const { readings, seconds} = this.state;
    return (
      <div>
        <DataTable
          title="Sensor Reading Data"
          columns={columns}
          data={readings}
          pagination={true}
          striped={true}
          conditionalRowStyles={conditionalRowStyles}
          />
          <span>Total reading records: {readings.length}</span><br/>
          <span>Fetching new records in {seconds}</span><br/>
          <button className='btn btn-primary' onClick={e => this.fetchSensorData(e)}>Fetch</button>
          <button className='btn btn-danger' onClick={e => this.clearReadings(e)}>Clear</button>
        </div>
    );
  }
}

export default App;
