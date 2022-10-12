import React from 'react';
import BusSeat from '../components/seat/BusSeat';
import SeatHeading from '../components/seat/SeatHeading';
import SeatPayment from '../components/seat/SeatPayment';
import Layer from '../components/UI/Layer';

const Seat = () => {
  return (
    <Layer>
      <SeatHeading />
      <BusSeat />
      <SeatPayment />
    </Layer>
  );
};

export default Seat;
