import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Input from './Input';
import TerminalItem from '../home/TerminalItem';
import { MdClose } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const terminals = [
  '서울경부',
  '센트럴시티',
  '동서울',
  '광주',
  '대전복합',
  '서울남부',
  '인천',
  '천안고속',
  '청주시외',
  '동대구',
  '성남종합',
  '수원터미널',
  '강릉시외',
  '경주시외',
  '고양종합',
  '군산',
  '춘천',
  '부산',
  '당진',
  '안산',
  '순천',
  '이천',
];

const Backdrop = props => {
  return <Dimmed onClick={props.onClose} />;
};

const ModalOverlay = props => {
  const [terminal, setTerminal] = useState(terminals);
  const direction = useSelector(state => state.ticket.location.startDirection);

  const searchTerminalHandler = e => {
    const regExp = new RegExp(e.target.value, 'i');

    const matchedTerminal = terminals.filter(terminal =>
      terminal.match(regExp)
    );

    setTerminal(matchedTerminal);
  };

  return (
    <Wrapper>
      <MdClose onClick={props.onClose} />
      <div>
        <SearchInput
          type="search"
          placeholder={`${direction ? '출발' : '도착'} 터미널을 검색하세요.`}
          onChange={searchTerminalHandler}
        />
      </div>
      <ul>
        {terminal.map((item, idx) => (
          <TerminalItem key={idx} terminal={item} onClose={props.onClose} />
        ))}
      </ul>
    </Wrapper>
  );
};

const SearchModal = props => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onClose={props.onClose} />,
        document.getElementById('overlay-root')
      )}
    </>
  );
};

const Dimmed = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`;

const Wrapper = styled.div`
  width: 70%;
  height: 500px;
  position: fixed;
  top: 30vh;
  left: 50%;
  transform: translateX(-50%);
  background: ${({ theme }) => theme.color.white};
  padding: 65px 30px 30px;
  border-radius: 15px;
  z-index: 100;
  text-align: center;

  svg {
    font-size: ${({ theme }) => theme.size.medium1};
    position: absolute;
    top: 20px;
    right: 20px;
  }

  ul {
    width: 90%;
    height: 320px;
    margin: 0 auto;
    overflow: scroll;
  }

  li {
    height: 70px;
    font-size: ${({ theme }) => theme.size.text};
    color: ${({ theme }) => theme.color.gray1};
    border-bottom: 1px solid ${({ theme }) => theme.color.gray3};
    line-height: 70px;
    cursor: pointer;

    &:hover {
      background: rgba(16, 190, 107, 0.1);
    }
  }
`;

const SearchInput = styled(Input)`
  width: 90%;
  border: 1px solid ${({ theme }) => theme.color.gray1};
  border-radius: 3px;
  height: 70px;
`;

export default SearchModal;
