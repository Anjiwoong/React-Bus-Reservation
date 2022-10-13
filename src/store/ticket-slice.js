import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  oneway: true,
  date: {
    start: '',
    arrival: '',
  },
  location: {
    startDirection: true,
    start: '선택',
    arrival: '선택',
  },
  premium: false,
};

const ticketSlice = createSlice({
  name: 'ticket',
  initialState,
  reducers: {
    changeWay(state, action) {
      state.oneway = action.payload;
    },
    setStartDate(state, action) {
      state.date.start = action.payload;
    },
    setArrivalDate(state, action) {
      state.date.arrival = action.payload;
    },
    changeDirection(state, action) {
      state.location.startDirection = action.payload;
    },
    setStartLocation(state, action) {
      state.location.start = action.payload;
    },
    setArrivalLocation(state, action) {
      state.location.arrival = action.payload;
    },
    switchLocation(state) {
      let temp = state.location.start;
      state.location.start = state.location.arrival;
      state.location.arrival = temp;
    },
    changeClass(state, action) {
      state.premium = action.payload;
    },
  },
});

export const ticketActions = ticketSlice.actions;
export default ticketSlice;
