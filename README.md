# Sensor Reading Frontend

![Screen-shot](/public/ss.png)

## Introduction
This is the frontend part of the project. Please check the [backend part](https://github.com/RamiB1234/sensor-reading-backend) repository.

This is a single-page app that is build with `React.js` framework. It fetches the sensor data from the backend and shows it in a tabular format.

## Features
- Fetches data from the server on `componentDidMount`
- Fetches data automatically every 1 minute
- Option to fetch the data manually
- Option to clear fetched data from component's state
- If the reading record has an alert, it will appear in `red` color

## NPM Packages
- bootstrap
- axios
- [react-data-table-component](https://www.npmjs.com/package/react-data-table-component)

## Installation
- Clone and setup the [backend part](https://github.com/RamiB1234/sensor-reading-backend)
- Clone this repository
- In my environment, the backend URL and port is: `localhost:44309`. If you change the port settings in the backend project, please change it in the component as well
- Run `npm install`
- Run `npm start`