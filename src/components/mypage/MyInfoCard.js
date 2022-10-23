import React from 'react';
import styled from 'styled-components';
import RouteWrapper from './RouteWrapper';
import TimeWrapper from './TimeWrapper';

const MyInfoCard = ({ ticket, onRemove }) => {
  console.log(ticket);
  return (
    <Wrapper>
      <TimeWrapper
        date={ticket.date}
        time={ticket.time}
        premium={ticket.premium}
        id={ticket.id}
        onRemove={onRemove}
      />
      <RouteWrapper
        start={ticket.start}
        arrival={ticket.arrival}
        count={ticket.count}
        total={ticket.total}
      />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: ${({ theme }) => theme.color.white};
  width: 840px;
  margin: 0 auto;
  border-radius: 15px;
  margin-bottom: 20px;
`;

export default MyInfoCard;
