import React, { useContext, useRef } from 'react';
import { BiErrorCircle } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/UI/Button';
import Input from '../components/UI/Input';
import useHttp from '../hooks/use-http';
import AuthContext from '../store/auth-context';

const Login = () => {
  const authCtx = useContext(AuthContext);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const navigate = useNavigate();

  const { isLoading, error, sendRequest } = useHttp();

  const fetchUser = data => {
    authCtx.login(data.idToken);
    navigate('/');
  };

  const submitHandler = e => {
    e.preventDefault();

    sendRequest(
      {
        url: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCNyFg3LGy2o1VHY2BbNXmrIfEGgEYjisk',
        method: 'POST',
        body: {
          email: emailInputRef.current.value,
          password: passwordInputRef.current.value,
          returnSecureToken: true,
        },
        headers: { 'Content-Type': 'application/json' },
      },
      fetchUser,
      '아이디 또는 비밀번호를 확인해주세요.'
    );
  };

  return (
    <Wrapper onSubmit={submitHandler}>
      <Title>로그인</Title>
      <Input type="email" placeholder="이메일" ref={emailInputRef} />
      <Input type="password" placeholder="비밀번호" ref={passwordInputRef} />
      {error && (
        <ErrorMessage>
          <BiErrorCircle />
          {error}
        </ErrorMessage>
      )}
      {!isLoading && <LoginButton>로그인</LoginButton>}
      {isLoading && <LoadingButton>Loading...</LoadingButton>}
      <SignupLink to="/signup">회원가입</SignupLink>
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

const ErrorMessage = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  color: red;
  margin-bottom: 20px;

  svg {
    font-size: ${({ theme }) => theme.size.small};
    margin: 0 10px;
  }
`;

const LoginButton = styled(Button)`
  background: ${({ theme }) => theme.color.primaryColor};
  color: ${({ theme }) => theme.color.white};
  width: 100%;
  height: 100px;
  border-radius: 15px;
  font-size: ${({ theme }) => theme.size.medium1};
`;

const LoadingButton = styled(LoginButton)`
  background: ${({ theme }) => theme.color.primaryFont};
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
