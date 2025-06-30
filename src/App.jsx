import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import NotFound from './pages/NotFound';

// 1: "/": 모든 일기를 조회하는 Home 페이지
// 2: "/new": 새로운 일기를 작성하는 new페이지
// 3: "/diary": 일기를 상세히 조회하는 Diary 페이지

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/" element={<New />}></Route>
      <Route path="/" element={<Diary />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default App;
