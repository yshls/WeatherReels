import './App.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import NotFound from './pages/NotFound';

import { getEmotionImg } from './util/get_emotion_img';
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
      <div>
        <img src={getEmotionImg(1)} alt="기분 좋고 밝은 상태" />
        <img src={getEmotionImg(2)} alt="슬프고 감성적인 상태 감성적인 상태" />
        <img src={getEmotionImg(3)} alt="화나고 격한 감정" />
        <img src={getEmotionImg(4)} alt="혼란스럽고 불안한 상태" />
        <img src={getEmotionImg(5)} alt="	무기력하고 지친 상태" />
      </div>

      <div>
        {/* 링크 컴포넌트는 *클라이언트 사이드 렌더링* 방식으로 페이지 이동을 필요한 컴포넌트만 교체 */}
        <Link to={'/'}>Home</Link>
        <Link to={'/new'}>New</Link>
        <Link to={'/diary/:id'}>diary</Link>
        시킴으로
      </div>

      <button onClick={onClickButton}>New페이지로 이동</button>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/new" element={<New />}></Route>
        <Route path="/diary" element={<Diary />}></Route>
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
