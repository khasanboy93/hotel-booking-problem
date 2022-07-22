import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addBooking } from "../redux/bookingSlice";
import { Container, Typography, Divider, Select, MenuItem, TextField, Grid, Card, Stack, Button } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { getRoomsAsync } from "../redux/roomsSlice";

const AddBooking = () => {
  const [room, setRoom] = useState("");
  const [surname, setSurname] = useState("");
  const [date, setDate] = useState(null);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const { rooms } = useSelector((state) => state.rooms);

  useEffect(() => {
    dispatch(getRoomsAsync());
  }, [dispatch]);

  const handleSubmit = () => {
    if (room !== "" && surname !== "" && date !== null) {
      dispatch(addBooking({ room, surname, date: date.toLocaleDateString() }));
      error && setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ m: 4 }}>
      <Card variant="outlined" sx={{ p: 4 }}>
        <Typography variant="h5">Add Booking</Typography>
        <Divider />

        <Grid container spacing={2} sx={{ pt: 4 }}>
          <Grid item xs={4} sx={{ my: "auto" }}>
            <Typography align="right">Surname</Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField placeholder="Surname" fullWidth value={surname} onChange={(e) => setSurname(e.target.value)} />
          </Grid>
          <Grid item xs={4} sx={{ my: "auto" }}>
            <Typography align="right">Room</Typography>
          </Grid>
          <Grid item xs={8}>
            <Select fullWidth value={room} displayEmpty onChange={(e) => setRoom(e.target.value)}>
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
        <Stack alignItems="center" sx={{ mt: 4 }}>
          <Button variant="contained" onClick={handleSubmit}>
            Add
          </Button>
        </Stack>
        {error && <p style={{ color: "red" }}>You need to fill all the fields</p>}
      </Card>
    </Container>
  );
};

export default AddBooking;
