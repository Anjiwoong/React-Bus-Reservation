import React from 'react';
import styled from 'styled-components';
import SelectSeatItem from './SelectSeatItem';

const StartLookupBus = props => {
  return (
    <Wrapper>
      <StartBusTime>
        <span>가는 날 배차 조회</span>
        <span>2022-10-10</span>
      </StartBusTime>
      <StartBusItem>
        <span>출발</span>
        <span>소요 시간</span>
        <span>잔여석</span>
      </StartBusItem>
      <ul>
        {props.timeList.map(time => (
          <SelectSeatItem
            key={time.start}
            start={time.start}
            seat={time.seat}
          />
        ))}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ul {
    height: 700px;
    overflow: scroll;
  }
`;

const StartBusTime = styled.div`
  height: 80px;
  border-top: 2px solid ${({ theme }) => theme.color.gray1};
  border-bottom: 2px solid ${({ theme }) => theme.color.gray1};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${({ theme }) => theme.size.text};

  span:nth-child(1) {
    font-weight: bold;
    margin-left: 50px;
  }

  span:nth-child(2) {
    font-weight: bold;
    margin-right: 50px;
  }
`;

const StartBusItem = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
  font-size: ${({ theme }) => theme.size.small};
  border-bottom: 1px solid ${({ theme }) => theme.color.gray1};
  color: ${({ theme }) => theme.color.gray1};
  background: ${({ theme }) => theme.color.bgColor};

  span {
    width: 25%;
    text-align: center;
  }
`;

export default StartLookupBus;
