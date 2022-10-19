import styled from 'styled-components';
import Button from '../UI/Button';
import { MdChangeCircle } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
// import { ticketActions } from '../../store/ticket-slice';
import { useCallback, useContext } from 'react';
import TerminalContext from '../../store/terminal-context';
// import useDidMountEffect from '../../hooks/use-didmount';

const TerminalButtons = props => {
  const startTerminal = useSelector(state => state.ticket.location.start.name);
  const arrivalTerminal = useSelector(
    state => state.ticket.location.arrival.name
  );

  const terminalCtx = useContext(TerminalContext);

  // const dispatch = useDispatch();

  const startHandler = () => {
    // dispatch(ticketActions.selectStartTerminal(false));
    terminalCtx.selectStartTerminal(true);
    props.onShow();
  };

  const arrivalHandler = () => {
    const isAllSelected =
      startTerminal !== '선택' &&
      terminalCtx.date.start &&
      terminalCtx.date.arrival;

    if (!isAllSelected) {
      alert(
        '필수선택 항목이 선택되지 않았습니다! 출/도착 날짜와 출발지를 확인해주세요.'
      );
      return;
    }

    // dispatch(ticketActions.selectStartTerminal(false));
    terminalCtx.selectStartTerminal(false);
    props.onShow();
  };

  return (
    <Wrapper>
      <div>
        <SelectButton onClick={startHandler}>
          <p>출발</p>
          <span>{startTerminal}</span>
        </SelectButton>
      </div>
      <span>
        <MdChangeCircle />
      </span>
      <div>
        <SelectButton onClick={arrivalHandler}>
          <p>도착</p>
          <span>{arrivalTerminal}</span>
        </SelectButton>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 65px 0;

  & > span {
    cursor: pointer;
  }

  div {
    width: 45%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  svg {
    font-size: 60px;
  }
`;

const SelectButton = styled(Button)`
  background: ${({ theme }) => theme.color.white};
  cursor: pointer;

  p {
    font-size: ${({ theme }) => theme.size.medium2};
    color: ${({ theme }) => theme.color.gray2};
    margin-bottom: 12px;
  }

  span {
    font-size: ${({ theme }) => theme.size.large};
    color: ${({ theme }) => theme.color.primaryFont};
  }
`;

export default TerminalButtons;
