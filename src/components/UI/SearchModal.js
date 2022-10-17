import ReactDOM from 'react-dom';
import styled from 'styled-components';
import ModalOverlay from './ModalOverlay';

const Backdrop = props => {
  return <Dimmed onClick={props.onClose} />;
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

export default SearchModal;
