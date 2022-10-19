import React, { useState } from 'react';

const TerminalContext = React.createContext({
  date: {
    start: '',
    arrival: '',
  },
  startTerminal: '',
  setStartTerminal: state => {},
  setArrivalTerminal: state => {},
  selectStartTerminal: state => {},
});

export const TerminalContextProvider = props => {
  const [enteredstartDate, setEnteredStartDate] = useState('');
  const [enteredarrivalDate, setEnteredArrivalDate] = useState('');
  const [isStartTerminal, setIsStartTerminal] = useState(true);

  const setStartTerminal = terminal => setEnteredStartDate(terminal);

  const setArrivalTerminal = terminal => setEnteredArrivalDate(terminal);

  const selectStartTerminal = state => setIsStartTerminal(state);

  const contextValue = {
    date: {
      start: enteredstartDate,
      arrival: enteredarrivalDate,
    },
    startTerminal: isStartTerminal,
    setStartTerminal,
    setArrivalTerminal,
    selectStartTerminal,
  };

  return (
    <TerminalContext.Provider value={contextValue}>
      {props.children}
    </TerminalContext.Provider>
  );
};

export default TerminalContext;
