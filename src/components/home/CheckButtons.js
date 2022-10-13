import styled from 'styled-components';

const CheckButtons = () => {
  return (
    <Wrapper>
      <div>
        <input type="radio" id="normal" name="busType" defaultChecked />
        <label htmlFor="normal">
          <CheckIcon></CheckIcon>
          <span>일반</span>
        </label>
      </div>
      <div>
        <input type="radio" id="premium" name="busType" />
        <label htmlFor="premium">
          <CheckIcon></CheckIcon>
          <span>우등</span>
        </label>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 40px 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  font-size: ${({ theme }) => theme.size.small};
  color: ${({ theme }) => theme.color.gray2};

  [type='radio'] {
    display: none;

    &:checked + label span:nth-child(1) {
      background: ${({ theme }) => theme.color.primaryColor};
    }
  }

  label {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;

const CheckIcon = styled.span`
  display: block;
  width: 24px;
  height: 24px;
  background: ${({ theme }) => theme.color.gray3};
  border-radius: 50%;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 7px;
    right: 7px;
    width: 8px;
    height: 4px;
    transform: rotate(-45deg);
    border-style: solid;
    border-color: ${({ theme }) => theme.color.white};
    border-width: 0px 0px 3px 3px;
  }
`;

export default CheckButtons;
