import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { useContext } from 'react';
import TerminalContext from '../../store/terminal-context';

const DateSelectors = () => {
  const oneway = useSelector(state => state.ticket.oneway);
  const terminalCtx = useContext(TerminalContext);
  const today = new Date().toISOString().slice(0, 10);

  const changeStartDateHandler = e => {
    if (oneway) {
      terminalCtx.setArrivalTerminal(e.target.value);
    }
    terminalCtx.setStartTerminal(e.target.value);
  };

  const changeArrivalDateHandler = e =>
    terminalCtx.setArrivalTerminal(e.target.value);

  return (
    <Wrapper>
      <DateInput
        type="date"
        data-placeholder="가는날"
        required
        aria-required="true"
        min={today}
        onChange={changeStartDateHandler}
        value={terminalCtx.date.start}
      />
      {!oneway && (
        <DateInput
          type="date"
          data-placeholder="오는날"
          required
          aria-required="true"
          min={terminalCtx.date.start}
          onChange={changeArrivalDateHandler}
          value={terminalCtx.date.arrival}
        />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 150px;
  padding: 33px 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.bgColor};
`;

const DateInput = styled.input`
  border: none;
  width: 250px;
  font-size: ${({ theme }) => theme.size.text};
  color: ${({ theme }) => theme.color.gray1};

  &::before {
    content: attr(data-placeholder);
    width: 100%;
  }

  &:focus {
    outline: none;
  }

  &:valid::before {
    display: none;
  }
`;

export default DateSelectors;
