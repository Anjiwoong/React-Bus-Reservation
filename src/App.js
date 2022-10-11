import styled from 'styled-components';

const App = () => {
  return <H1>Tmoney</H1>;
};

const H1 = styled.h1`
  font-size: ${({ theme }) => theme.size.heading};
`;

export default App;
