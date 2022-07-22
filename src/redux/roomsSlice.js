import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllRooms } from "../utils/mockService";

const initialState = {
  rooms: [],
  status: "idle",
  error: null,
};

export const getRoomsAsync = createAsyncThunk("rooms/getRoomsAsync", async () => {
  const rooms = await getAllRooms();
  return rooms;
});

export const roomsSlice = createSlice({
  name: "rooms",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getRoomsAsync.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getRoomsAsync.fulfilled, (state, action) => {
        console.log("payload data", action.payload);
        //   return action.payload.bookings;
        state.status = "succeeded";
        state.rooms = action.payload.rooms;
      })
      .addCase(getRoomsAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default roomsSlice.reducer;
