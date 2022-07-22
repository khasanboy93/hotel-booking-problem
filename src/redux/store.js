import { configureStore } from "@reduxjs/toolkit";
import bookingsReducer from "./bookingSlice";
import roomsSlice from "./roomsSlice";

export default configureStore({
  reducer: {
    bookings: bookingsReducer,
    rooms: roomsSlice,
  },
});
