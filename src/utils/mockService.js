import bookings from "../mocks/bookings";
import rooms from "../mocks/rooms";

export const getAll = async () => {
  return { bookings };
};

export const getAllRooms = async () => {
  return { rooms };
};
