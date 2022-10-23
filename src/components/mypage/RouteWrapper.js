import React from 'react';
import styled from 'styled-components';
import PriceInfo from './PriceInfo';
import RouteInfo from './RouteInfo';

const RouteWrapper = props => {
  return (
    <Wrapper>
      <RouteInfo start={props.start} arrival={props.arrival} />
      <PriceInfo count={props.count} total={props.total} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: 0 23px;
`;

export default RouteWrapper;
