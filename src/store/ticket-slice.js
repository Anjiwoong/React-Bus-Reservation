import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  oneway: true,
  terminal: {
    start: {
      name: '선택',
      terminalCode: '',
    },
    arrival: { name: '선택' },
  },
  seat: {
    start: {
      remain: null,
      selected: [],
    },
    arrival: {
      remain: null,
      selected: [],
    },
  },
  time: { start: '', arrival: '' },
  charge: 0,
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
    setStartTerminal(state, action) {
      state.terminal.start = action.payload;
    },
    setArrivalTerminal(state, action) {
      state.terminal.arrival = action.payload;
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
    setStartRemainingSeat(state, action) {
      state.seat.start.remain = action.payload;
    },
    setArrivalRemainingSeat(state, action) {
      state.seat.arrival.remain = action.payload;
    },
    setStartTime(state, action) {
      state.time.start = action.payload;
    },
    setArrivalTime(state, action) {
      state.time.arrival = action.payload;
    },
    setSelectedSeat(state, action) {
      if (state.seat.arrival.remain === null) {
        if (state.seat.start.selected.indexOf(action.payload) === -1) {
          state.seat.start.selected.push(action.payload);
        } else {
          state.seat.start.selected = state.seat.start.selected.filter(
            item => item !== action.payload
          );
        }
      } else {
        if (state.seat.arrival.selected.indexOf(action.payload) === -1) {
          state.seat.arrival.selected.push(action.payload);
        } else {
          state.seat.arrival.selected = state.seat.arrival.selected.filter(
            item => item !== action.payload
          );
        }
      }
    },
    resetWay(state) {
      state.terminal.start.name = '선택';
      state.terminal.start.terminalCode = '';
      state.terminal.arrival.name = '선택';
    },
    reset(state) {
      state.oneway = true;
      state.terminal.start.name = '선택';
      state.terminal.start.terminalCode = '';
      state.terminal.arrival.name = '선택';
      state.seat.start.remain = null;
      state.seat.start.selected = [];
      state.seat.arrival.remain = null;
      state.seat.arrival.selected = [];
      state.time.start = '';
      state.time.arrival = '';
      state.charge = 0;
      state.premium = false;
      state.allCheck = false;
    },
  },
});

export const ticketActions = ticketSlice.actions;
export default ticketSlice;
