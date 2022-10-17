import React from 'react';
import styled, { css } from 'styled-components';

const Layer = props => {
  return <Wrapper {...props}>{props.children}</Wrapper>;
};

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.bgColor};
  width: 100%;
  height: calc(100vh - 100px);

  ${props =>
    props.over &&
    css`
      height: calc(100vh + 100px);
    `}
`;

export default Layer;
