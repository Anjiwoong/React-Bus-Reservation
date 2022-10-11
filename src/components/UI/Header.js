import React from 'react';
import styled from 'styled-components';
import { FaBus } from 'react-icons/fa';

const Header = () => {
  return (
    <Wrapper>
      <Content>
        <Title>
          <FaBus />
          <span>시외버스 예약</span>
        </Title>
        <Button>로그아웃</Button>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  height: 100px;
  width: 100%;
  background: ${({ theme }) => theme.color.primaryColor};
`;

const Content = styled.div`
  width: 840px;
  margin: 0 auto;
  position: relative;
`;

const Title = styled.div`
  margin: 0 auto;
  line-height: 100px;
  width: 180px;
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.size.text};
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    font-size: ${({ theme }) => theme.size.medium1};
  }
`;

const Button = styled.button`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  color: ${({ theme }) => theme.color.primaryColor};
  font-size: ${({ theme }) => theme.size.small};
  padding: 12px 22px;
  border-radius: 25px;
  font-weight: bold;
  cursor: pointer;
`;

export default Header;
