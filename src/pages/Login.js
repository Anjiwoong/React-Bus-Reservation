import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/UI/Button';
import Input from '../components/UI/Input';

const Login = () => {
  return (
    <Wrapper>
      <Title>로그인</Title>
      <Input type="email" placeholder="이메일" />
      <Input type="password" placeholder="비밀번호" />
      <Button>로그인</Button>
      <SignupLink to="/signup">회원가입</SignupLink>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 600px;
  margin: 100px auto 0;
  text-align: center;
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.size.heading};
  margin-bottom: 30px;
`;

const SignupLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: ${({ theme }) => theme.color.gray2};
  font-size: ${({ theme }) => theme.size.text};
  margin-top: 30px;

  &:hover {
    color: ${({ theme }) => theme.color.primaryColor};
  }
`;

export default Login;
