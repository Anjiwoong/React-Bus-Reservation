import React from 'react';
import Heading from '../components/UI/Heading';
import Card from '../components/UI/Card';

import StartLookupBus from '../components/lookup/StartLookupBus';
import { useSelector } from 'react-redux';
import RouteInfo from '../components/UI/RouteInfo';

const Lookup = () => {
  const start = useSelector(state => state.ticket.terminal.start.name);
  const arrival = useSelector(state => state.ticket.terminal.arrival.name);
  const oneway = useSelector(state => state.ticket.oneway);
  const startRemainSeat = useSelector(state => state.ticket.seat.start.remain);

  const startDateTerminal = oneway
    ? start
    : startRemainSeat !== null && !oneway
    ? arrival
    : start;

  const arrivalTerminalText = oneway
    ? arrival
    : startRemainSeat !== null && !oneway
    ? start
    : arrival;

  return (
    <>
      <Heading>배차 조회</Heading>
      <Card>
        <RouteInfo start={startDateTerminal} arrival={arrivalTerminalText} />
        <StartLookupBus />
      </Card>
    </>
  );
};

export default Lookup;
