import React from 'react';
import styled from 'styled-components';
import Button from '../UI/Button';

const TimeWrapper = props => {
  const deleteHandler = () => {
    props.onRemove(props.id);
  };

  return (
    <Wrapper>
      <div>
        <span>{props.date}</span>
        <span>{props.time}</span>
        <span>{props.premium ? '우등' : '일반'}</span>
      </div>
      <CancelButton onClick={deleteHandler}>예매취소</CancelButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: ${({ theme }) => theme.color.primaryColor};
  width: 100%;
  height: 70px;
  margin: 0 auto;
  border-radius: 15px 15px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    gap: 20px;
    color: ${({ theme }) => theme.color.white};
    font-size: ${({ theme }) => theme.size.text};
    font-weight: bold;
    margin-left: 30px;
  }
`;

const CancelButton = styled(Button)`
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.size.small};
  margin-right: 30px;
  border: none;
  background: ${({ theme }) => theme.color.primaryColor};
`;

export default TimeWrapper;
