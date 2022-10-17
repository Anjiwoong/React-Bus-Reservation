import React from 'react';

const TerminalItem = props => {
  const selectedTerminal = () => {};

  return (
    <li key={props.terminal.terminalId} onClick={selectedTerminal}>
      <span>{props.terminal.terminalNm}</span>
    </li>
  );
};

export default TerminalItem;
