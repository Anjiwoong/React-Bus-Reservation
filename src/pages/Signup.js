import React from 'react';
import styled from 'styled-components';
import Button from '../components/UI/Button';
import Input from '../components/UI/Input';

const Signup = () => {
  return (
    <Wrapper>
      <Title>회원가입</Title>
      <Input type="email" placeholder="이메일" />
      <Input type="password" placeholder="비밀번호" />
      <SignupButton>회원가입</SignupButton>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  max-width: 600px;
  margin: 100px auto 0;
  text-align: center;
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.size.heading};
  margin-bottom: 30px;
`;

const SignupButton = styled(Button)`
  background: ${({ theme }) => theme.color.primaryColor};
  color: ${({ theme }) => theme.color.white};
  width: 100%;
  height: 100px;
  border-radius: 15px;
  font-size: ${({ theme }) => theme.size.medium1};
`;

export default Signup;
