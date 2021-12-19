/* eslint-disable react/forbid-prop-types */
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import PropTypes from 'prop-types';

const WeatherData = (props) => {
  const {
    description, temperature, wind, name,
  } = props;

  return (
    <TableContainer style={{ marginTop: '6%' }} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Country Name</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Temperature</TableCell>
            <TableCell align="right">Wind Speed</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          <TableRow
            key="name"
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {name}
            </TableCell>
            <TableCell align="right">{description}</TableCell>
            <TableCell align="right">{temperature}</TableCell>
            <TableCell align="right">{wind}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

WeatherData.propTypes = {
  description: PropTypes.string.isRequired,
  temperature: PropTypes.string.isRequired,
  wind: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,

};

export default WeatherData;
