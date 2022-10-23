import React from 'react';
import styled from 'styled-components';

const PriceInfo = props => {
  return (
    <PriceWrap>
      <Adult>
        성인 <span>{props.count}</span>명
      </Adult>
      <Price>{props.total.toLocaleString()}원</Price>
    </PriceWrap>
  );
};

const PriceWrap = styled.div`
  height: 105px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.color.bgColor};
`;

const Adult = styled.p`
  font-size: ${({ theme }) => theme.size.text};
  color: ${({ theme }) => theme.color.gray1};
`;

const Price = styled.p`
  font-size: ${({ theme }) => theme.size.medium1};
  color: ${({ theme }) => theme.color.primaryFont};
  font-weight: bold;
`;

export default PriceInfo;
