import React from 'react';
import styled from 'styled-components';
import RegionItem from './RegionItem';

const cityName = [
  '서울특별시',
  '세종특별시',
  '부산광역시',
  '대구광역시',
  '인천광역시',
  '광주광역시',
  '대전광역시',
  '울산광역시',
  '경기도',
  '강원도',
  '충청북도',
  '충청남도',
  '전라북도',
  '전라남도',
  '경상북도',
  '경상남도',
  '제주도',
];

const SelectRegion = props => {
  return (
    <LeftDiv>
      <h2>지역 선택</h2>
      <ul>
        {cityName.map(city => (
          <RegionItem
            selected={props.region === city}
            key={city}
            city={city}
            selectRegion={props.selectRegion}
          />
        ))}
      </ul>
    </LeftDiv>
  );
};

const LeftDiv = styled.div`
  width: 50%;
  border-right: 1px solid ${({ theme }) => theme.color.bgColor};

  ul {
    display: flex;
    flex-wrap: wrap;
    margin-top: 22px;
    gap: 6px;
  }
`;

export default SelectRegion;
