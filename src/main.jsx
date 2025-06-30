import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
// 리액트 라우터 돔을 불러옴
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  // BrowserRouter: 브라우저의 현재 주소를 저장하고 감지하는 역할을 함 => 리액트 앱의 모든 컴포넌트들이 현재 브라우저의 주소를 불러와서 쓸 수 있다.
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
