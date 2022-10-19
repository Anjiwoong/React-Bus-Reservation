import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ticketActions } from '../../store/ticket-slice';

const TerminalItem = ({ terminal, onClose }) => {
  const dispatch = useDispatch();

  const direction = useSelector(state => state.ticket.location.startDirection);

  const selectedTerminal = () => {
    if (direction) {
      dispatch(
        ticketActions.setStartLocation({
          name: terminal.terminalNm,
          terminalCode: terminal.terminalId,
        })
      );
    } else {
      dispatch(
        ticketActions.setArrivalLocation({
          name: terminal.arrPlaceNm,
        })
      );
      dispatch(ticketActions.setCharge(terminal.charge));
    }

    onClose();
  };

  return (
    <li key={terminal.terminalId} onClick={selectedTerminal}>
      <span>{direction ? terminal.terminalNm : terminal.arrPlaceNm}</span>
    </li>
  );
};

export default TerminalItem;
