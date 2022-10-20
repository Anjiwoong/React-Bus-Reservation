import React, { useContext, useEffect, useMemo, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import styled, { css } from 'styled-components';
import useHttp from '../../hooks/use-http';
import Button from '../UI/Button';
import Input from '../UI/Input';
import TerminalItem from './TerminalItem';
import _ from 'lodash';
import { useSelector } from 'react-redux';
import DateContext from '../../store/date-context';

const API_KEY =
  '1Yt0hh%2F7Sy9VyVvzkqkvQGF68NQ%2BS1UnWTR7%2FL4%2FUsSCS62pr6HZBSaAHRRHhi8gwDmUHChWRPeJZFSAZ4LXeg%3D%3D';

const SearchTerminal = ({ region, onClose }) => {
  const [terminals, setTerminals] = useState([]);
  const [filteredTerminal, setFilteredTerminal] = useState([]);
  const [enteredValue, setEnteredValue] = useState('');

  const startTerminalCode = useSelector(
    state => state.ticket.location.start.terminalCode
  );
  const { isLoading, sendRequest } = useHttp();
  const dateCtx = useContext(DateContext);

  const { start } = dateCtx.date;
  const { startTerminal } = dateCtx;

  useEffect(() => {
    const transformTerminal = terminals => {
      let loadedTerminal = [];
      const data = terminals.response.body;

      if (startTerminal) {
        loadedTerminal = data.items.item.filter(
          terminal => terminal.cityName === region
        );
      } else {
        loadedTerminal = _.uniqBy(data.items.item, 'arrPlaceNm');
      }

      setTerminals(loadedTerminal);
      setFilteredTerminal(loadedTerminal);
      setEnteredValue('');
    };
    let URL = `http://apis.data.go.kr/1613000/SuburbsBusInfoService/getSuberbsBusTrminlList?numOfRows=2117&pageNo=1&serviceKey=${API_KEY}&_type=json`;
    if (!startTerminal) {
      const startDate = start.replaceAll('-', '');
      URL = `http://apis.data.go.kr/1613000/SuburbsBusInfoService/getStrtpntAlocFndSuberbsBusInfo?serviceKey=${API_KEY}&depTerminalId=${startTerminalCode}&depPlandTime=${startDate}&numOfRows=2117&_type=json`;
    }
    sendRequest(
      {
        url: URL,
      },
      transformTerminal
    );
  }, [sendRequest, region, startTerminalCode, start, startTerminal]);

  const throttleHandler = useMemo(
    () => _.throttle(terminal => setTerminals(terminal), 500),
    []
  );

  const searchTerminalHandler = e => {
    const regExp = new RegExp(e.target.value, 'i');

    const matchedTerminal = filteredTerminal.filter(terminal => {
      if (dateCtx.startTerminal) return terminal.terminalNm.match(regExp);
      return terminal.arrPlaceNm.match(regExp);
    });
    throttleHandler(matchedTerminal);
    setEnteredValue(e.target.value);
  };

  return (
    <RightDiv arrival={!dateCtx.startTerminal}>
      <SearchForm>
        <Input
          modal
          placeholder="터미널 검색"
          onChange={searchTerminalHandler}
          value={enteredValue}
        />
        <Button>
          <BiSearch />
        </Button>
      </SearchForm>
      <ul>
        {!isLoading &&
          terminals.length > 0 &&
          terminals.map((terminal, i) => (
            <TerminalItem
              key={dateCtx.startTerminal ? terminal.terminalId : i}
              terminal={terminal}
              onClose={onClose}
            />
          ))}
        {!isLoading && terminals.length === 0 && (
          <LoadingMessage>일치하는 정보가 없습니다.</LoadingMessage>
        )}
        {isLoading && <LoadingMessage>Loading...</LoadingMessage>}
      </ul>
    </RightDiv>
  );
};

const RightDiv = styled.div`
  width: 50%;
  padding-left: 30px;

  ${props =>
    props.arrival &&
    css`
      width: 100%;
      padding-left: 0;
    `}

  ul {
    text-align: center;
    height: 320px;
    overflow: scroll;
    position: relative;
  }

  li {
    width: 100%;
    height: 50px;
    font-size: ${({ theme }) => theme.size.small};
    border-bottom: 1px solid ${({ theme }) => theme.color.bgColor};
    line-height: 50px;
    color: ${({ theme }) => theme.color.primaryFont};
    cursor: pointer;

    &:hover {
      background: ${({ theme }) => theme.color.bgColor};
    }
  }
`;

const SearchForm = styled.form`
  position: relative;

  button > svg {
    font-size: ${({ theme }) => theme.size.small};
  }
`;

const LoadingMessage = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default SearchTerminal;
