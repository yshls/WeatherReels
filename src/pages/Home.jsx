import React from 'react';
/** useSearchParams: QueryString의 값을 불러옴 */
import { useSearchParams } from 'react-router-dom';

const Home = () => {
  const [params, setParams] = useSearchParams();
  console.log(params.get('value'));
  return <div>Home</div>;
};

export default Home;
