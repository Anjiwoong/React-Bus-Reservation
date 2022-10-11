import React from 'react';
import styled from 'styled-components';

const Card = props => {
  return <Wrapper>{props.children}</Wrapper>;
};

const Wrapper = styled.div`
  background: ${({ theme }) => theme.color.white};
  border-radius: 15px;
  max-width: 840px;
  margin: 0 auto;
  padding: 23px;
`;

export default Card;
