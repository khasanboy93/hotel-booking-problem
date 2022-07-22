import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

const TopBar = () => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <img src={logo} width="80" style={{ height: "80px" }} className="App-logo" alt="logo" />
        <Typography variant="h6">
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            Booking System
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
