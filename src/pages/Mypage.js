import React from 'react';
import Heading from '../components/UI/Heading';
import Layer from '../components/UI/Layer';
import MyInfoCard from '../components/mypage/MyInfoCard';

const Mypage = () => {
  return (
    <Layer>
      <Heading>예매 확인 및 취소</Heading>
      <MyInfoCard />
    </Layer>
  );
};

export default Mypage;
