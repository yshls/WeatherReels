import './App.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import NotFound from './pages/NotFound';

import Button from './components/Button';

import { getWeatherImg } from './util/get_weather_img';
import Header from './components/Header';
// 1: "/": 모든 일기를 조회하는 Home 페이지
// 2: "/new": 새로운 일기를 작성하는 new페이지
// 3: "/diary": 일기를 상세히 조회하는 Diary 페이지

function App() {
  const nav = useNavigate();

  const onClickButton = () => {
    nav('/new');
  };

  return (
    <>
      <Header
        title={'Header'}
        leftChild={<Button text={'Left'} />}
        rightChild={<Button text={'Right'} />}
      />
      {/* 버튼을 렌더링하다. */}
      <Button
        text={'123'}
        // type={'DEFAULT'} <- 생략 가능
        onClick={console.log('123번 버튼 클릭')}
      />

      <Button
        text={'123'}
        type={'POSITIVE'}
        onClick={console.log('123번 버튼 클릭')}
      />

      <Button
        text={'123'}
        type={'NEGATIVE'}
        onClick={console.log('123번 버튼 클릭')}
      />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/new" element={<New />}></Route>
        <Route path="/diary/:id" element={<Diary />}></Route>
        <Route path="/edit/:id" element={<Edit />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;

/**
주의 사항
- Routes 컴포넌트 안에는 Route파일만 들어갈 수 있다. 
- Routes 밖에 배치된 요소들은 페이지 라우팅과 관련없이, 모든 페이지에 다 동일하게 렌더링된다. => 무슨말임?
ex)  return (
    <>
      Hello
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/" element={<New />}></Route>
        <Route path="/" element={<Diary />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
  이렇게 작성할 경우 어떤 페이지를 들어가도 Hello 작성되고 Home/New 등등 페이지가 렌더링된다. 
  
  한줄 정리: Routes 컴포넌트 외부에 배치하는 것은 적절하지 않다.
*/
