import React from 'react';
import styled, { css } from 'styled-components';
import { VscArrowBoth } from 'react-icons/vsc';
import { useSelector } from 'react-redux';
import Button from '../../UI/Button';

const RoundTripPayment = props => {
  const premium = useSelector(state => state.ticket.premium);
  const selectStartSeatArr = useSelector(
    state => state.ticket.seat.start.selected
  );

  const arrivalRemainSeat = useSelector(
    state => state.ticket.seat.arrival.remain
  );

  const selectArrivalSeatArr = useSelector(
    state => state.ticket.seat.arrival.selected
  );

  const startTerminal = useSelector(state => state.ticket.terminal.start.name);
  const arrivalTerminal = useSelector(
    state => state.ticket.terminal.arrival.name
  );

  const charge = useSelector(state => state.ticket.charge);

  const PREMIUM_CHARGE = 3000;

  const startPayment = !premium
    ? charge * selectStartSeatArr.length
    : (charge + PREMIUM_CHARGE) * selectStartSeatArr.length;
  const arrivalPayment = !premium
    ? charge * selectArrivalSeatArr.length
    : (charge + PREMIUM_CHARGE) * selectArrivalSeatArr.length;
  const totalPayment = startPayment + arrivalPayment;

  return (
    <Wrapper>
      <PaymentDiv>
        <LeftDiv>
          <p>
            <span>
              {arrivalRemainSeat === null ? startTerminal : arrivalTerminal}
            </span>
            <VscArrowBoth />
            <span>
              {arrivalRemainSeat === null ? arrivalTerminal : startTerminal}
            </span>
          </p>
          <p>
            {startPayment}원 + {arrivalPayment}원
          </p>
        </LeftDiv>
        <RightDiv>
          <p>
            <span>총 결제금액 </span>
            {totalPayment}원
          </p>
        </RightDiv>
      </PaymentDiv>
      <ButtonWrapper>
        <SelectButton
          disabled={!props.isActive}
          active={props.isActive}
          onClick={props.confirmHandler}
        >
          선택완료
        </SelectButton>
      </ButtonWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 540px;
  margin: 0 auto;
`;

const PaymentDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-top: 20px;
`;

const LeftDiv = styled.div`
  p {
    display: flex;
    align-items: center;
    gap: 3px;
    font-size: ${({ theme }) => theme.size.small};
    color: ${({ theme }) => theme.color.gray1};

    &:nth-child(2) {
      margin-top: 8px;
    }
  }
`;

const RightDiv = styled.div`
  p {
    font-size: ${({ theme }) => theme.size.medium2};
    font-weight: bold;

    span {
      font-size: ${({ theme }) => theme.size.small};
      font-weight: 400;
      color: ${({ theme }) => theme.color.black};
      margin-right: 8px;
    }
  }
`;

const ButtonWrapper = styled.div`
  width: 276px;
  margin-top: 20px;
  margin-left: auto;
`;

const SelectButton = styled(Button)`
  color: ${({ theme }) => theme.color.white};
  background: ${({ theme }) => theme.color.gray1};
  width: 100%;
  height: 60px;
  border-radius: 15px;
  font-size: ${({ theme }) => theme.size.small};

  ${props =>
    props.active &&
    css`
      background: ${({ theme }) => theme.color.primaryColor};
    `}
`;

export default RoundTripPayment;
