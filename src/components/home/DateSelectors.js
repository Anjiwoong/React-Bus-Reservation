import styled from 'styled-components';

const DateSelectors = () => {
  return (
    <Wrapper>
      <DateInput
        type='date'
        data-placeholder='가는날'
        required
        aria-required='true'
      />
      <DateInput
        type='date'
        data-placeholder='오는날'
        required
        aria-required='true'
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 150px;
  padding: 33px 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.bgColor};
`;

const DateInput = styled.input`
  border: none;
  width: 250px;
  font-size: ${({ theme }) => theme.size.text};
  color: ${({ theme }) => theme.color.gray1};

  &::before {
    content: attr(data-placeholder);
    width: 100%;
  }

  &:focus {
    outline: none;
  }

  &:valid::before {
    display: none;
  }
`;

export default DateSelectors;
