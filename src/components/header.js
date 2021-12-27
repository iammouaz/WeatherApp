/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import SvgIcon from '@mui/material/SvgIcon';
import AppBar from '@mui/material/AppBar';
import { useNavigate } from 'react-router-dom';

function HomeIcon() {
  return (
    <SvgIcon>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

const Header = () => (
  <AppBar style={{ backgroundColor: 'rgba(181, 176, 176, 0.7)' }}>
    <div className="flex home">
      <h1>Home</h1>
      <HomeIcon />
    </div>
  </AppBar>
);

export default Header;
