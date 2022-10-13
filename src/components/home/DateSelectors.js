import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { ticketActions } from '../../store/ticket-slice';

const DateSelectors = () => {
  const oneway = useSelector(state => state.ticket.oneway);
  const today = new Date().toISOString().slice(0, 10);
  const dispatch = useDispatch();

  const changeStartDateHandler = e =>
    dispatch(ticketActions.setStartDate(e.target.value));

  const changeArrivalDateHandler = e =>
    dispatch(ticketActions.setArrivalDate(e.target.value));

  return (
    <Wrapper>
      <DateInput
        type="date"
        data-placeholder="가는날"
        required
        aria-required="true"
        min={today}
        onChange={changeStartDateHandler}
      />
      {!oneway && (
        <DateInput
          type="date"
          data-placeholder="오는날"
          required
          aria-required="true"
          onChange={changeArrivalDateHandler}
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
