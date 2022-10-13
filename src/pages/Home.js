import Card from '../components/UI/Card';
import Heading from '../components/UI/Heading';
import Layer from '../components/UI/Layer';
import Button from '../components/UI/Button';
import TicketButtons from '../components/home/TicketButtons';
import TerminalButtons from '../components/home/TerminalButtons';
import CheckButtons from '../components/home/CheckButtons';
import DateSelectors from '../components/home/DateSelectors';
import styled from 'styled-components';
import { BiChevronRight } from 'react-icons/bi';

const Home = () => {
  return (
    <>
      <Layer>
        <Heading>예매하기</Heading>
        {/* <SearchModal /> */}
        <Card>
          <TicketButtons />
          <DateSelectors />
          <TerminalButtons />
          <CheckButtons />
        </Card>
        <LookupButton>
          <span>배차 조회하기</span>
          <BiChevronRight />
        </LookupButton>
        <ConfirmButton>
          <span>예매 확인 및 취소</span>
          <BiChevronRight />
        </ConfirmButton>
      </Layer>
    </>
  );
};

const LookupButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 840px;
  height: 80px;
  margin: 0 auto;
  margin-top: 30px;
  border-radius: 15px;
  background: ${({ theme }) => theme.color.gray2};
  font-size: ${({ theme }) => theme.size.text};
  color: ${({ theme }) => theme.color.white};

  svg {
    font-size: ${({ theme }) => theme.size.medium1};
  }
`;

const ConfirmButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 840px;
  height: 80px;
  margin: 0 auto;
  margin-top: 25px;
  border-radius: 15px;
  background: ${({ theme }) => theme.color.primaryColor};
  font-size: ${({ theme }) => theme.size.text};
  color: ${({ theme }) => theme.color.white};

  svg {
    font-size: ${({ theme }) => theme.size.medium1};
  }
`;

export default Home;
