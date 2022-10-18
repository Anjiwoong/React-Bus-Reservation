import React, { useRef } from 'react';
import { BiErrorCircle } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/UI/Button';
import Input from '../components/UI/Input';
import useHttp from '../hooks/use-http';

const Signup = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const navigate = useNavigate();

  const { isLoading, error, sendRequest } = useHttp();

  const fetchUser = () => {
    alert('회원가입이 완료되었습니다.');
    navigate('/login');
  };

  const submitHandler = e => {
    e.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    if (!enteredEmail.includes('@')) {
      alert('이메일 형식으로 입력해주세요.');
      return;
    }

    if (enteredPassword.length < 6) {
      alert('비밀번호를 6자리 이상의 숫자,영문 조합으로 입력해주세요.');
      return;
    }

    sendRequest(
      {
        url: 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCNyFg3LGy2o1VHY2BbNXmrIfEGgEYjisk',
        method: 'POST',
        body: {
          email: emailInputRef.current.value,
          password: passwordInputRef.current.value,
          returnSecureToken: true,
        },
        headers: { 'Content-Type': 'application/json' },
      },
      fetchUser,
      '이미 존재하는 정보입니다.'
    );
  };

  return (
    <Wrapper onSubmit={submitHandler}>
      <Title>회원가입</Title>
      <Input type="email" placeholder="이메일" ref={emailInputRef} />
      <Input type="password" placeholder="비밀번호" ref={passwordInputRef} />
      {error && (
        <ErrorMessage>
          <BiErrorCircle />
          {error}
        </ErrorMessage>
      )}
      {!isLoading && <SignupButton>회원가입</SignupButton>}
      {isLoading && <LoadingButton disabled>Loading...</LoadingButton>}
    </Wrapper>
  );
};

const Wrapper = styled.form`
  max-width: 600px;
  margin: 100px auto 0;
  text-align: center;
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

const LoadingButton = styled(SignupButton)`
  background: ${({ theme }) => theme.color.primaryFont};
`;

export default Signup;
