import React from "react";
import { Container, Typography, Divider, Card } from "@mui/material";
const Home = () => {
  return (
    <Container maxWidth="sm" sx={{ m: 4 }}>
      <Card variant="outlined" sx={{ p: 4 }}>
        <Typography variant="h5">Home</Typography>
        <Divider />
      </Card>
    </Container>
  );
};

export default Home;
