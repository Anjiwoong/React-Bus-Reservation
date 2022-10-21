import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import useHttp from '../../hooks/use-http';
import DateContext from '../../store/date-context';
import SelectSeatItem from './SelectSeatItem';

const API_KEY =
  '1Yt0hh%2F7Sy9VyVvzkqkvQGF68NQ%2BS1UnWTR7%2FL4%2FUsSCS62pr6HZBSaAHRRHhi8gwDmUHChWRPeJZFSAZ4LXeg%3D%3D';

const StartLookupBus = props => {
  const [terminals, setTerminals] = useState([]);

  const dateCtx = useContext(DateContext);
  const startTerminalCode = useSelector(
    state => state.ticket.location.start.terminalCode
  );
  const arrivalTerminal = useSelector(
    state => state.ticket.location.arrival.name
  );

  const startRemainSeat = useSelector(state => state.ticket.seat.start.remain);
  const oneway = useSelector(state => state.ticket.oneway);

  const { isLoading, sendRequest } = useHttp();

  const { start, arrival } = dateCtx.date;

  const startDateText = oneway
    ? start
    : startRemainSeat !== null && !oneway
    ? arrival
    : start;

  useEffect(() => {
    const transformStartTime = time => {
      let loadedStartTime = [];
      const data = time.response.body;
      loadedStartTime = data.items.item.filter(
        terminal => terminal.arrPlaceNm === arrivalTerminal
      );
      setTerminals(loadedStartTime);
    };

    const startDate = start.replaceAll('-', '');

    sendRequest(
      {
        url: `http://apis.data.go.kr/1613000/SuburbsBusInfoService/getStrtpntAlocFndSuberbsBusInfo?serviceKey=${API_KEY}&depTerminalId=${startTerminalCode}&depPlandTime=${startDate}&numOfRows=2117&_type=json`,
      },
      transformStartTime
    );
  }, [sendRequest, start, startTerminalCode, arrivalTerminal]);

  return (
    <Wrapper>
      <StartBusTime>
        <span>
          {startRemainSeat !== null && !oneway ? '오는' : '가는'}날 배차 조회
        </span>
        <span>{startDateText}</span>
      </StartBusTime>
      <StartBusItem>
        <span>출발</span>
        <span>소요 시간</span>
        <span>잔여석</span>
      </StartBusItem>
      <ul>
        {!isLoading &&
          terminals.map(bus => (
            <SelectSeatItem
              key={bus.depPlandTime}
              start={bus.depPlandTime}
              arrival={bus.arrPlandTime}
              seat={bus.seat}
            />
          ))}
        {isLoading && <LoadingText>Loading...</LoadingText>}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ul {
    height: 600px;
    overflow: scroll;
  }
`;

const LoadingText = styled.p``;

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
