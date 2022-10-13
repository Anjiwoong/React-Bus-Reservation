import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  oneway: true,
  date: {
    start: '',
    arrival: '',
  },
  location: {
    start: '',
    arrival: '',
  },
  premium: false,
};

const ticketSlice = createSlice({
  name: 'ticket',
  initialState,
  reducers: {
    changeWay(state, action) {
      state.oneway = action.payload === 'oneway';
    },
    setStartDate(state, action) {
      state.date.start = action.payload;
    },
    setArrivalDate(state, action) {
      state.date.arrival = action.payload;
    },
  },
});

export const ticketActions = ticketSlice.actions;
export default ticketSlice;
