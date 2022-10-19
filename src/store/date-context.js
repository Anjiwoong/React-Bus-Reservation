import React, { useState } from 'react';

const DateContext = React.createContext({
  date: {
    start: '',
    arrival: '',
  },

  setStartDate: date => {},
  setArrivalDate: date => {},
  resetHandler: () => {},
});

export const DateContextProvider = props => {
  const [startDate, setStartDate] = useState('');
  const [arrivalDate, setArrivalDate] = useState('');

  const setStartDateHandler = date => setStartDate(date);
  const setArrivalDateHandler = date => setArrivalDate(date);

  const resetHandler = () => {
    setStartDate('');
    setArrivalDate('');
  };

  const contextValue = {
    date: {
      start: startDate,
      arrival: arrivalDate,
    },
    setStartDate: setStartDateHandler,
    setArrivalDate: setArrivalDateHandler,
    resetHandler: resetHandler,
  };

  return (
    <DateContext.Provider value={contextValue}>
      {props.children}
    </DateContext.Provider>
  );
};

export default DateContext;
