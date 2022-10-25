import React, { useCallback, useContext, useEffect, useState } from 'react';
import Heading from '../components/UI/Heading';
import MyInfoCard from '../components/mypage/MyInfoCard';
import { firestore } from '../firebase/firebaseInit';
import AuthContext from '../store/auth-context';
import styled from 'styled-components';

const Mypage = () => {
  const [tickets, setTickets] = useState([]);

  const { token } = useContext(AuthContext);
  const removeHandler = id => {
    const loadedTickets = [...tickets].filter(ticket => ticket.id !== id);

    setTickets(loadedTickets);
    firestore.collection(token).doc(id).delete();
  };

  const getTickets = useCallback(() => {
    firestore
      .collection(token)
      .get()
      .then(ticket => {
        ticket.forEach(item => {
          setTickets(prev => [...prev, item.data()]);
        });
      });
  }, [token]);

  useEffect(() => {
    getTickets();
  }, [getTickets]);

  console.log(tickets);

  return (
    <>
      <Heading>예매 확인 및 취소</Heading>
      {tickets.map(ticket => (
        <MyInfoCard key={ticket.id} ticket={ticket} onRemove={removeHandler} />
      ))}
      {tickets.length === 0 && (
        <EmptyMessage>예약 내역이 없습니다.</EmptyMessage>
      )}
    </>
  );
};

const EmptyMessage = styled.p`
  width: 400px;
  margin: 200px auto 0;
  font-size: ${({ theme }) => theme.size.large};
  font-weight: bold;
`;

export default Mypage;
