import { useContext } from 'react';
import { useDispatch } from 'react-redux';
import TerminalContext from '../../store/terminal-context';
import { ticketActions } from '../../store/ticket-slice';

const TerminalItem = ({ terminal }) => {
  const dispatch = useDispatch();

  const terminalCtx = useContext(TerminalContext);

  const saveStartTerminalHandler = () => {
    const { terminalNm, terminalId } = terminal;

    if (!terminalCtx.startTerminal) {
      dispatch(
        ticketActions.setArrivalLocation({ name: terminalNm, terminalId })
      );
    } else {
      dispatch(
        ticketActions.setStartLocation({ name: terminalNm, terminalId })
      );
    }
  };
  return (
    <li key={terminal.terminalId} onClick={saveStartTerminalHandler}>
      <span>{terminal.terminalNm}</span>
    </li>
  );
};

export default TerminalItem;
