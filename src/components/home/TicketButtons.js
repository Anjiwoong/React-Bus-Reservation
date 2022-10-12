import styled from 'styled-components';
import Button from '../UI/Button';

const TicketButtons = () => {
  return (
    <Wrapper>
      <div>
        <TicketButton>왕복</TicketButton>
        <TicketButton>편도</TicketButton>
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
  color: ${({ theme }) => theme.color.gray2};
  cursor: pointer;
`;

export default TicketButtons;
