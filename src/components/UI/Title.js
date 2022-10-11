import React from 'react';
import styled from 'styled-components';

const Title = props => {
  return <Wrapper>{props.children}</Wrapper>;
};

const Wrapper = styled.h2`
  width: 840px;
  margin: 45px auto 30px;
  font-weight: bold;
  font-size: ${({ theme }) => theme.size.text};
  color: ${({ theme }) => theme.color.black};
`;

export default Title;
