import React, { useEffect, useState } from 'react';
import Heading from '../components/UI/Heading';
import Layer from '../components/UI/Layer';
import MyInfoCard from '../components/mypage/MyInfoCard';
import useHttp from '../hooks/use-http';

const Mypage = () => {
  const [tickets, setTickets] = useState([]);

  const { isLoading, sendRequest, error } = useHttp();

  const token = localStorage.getItem('token');

  useEffect(() => {
    const addTicketHandler = ticketObj => {
      const loadedTicket = [];

      for (const ticketKey in ticketObj) {
        console.log(ticketObj[ticketKey].ticket);
        loadedTicket.push({
          id: token,
          // date: ticketObj[ticketKey].ticket.date,
          // time: ticketObj[ticketKey].ticket.time,
          // premium: ticketObj[ticketKey].ticket.premium,
          // start: ticketObj[ticketKey].ticket.start,
          // arrival: ticketObj[ticketKey].ticket.arrival,
          // charge: ticketObj[ticketKey].ticket.charge,
          // person: ticketObj[ticketKey].ticket.person,
          // uniqKey: ticketObj[ticketKey].ticket.uniqKey,
          tickets: ticketObj[ticketKey].ticket,
        });
      }

      const filteredTicket = loadedTicket.filter(ticket => ticket.id === token);

      setTickets(filteredTicket);
    };

    sendRequest(
      {
        url: `https://tmoney-bus-default-rtdb.firebaseio.com/ticket.json`,
      },
      addTicketHandler
    );
  }, [sendRequest, token]);

  console.log(tickets);

  return (
    <Layer>
      <Heading>예매 확인 및 취소</Heading>
      <MyInfoCard />
    </Layer>
  );
};

export default Mypage;
