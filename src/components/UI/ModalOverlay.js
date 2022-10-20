import React, { useContext, useState } from 'react';
import { MdClose } from 'react-icons/md';
import styled from 'styled-components';
import SelectRegion from '../modal/SelectRegion';
import SearchTerminal from '../modal/SearchTerminal';
import DateContext from '../../store/date-context';

const ModalOverlay = props => {
  const [region, setRegion] = useState('서울특별시');
  const dateCtx = useContext(DateContext);

  const selectRegionHandler = region => setRegion(region);

  return (
    <Wrapper>
      {dateCtx.startTerminal && (
        <SelectRegion region={region} selectRegion={selectRegionHandler} />
      )}
      <SearchTerminal region={region} onClose={props.onClose} />
      <MdClose onClick={props.onClose} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 840px;
  height: 500px;
  position: fixed;
  top: 30vh;
  left: 50%;
  transform: translateX(-50%);
  background: ${({ theme }) => theme.color.white};
  padding: 63px 30px 37px;
  border-radius: 15px;
  z-index: 100;

  svg {
    font-size: ${({ theme }) => theme.size.medium1};
    position: absolute;
    top: 20px;
    right: 20px;
  }
`;

export default ModalOverlay;
