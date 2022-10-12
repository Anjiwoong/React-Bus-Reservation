import Card from '../components/UI/Card';
import Heading from '../components/UI/Heading';
import Layer from '../components/UI/Layer';
import TicketButtons from '../components/home/TicketButtons';
import TerminalButtons from '../components/home/TerminalButtons';
import CheckButtons from '../components/home/CheckButtons';
import DateSelectors from '../components/home/DateSelectors';

const Home = () => {
  return (
    <Layer>
      <Heading>예매하기</Heading>
      <Card>
        <TicketButtons />
        <DateSelectors />
        <TerminalButtons />
        <CheckButtons />
      </Card>
    </Layer>
  );
};

export default Home;
