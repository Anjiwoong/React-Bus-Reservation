import React from 'react';
import styled, { css } from 'styled-components';

const RegionItem = ({ selectRegion, selected, city }) => {
  return (
    <ListItem onClick={selectRegion.bind(null, city)} selected={selected}>
      {city}
    </ListItem>
  );
};

const ListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.color.gray1};
  width: 117px;
  height: 52px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.color.gray1};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.color.bgColor};
  }

  ${props =>
    props.selected &&
    css`
      background: ${({ theme }) => theme.color.primaryColor};
      color: ${({ theme }) => theme.color.white};

      &:hover {
        background: ${({ theme }) => theme.color.primaryColor};
      }
    `}
`;

export default RegionItem;
