import React, { useState } from 'react';

const DateContext = React.createContext({
  date: {
    start: '',
    arrival: '',
  },
  startTerminal: true,
  setStartDate: date => {},
  setArrivalDate: date => {},
  selectedStartTerminal: state => {},
  resetHandler: () => {},
});

export const DateContextProvider = props => {
  const [startDate, setStartDate] = useState('');
  const [arrivalDate, setArrivalDate] = useState('');
  const [isStartTerminal, setIsStartTerminal] = useState(true);

  const setStartDateHandler = date => setStartDate(date);
  const setArrivalDateHandler = date => setArrivalDate(date);

  const resetHandler = () => {
    setStartDate('');
    setArrivalDate('');
    setIsStartTerminal(true);
  };

  const selectedStartTerminal = state => setIsStartTerminal(state);

  const contextValue = {
    date: {
      start: startDate,
      arrival: arrivalDate,
    },
    setStartDate: setStartDateHandler,
    setArrivalDate: setArrivalDateHandler,
    startTerminal: isStartTerminal,
    selectedStartTerminal: selectedStartTerminal,
    resetHandler: resetHandler,
  };

  return (
    <DateContext.Provider value={contextValue}>
      {props.children}
    </DateContext.Provider>
  );
};

export default DateContext;
