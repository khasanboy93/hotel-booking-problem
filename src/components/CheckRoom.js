import React, { useState, useEffect } from "react";
import { Container, Typography, Divider, Select, MenuItem, TextField, Grid, Card, Stack, Button } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useSelector, useDispatch } from "react-redux";
import { getBookingsAsync } from "../redux/bookingSlice";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { getRoomsAsync } from "../redux/roomsSlice";

const CheckRoom = () => {
  const [room, setRoom] = useState("");
  const [date, setDate] = useState(null);
  const [booked, setBooked] = useState(null);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const { bookings } = useSelector((state) => state.bookings);
  const { rooms } = useSelector((state) => state.rooms);

  useEffect(() => {
    dispatch(getBookingsAsync());
    dispatch(getRoomsAsync());
  }, [dispatch]);

  const handleSubmit = () => {
    if (room !== "" && date !== null) {
      let result = bookings.filter((booking) => booking.room === room && booking.date === date.toLocaleDateString());
      if (result.length > 0) {
        setBooked(true);
      } else {
        setBooked(false);
      }
      error && setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ m: 4 }}>
      <Card variant="outlined" sx={{ p: 4 }}>
        <Typography variant="h5">Check Room</Typography>
        <Divider />
        <Grid container spacing={2} sx={{ pt: 4 }}>
          <Grid item xs={4} sx={{ my: "auto" }}>
            <Typography align="right">Room</Typography>
          </Grid>
          <Grid item xs={8}>
            <Select
              fullWidth
              value={room}
              displayEmpty
              onChange={(e) => {
                setRoom(e.target.value);
                if (booked !== null) {
                  setBooked(null);
                }
              }}
            >
              <MenuItem value="">
                <em>Select Room</em>
              </MenuItem>
              {rooms.map((room, index) => (
                <MenuItem key={index} value={room}>
                  {room}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={4} sx={{ my: "auto" }}>
            <Typography align="right">Date</Typography>
          </Grid>
          <Grid item xs={8}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Pick a Date"
                value={date}
                onChange={(newValue) => {
                  setDate(newValue);
                }}
                renderInput={(params) => <TextField fullWidth {...params} />}
              />
            </LocalizationProvider>
          </Grid>
        </Grid>
        <Stack alignItems="center" justifyContent="center" direction="row" spacing={2} sx={{ mt: 4 }}>
          <Button variant="contained" onClick={handleSubmit}>
            Check
          </Button>
          {booked && <CheckIcon />}
          {booked === false && <CloseIcon />}
        </Stack>
        {error && <p style={{ color: "red" }}>You need to fill all the fields</p>}
      </Card>
    </Container>
  );
};

export default CheckRoom;
