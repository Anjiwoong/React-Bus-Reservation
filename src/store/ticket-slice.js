import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  oneway: true,
  location: {
    startDirection: true,
    start: {
      name: '선택',
      terminalCode: '',
    },
    arrival: { name: '선택' },
  },
  charge: 0,
  premium: false,
  allCheck: false,
  ticketInfo: {},
};

const ticketSlice = createSlice({
  name: 'ticket',
  initialState,
  reducers: {
    changeWay(state, action) {
      state.oneway = action.payload;
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
    setAllCheck(state, action) {
      state.allCheck = action.payload;
    },
    setCharge(state, action) {
      state.charge = action.payload;
    },

    reset(state) {
      state.location.startDirection = true;
      state.location.start.name = '선택';
      state.location.start.terminalCode = '';
      state.location.arrival.name = '선택';
    },
  },
});

export const ticketActions = ticketSlice.actions;
export default ticketSlice;
