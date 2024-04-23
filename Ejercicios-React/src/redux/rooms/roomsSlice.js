import { createSlice } from "@reduxjs/toolkit";
import { rooms, totalRooms } from "../../data/rooms";

const initialState = {
  rooms: rooms,
  totalRooms,
};

export const roomsSlice = createSlice({
  name: "rooms",
  initialState: initialState,
  reducers: {
    getRooms: (state) => {
      return state;
    },
  },
});

export const { getRooms } = roomsSlice.actions;
export default roomsSlice.reducer;
