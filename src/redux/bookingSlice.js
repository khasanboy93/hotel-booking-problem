import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAll } from "../utils/mockService";

const initialState = {
  bookings: [],
  status: "idle",
  error: null,
};

export const getBookingsAsync = createAsyncThunk("bookings/getBookingsAsync", async () => {
  const bookings = await getAll();
  return bookings;
});

export const bookingSlice = createSlice({
  name: "bookings",
  initialState,
  reducers: {
    addBooking: (state, action) => {
      state.bookings.push(action.payload);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getBookingsAsync.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getBookingsAsync.fulfilled, (state, action) => {
        console.log("payload data", action.payload);
        //   return action.payload.bookings;
        state.status = "succeeded";
        state.bookings = action.payload.bookings;
      })
      .addCase(getBookingsAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { addBooking } = bookingSlice.actions;

export default bookingSlice.reducer;
