import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ticketActions } from '../../store/ticket-slice';

const TerminalItem = props => {
  const direction = useSelector(state => state.ticket.location.startDirection);
  const dispatch = useDispatch();

  const selectTerminalHandler = () => {
    if (direction) {
      dispatch(ticketActions.setStartLocation(props.terminal));
    } else {
      dispatch(ticketActions.setArrivalLocation(props.terminal));
    }

    props.onClose();
  };

  return <li onClick={selectTerminalHandler}>{props.terminal}</li>;
};

export default TerminalItem;
