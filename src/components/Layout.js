import React from "react";
import TopBar from "./TopBar";
import { Grid } from "@mui/material";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <TopBar />
      <main>
        <Grid container spacing={2}>
          <Grid item md={3} alignItems="flex-end">
            <Sidebar />
          </Grid>
          <Grid item md={9}>
            {children}
          </Grid>
        </Grid>
      </main>
    </>
  );
};

export default Layout;
