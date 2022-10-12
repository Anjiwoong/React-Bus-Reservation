import React from 'react';
import styled from 'styled-components';

const Layer = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
};

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.bgColor};
  width: 100%;
  height: calc(100vh - 100px);
`;

export default Layer;
