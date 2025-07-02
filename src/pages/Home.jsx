import React from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import DiaryList from '../components/DiaryList';
import { useState } from 'react';
const Home = () => {
  const [pivotDate, setPivotDate] = useState(new Date());
  return (
    <div>
      <Header
        title={'2025년 7월'}
        leftChild={<Button text={'<'} />}
        rightChild={<Button text={'>'} />}
      />
      <DiaryList />
    </div>
  );
};

export default Home;
