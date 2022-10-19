import React, { useEffect, useMemo, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import styled from 'styled-components';
import useHttp from '../../hooks/use-http';
import Input from '../UI/Input';
import TerminalItem from './TerminalItem';
import _ from 'lodash';

const API_KEY =
  '1Yt0hh%2F7Sy9VyVvzkqkvQGF68NQ%2BS1UnWTR7%2FL4%2FUsSCS62pr6HZBSaAHRRHhi8gwDmUHChWRPeJZFSAZ4LXeg%3D%3D';

const SearchTerminal = props => {
  const [terminals, setTerminals] = useState([]);
  const [filteredTerminal, setFilteredTerminal] = useState([]);
  const [enteredValue, setEnteredValue] = useState('');

  const { isLoading, sendRequest } = useHttp();

  useEffect(() => {
    const transformTerminal = terminals => {
      const data = terminals.response.body;
      console.log(data);
      let loadedTerminal = [];

      loadedTerminal = data.items.item.filter(
        terminal => terminal.cityName === props.region
      );

      setTerminals(loadedTerminal);
      setFilteredTerminal(loadedTerminal);
      setEnteredValue('');
    };

    sendRequest(
      {
        url: `http://apis.data.go.kr/1613000/SuburbsBusInfoService/getSuberbsBusTrminlList?numOfRows=2117&pageNo=1&serviceKey=${API_KEY}&_type=json`,
      },
      transformTerminal
    );
  }, [sendRequest, props.region]);

  const throttle = useMemo(
    () => _.throttle(terminal => setTerminals(terminal), 500),
    []
  );

  const searchTerminalHandler = e => {
    const regExp = new RegExp(e.target.value, 'i');

    const matchedTerminal = filteredTerminal.filter(terminal =>
      terminal.terminalNm.match(regExp)
    );
    throttle(matchedTerminal);
    setEnteredValue(e.target.value);
  };

  return (
    <RightDiv>
      <SearchForm>
        <Input
          modal
          placeholder="터미널 검색"
          onChange={searchTerminalHandler}
          value={enteredValue}
        />
        <BiSearch />
      </SearchForm>
      <ul>
        {!isLoading &&
          terminals.map(terminal => (
            <TerminalItem key={terminal.terminalId} terminal={terminal} />
          ))}
        {isLoading && <LoadingMessage>Loading...</LoadingMessage>}
      </ul>
    </RightDiv>
  );
};

const RightDiv = styled.div`
  width: 50%;
  padding-left: 30px;

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

  svg {
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
