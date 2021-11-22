import React from "react";
import SvgIcon from "@mui/material/SvgIcon";
import AppBar from '@mui/material/AppBar';

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

const Header = () => {
  return (
    <AppBar>
      <div className="flex home">
      <h1>Home</h1>
        <HomeIcon />
      </div>
    </AppBar>
  );
};
export default Header;
