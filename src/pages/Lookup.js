import React from 'react';
import Layer from '../components/UI/Layer';
import Heading from '../components/UI/Heading';
import Card from '../components/UI/Card';
import RouteInfo from '../components/mypage/RouteInfo';
import StartLookupBus from '../components/lookup/StartLookupBus';

const Lookup = () => {
  return (
    <Layer over>
      <Heading>배차 조회</Heading>
      <Card>
        <RouteInfo />
        <StartLookupBus />
      </Card>
    </Layer>
  );
};

export default Lookup;
