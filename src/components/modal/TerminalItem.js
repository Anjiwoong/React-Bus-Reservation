import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import DateContext from '../../store/date-context';
import { ticketActions } from '../../store/ticket-slice';

const TerminalItem = ({ terminal, onClose }) => {
  const dispatch = useDispatch();
  const dateCtx = useContext(DateContext);
  const { terminalNm, terminalId, arrPlaceNm, charge } = terminal;

  const selectedTerminal = () => {
    if (dateCtx.startTerminal) {
      dispatch(
        ticketActions.setStartTerminal({
          name: terminalNm,
          terminalCode: terminalId,
        })
      );
    } else {
      dispatch(
        ticketActions.setArrivalTerminal({
          name: arrPlaceNm,
        })
      );
      dispatch(ticketActions.setCharge(charge));
    }

    onClose();
  };

  return (
    <li key={terminalId} onClick={selectedTerminal}>
      <span>{dateCtx.startTerminal ? terminalNm : arrPlaceNm}</span>
    </li>
  );
};

export default TerminalItem;
