import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  oneway: true,
  // startTerminal: true,
  location: {
    start: {
      name: '선택',
      terminalId: '',
    },
    arrival: {
      name: '선택',
      terminalId: '',
    },
  },
  premium: false,
  allCheck: false,
};

const ticketSlice = createSlice({
  name: 'ticket',
  initialState,
  reducers: {
    changeWay(state, action) {
      state.oneway = action.payload;
    },
    // selectStartTerminal(state, action) {
    //   state.startTerminal = action.payload;
    // },
    setStartLocation(state, action) {
      state.location.start = action.payload;
    },
    setArrivalLocation(state, action) {
      state.location.arrival = action.payload;
    },
    // switchLocation(state) {
    //   let temp = state.location.start;
    //   state.location.start = state.location.arrival;
    //   state.location.arrival = temp;
    // },
    changeClass(state, action) {
      state.premium = action.payload;
    },
    setAllCheck(state, action) {
      state.allCheck = action.payload;
    },
  },
});

export const ticketActions = ticketSlice.actions;
export default ticketSlice;
