import React from 'react';
// 가변적인 데이터 보관 -> state
import { useState, useContext } from 'react';
import { DiaryStateContext } from '../App';
import Header from '../components/Header';
import Button from '../components/Button';
import DiaryList from '../components/DiaryList';

// pivotDate 기준으로 이번 달 1일 0시 0분 이후의 데이터만 필터링
const getMonthlyData = (pivotDate, data) => {
  const beginTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth(),
    1,
    0,
    0,
    0 // getTime으로 해서 숫자값으로 저장
  ).getTime();

  const endTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth() + 1,
    0,
    23,
    59,
    59
  ).getTime();
  return data.filter(
    // >= beginTime → 이번 달 시작 이후 , <= endTime → 이번 달 끝 이전를 &&로 묶어서 이번달에 속하는 데이터만 추린다.
    (item) => item.createdDate >= beginTime && item.createdDate <= endTime
  );
};

const Home = () => {
  // (목데이터) 데이터를 공급받을 수 있는 이유는 일기 관리 기능을 app컴포넌트에서 DiaryStateContext로 만들었기때문에 또한 app 컴포넌트안에 return문안에 하위로 넣어놨기때문이다.
  const data = useContext(DiaryStateContext);
  console.log(data);

  // 날짜 보관, setPivotDate는 상태를 "새로운 값"으로 교체해주는 역할
  const [pivotDate, setPivotDate] = useState(new Date());
  const monthlyData = getMonthlyData(pivotDate, data);
  console.log(monthlyData);
  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };

  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };

  return (
    <div>
      <Header
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
        leftChild={<Button onClick={onDecreaseMonth} text={'<'} />}
        rightChild={<Button onClick={onIncreaseMonth} text={'>'} />}
      />
      <DiaryList data={monthlyData} />
    </div>
  );
};

export default Home;
