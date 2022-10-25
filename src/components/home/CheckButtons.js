import { useDispatch, useSelector } from 'react-redux';
import { ticketActions } from '../../store/ticket-slice';

import styled from 'styled-components';
import CheckButtonItem from './CheckButtonItem';

const CheckButtons = () => {
  const dispatch = useDispatch();

  const normalSeatHandler = () => dispatch(ticketActions.changeClass(false));
  const premiumSeatHandler = () => dispatch(ticketActions.changeClass(true));

  const premium = useSelector(state => state.ticket.premium);

  return (
    <Wrapper>
      <CheckButtonItem
        premium={premium}
        changeClass={normalSeatHandler}
        class="일반"
      />
      <CheckButtonItem
        premium={premium}
        changeClass={premiumSeatHandler}
        class="우등"
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 40px 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  font-size: ${({ theme }) => theme.size.small};
  color: ${({ theme }) => theme.color.gray2};

  [type='radio'] {
    display: none;

    &:checked + label span:nth-child(1) {
      background: ${({ theme }) => theme.color.primaryColor};
    }
  }

  label {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;

export default CheckButtons;
