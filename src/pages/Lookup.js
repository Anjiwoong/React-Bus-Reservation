import React from 'react';
import Layer from '../components/UI/Layer';
import Heading from '../components/UI/Heading';
import Card from '../components/UI/Card';
import RouteInfo from '../components/mypage/RouteInfo';
import StartLookupBus from '../components/lookup/StartLookupBus';

const startTime = [
  { start: '07 : 10', seat: 8 },
  { start: '08 : 40', seat: 8 },
  { start: '09 : 10', seat: 8 },
  { start: '09 : 40', seat: 8 },
  { start: '10 : 10', seat: 8 },
  { start: '10 : 40', seat: 8 },
  { start: '11 : 10', seat: 8 },
  { start: '11 : 40', seat: 8 },
  { start: '12 : 10', seat: 8 },
  { start: '12 : 40', seat: 8 },
  { start: '13 : 10', seat: 8 },
  { start: '13 : 40', seat: 8 },
  { start: '14 : 10', seat: 8 },
  { start: '14 : 40', seat: 8 },
  { start: '15 : 10', seat: 8 },
  { start: '15 : 40', seat: 8 },
  { start: '16 : 10', seat: 8 },
  { start: '16 : 40', seat: 8 },
];

const Lookup = () => {
  return (
    <Layer>
      <Heading>배차 조회</Heading>
      <Card>
        <RouteInfo />
        <StartLookupBus timeList={startTime} />
      </Card>
    </Layer>
  );
};

export default Lookup;
