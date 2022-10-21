import React from 'react';
import styled from 'styled-components';
import RouteWrapper from './RouteWrapper';
import TimeWrapper from './TimeWrapper';

const MyInfoCard = props => {
  // console.log(props);

  return (
    <Wrapper>
      <TimeWrapper />
      <RouteWrapper />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: ${({ theme }) => theme.color.white};
  width: 840px;
  margin: 0 auto;
  border-radius: 15px;
  margin-bottom: 20px;
`;

export default MyInfoCard;
