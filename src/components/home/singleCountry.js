import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

const Country = (props) => {
  const {
    name, img, continent,
  } = props;

  return (
    <Card variant="outlined" key={name} sx={{ minWidth: 275 }} className="scard flex">
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {continent}
        </Typography>
      </CardContent>
      <img className="icons" src={img} alt="Country Icon" />
      <Button variant="contained">See Weather</Button>
    </Card>
  );
};

Country.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  continent: PropTypes.string.isRequired,
};

export default Country;
