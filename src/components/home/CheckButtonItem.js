import React from 'react';
import styled from 'styled-components';

const CheckButtonItem = props => {
  return (
    <div>
      <input
        type="radio"
        id="normal"
        name="bus-type"
        checked={props.class === '일반' ? !props.premium : props.premium}
        readOnly
      />
      <label htmlFor="normal" onClick={props.changeClass}>
        <CheckIcon></CheckIcon>
        <span>{props.class}</span>
      </label>
    </div>
  );
};

const CheckIcon = styled.span`
  display: block;
  width: 24px;
  height: 24px;
  background: ${({ theme }) => theme.color.gray3};
  border-radius: 50%;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 7px;
    right: 7px;
    width: 8px;
    height: 4px;
    transform: rotate(-45deg);
    border-style: solid;
    border-color: ${({ theme }) => theme.color.white};
    border-width: 0px 0px 3px 3px;
  }
`;

export default CheckButtonItem;
