import styled from 'styled-components';
import Button from '../UI/Button';
import { MdChangeCircle } from 'react-icons/md';

const TerminalButtons = () => {
  return (
    <Wrapper>
      <div>
        <SelectButton>
          <p>출발</p>
          <span>선택</span>
        </SelectButton>
      </div>
      <MdChangeCircle />
      <div>
        <SelectButton>
          <p>도착</p>
          <span>선택</span>
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

  div {
    width: 45%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  svg {
    font-size: ${({ theme }) => theme.size.large};
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
