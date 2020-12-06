import React from 'react';
import DataTable from 'react-data-table-component';
import './App.css';


const data = [{ id: 1, type: 'tempreture', value: '23.2', alert: 'false' },
{ id: 1, type: 'tempreture', value: '23.2', alert: 'false' },
{ id: 1, type: 'tempreture', value: '23.2', alert: 'false' },
{ id: 1, type: 'tempreture', value: '23.2', alert: 'false' },
{ id: 1, type: 'tempreture', value: '23.2', alert: 'false' },];
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
    selector: 'alert',
  },
];

class App extends React.Component {
  state = {

  };
  render(){
    return (
      <DataTable
      title="Sensor Reading Data"
      columns={columns}
      data={data}
      />
    );
  }
}

export default App;
