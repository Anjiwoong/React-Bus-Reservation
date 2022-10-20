import React from 'react';
import { CgArrowLongRightC } from 'react-icons/cg';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const RouteInfo = () => {
  const start = useSelector(state => state.ticket.location.start.name);
  const arrival = useSelector(state => state.ticket.location.arrival.name);

  return (
    <Wrapper>
      <Start>
        <p>출발</p>
        <span>{start}</span>
      </Start>
      <CgArrowLongRightC />
      <Arrival>
        <p>도착</p>
        <span>{arrival}</span>
      </Arrival>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  height: 225px;
  justify-content: space-around;
  align-items: center;

  svg {
    width: 67px;
    height: 67px;
  }
`;

const Start = styled.div`
  p {
    font-size: ${({ theme }) => theme.size.medium2};
    color: ${({ theme }) => theme.color.gray2};
    text-align: center;
    margin-bottom: 10px;
  }

  span {
    font-size: ${({ theme }) => theme.size.large};
    color: ${({ theme }) => theme.color.primaryFont};
  }
`;

const Arrival = styled.div`
  p {
    font-size: ${({ theme }) => theme.size.medium2};
    color: ${({ theme }) => theme.color.gray2};
    text-align: center;
    margin-bottom: 10px;
  }

  span {
    font-size: ${({ theme }) => theme.size.large};
    color: ${({ theme }) => theme.color.primaryFont};
  }
`;

export default RouteInfo;
