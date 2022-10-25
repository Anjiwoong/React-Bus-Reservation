import React from 'react';
import BusSeat from '../components/seat/BusSeat';
import SeatHeading from '../components/seat/SeatHeading';
import SeatPayment from '../components/seat/SeatPayment';

const Seat = () => {
  return (
    <>
      <SeatHeading />
      <BusSeat />
      <SeatPayment />
    </>
  );
};

export default Seat;
