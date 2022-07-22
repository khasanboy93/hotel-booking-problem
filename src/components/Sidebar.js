import React from "react";
import { Card, Typography, Divider } from "@mui/material";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Card sx={{ maxWidth: 345, m: 4 }}>
      <Typography variant="h6" sx={{ m: 2 }}>
        <Link style={{ color: "black", textDecoration: "none" }} to="/">
          Home
        </Link>
      </Typography>
      <Divider />
      <Typography variant="h6" sx={{ m: 2 }}>
        <Link style={{ color: "black", textDecoration: "none" }} to="/add-booking">
          Add Booking
        </Link>
      </Typography>
      <Divider />
      <Typography variant="h6" sx={{ m: 2 }}>
        <Link style={{ color: "black", textDecoration: "none" }} to="/check-room">
          Check Room
        </Link>
      </Typography>
      <Divider />
    </Card>
  );
};

export default Sidebar;
