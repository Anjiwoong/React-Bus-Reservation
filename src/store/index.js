import { configureStore } from '@reduxjs/toolkit';
import ticketSlice from './ticket-slice';

const store = configureStore({
  reducer: {
    ticket: ticketSlice.reducer,
  },
});

export default store;
