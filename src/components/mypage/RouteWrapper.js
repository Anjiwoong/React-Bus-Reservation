import React from 'react';
import styled from 'styled-components';
import PriceInfo from './PriceInfo';
import RouteInfo from './RouteInfo';

const RouteWrapper = () => {
  return (
    <Wrapper>
      <RouteInfo />
      <PriceInfo />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: 0 23px;
`;

export default RouteWrapper;
