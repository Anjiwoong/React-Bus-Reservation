import React, { useCallback, useContext, useEffect, useState } from 'react';
import Heading from '../components/UI/Heading';
import Layer from '../components/UI/Layer';
import MyInfoCard from '../components/mypage/MyInfoCard';
import { firestore } from '../firebase/firebaseInit';
import AuthContext from '../store/auth-context';

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

  return (
    <Layer over>
      <Heading>예매 확인 및 취소</Heading>
      {tickets.map(ticket => (
        <MyInfoCard key={ticket.id} ticket={ticket} onRemove={removeHandler} />
      ))}
    </Layer>
  );
};

export default Mypage;
