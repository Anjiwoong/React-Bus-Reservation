import { useDispatch, useSelector } from 'react-redux';
import { ticketActions } from '../../store/ticket-slice';

import styled, { css } from 'styled-components';
import Button from '../UI/Button';

const TicketButtons = () => {
  const dispatch = useDispatch();
  const oneway = useSelector(state => state.ticket.oneway);

  const oneWayHandler = () => dispatch(ticketActions.changeWay(true));

  const roundTripHandler = () => dispatch(ticketActions.changeWay(false));

  return (
    <Wrapper>
      <div>
        <TicketButton toggle={oneway} onClick={oneWayHandler}>
          편도
        </TicketButton>
        <TicketButton toggle={!oneway} onClick={roundTripHandler}>
          왕복
        </TicketButton>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  div {
    margin: 0 auto;
    width: 140px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  border-bottom: 1px solid ${({ theme }) => theme.color.bgColor};
`;

const TicketButton = styled(Button)`
  background: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.size.text};
  font-weight: bold;
  color: ${props =>
    props.toggle ? props.theme.color.primaryColor : props.theme.color.gray2};
  cursor: pointer;
  position: relative;
  ${props =>
    props.toggle &&
    css`
      &::after {
        content: '';
        width: 80px;
        height: 3px;
        background: ${({ theme }) => theme.color.primaryColor};
        position: absolute;
        bottom: -70%;
        left: -50%;
        transform: translateX(3px);
      }
    `}
`;

export default TicketButtons;
