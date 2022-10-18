import React, { useState } from 'react';

const TerminalContext = React.createContext({
  date: {
    start: '',
    arrival: '',
  },

  setStartTerminal: terminal => {},
});

export const TerminalContextProvider = props => {
  const [startDate, setStartDate] = useState('');
  const [arrivalDate, setArrivalDate] = useState('');

  const setStartTerminal = terminal => setStartDate(terminal);
  const setArrivalTerminal = terminal => setArrivalDate(terminal);

  const contextValue = {
    date: {
      start: startDate,
      arrival: arrivalDate,
    },
    setStartTerminal: setStartTerminal,
    setArrivalTerminal: setArrivalTerminal,
  };

  return (
    <TerminalContext.Provider value={contextValue}>
      {props.children}
    </TerminalContext.Provider>
  );
};

export default TerminalContext;
