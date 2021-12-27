/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PropTypes from 'prop-types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function OutlinedCard(props) {
  const {
    country, region, tz_id, localtime, temp_c, temp_f, wind_mph, wind_kph,
    pressure_mb, humidity, feelslike_c, text,
  } = props;

  const ChangeIcone = (text) => {
    while (text === 'Sunny') {
      return 'icons/sun.png';
    }
    while (text === 'Clear') {
      return 'icons/sun.png';
    }
    while (text === 'Partly cloudy') {
      return 'icons/cloudy.png';
    }
    while (text === 'Mist') {
      return 'icons/cloudy.png';
    }
    while (text === 'Patchy light drizzle') {
      return 'icons/lightrain.png';
    }
    while (text === 'Overcast') {
      return 'icons/overcast.png';
    }
    return 'icons/sun.png';
  };

  return (
    <Box key={tz_id} style={{ paddingTop: '7%', width: '300px' }} sx={{ minWidth: 275 }}>
      <CardContent style={{
        height: '530px',
        width: '250%',
        background: 'rgba(181, 176, 176, 0.7)',
        position: 'relative',
        left: '136%',
        display: 'grid',
        gridTemplateColumns: 'auto auto',
        justifyItems: 'center',
        justifyContent: 'center',
        borderRadius: '40px',
      }}
      >
        <Typography style={{ gridColumnStart: '1', gridColumnEnd: '3' }} sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
          {region}
          /
          {country}
          {' '}
          Time :
          {localtime}
        </Typography>
        <Typography variant="h2" component="div">
          {temp_c}
          {' '}
          °C
        </Typography>
        <img style={{ width: '150px' }} alt="sun" src={ChangeIcone(text)} />
        <Typography variant="h2" component="div">
          {temp_f}
          {' '}
          °F
        </Typography>
        <Typography style={{ gridColumnStart: '2', gridColumnEnd: '3' }} variant="h5" component="div">
          {text}
        </Typography>
        <div style={{ gridColumnStart: '1', gridColumnEnd: '3' }}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>See Details</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <TableContainer style={{ marginTop: '6%' }} component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Wind Speed/Mph</TableCell>
                      <TableCell>Wind Speed/Kmh</TableCell>
                      <TableCell>Humidity</TableCell>
                      <TableCell>Pressure Millibars</TableCell>
                      <TableCell>Feels Like</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow
                      key="name"
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {wind_mph}
                      </TableCell>
                      <TableCell>{wind_kph}</TableCell>
                      <TableCell>{pressure_mb}</TableCell>
                      <TableCell>{humidity}</TableCell>
                      <TableCell>
                        {feelslike_c}
                        {' '}
                        C°
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </AccordionDetails>
          </Accordion>
        </div>
      </CardContent>
    </Box>
  );
}

OutlinedCard.propTypes = {
  country: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  tz_id: PropTypes.string.isRequired,
  localtime: PropTypes.string.isRequired,
  temp_c: PropTypes.number.isRequired,
  temp_f: PropTypes.number.isRequired,
  wind_mph: PropTypes.number.isRequired,
  wind_kph: PropTypes.number.isRequired,
  pressure_mb: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
  feelslike_c: PropTypes.number.isRequired,
  text: PropTypes.number.isRequired,
};
