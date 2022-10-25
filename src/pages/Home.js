import { useState } from 'react';
import Card from '../components/UI/Card';
import Heading from '../components/UI/Heading';
import TicketButtons from '../components/home/TicketButtons';
import TerminalButtons from '../components/home/TerminalButtons';
import CheckButtons from '../components/home/CheckButtons';
import DateSelectors from '../components/home/DateSelectors';
import SearchModal from '../components/UI/SearchModal';
import LookupButton from '../components/home/LookupButton';
import ConfirmButton from '../components/home/ConfirmButton';

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => setShowModal(true);
  const closeModalHandler = () => setShowModal(false);

  return (
    <>
      <Heading>예매하기</Heading>
      {showModal && <SearchModal onClose={closeModalHandler} />}
      <Card>
        <TicketButtons />
        <DateSelectors />
        <TerminalButtons onShow={showModalHandler} />
        <CheckButtons />
      </Card>
      <LookupButton />
      <ConfirmButton />
    </>
  );
};

export default Home;
