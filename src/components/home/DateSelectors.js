import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { useContext } from 'react';
import DateContext from '../../store/date-context';

const DateSelectors = () => {
  const oneway = useSelector(state => state.ticket.oneway);
  const dateCtx = useContext(DateContext);

  const changeStartDateHandler = e => dateCtx.setStartDate(e.target.value);
  const changeArrivalDateHandler = e => dateCtx.setArrivalDate(e.target.value);

  return (
    <Wrapper>
      <DateInput
        type="date"
        data-placeholder="가는날"
        required
        aria-required="true"
        onChange={changeStartDateHandler}
        value={dateCtx.date.start}
      />
      {!oneway && (
        <DateInput
          type="date"
          data-placeholder="오는날"
          required
          aria-required="true"
          min={dateCtx.date.start}
          onChange={changeArrivalDateHandler}
          value={dateCtx.date.arrival}
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
