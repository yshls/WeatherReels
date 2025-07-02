import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useReducer, useRef, createContext } from 'react';
import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import NotFound from './pages/NotFound';

const mockData = [
  { id: 1, createDate: new Date(), emotionId: 1, content: '1번 일기 내용' },
  { id: 2, createDate: new Date(), emotionId: 2, content: '3번 일기 내용' },
];

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return [action.date, ...state];
    case 'UPDATE':
      return state.map((item) =>
        item.id === action.date.id ? action.date : item
      );
    case 'DELETE':
      return state.filter((item) => String(item.id) !== String(action.id));
    default:
      return state;
  }
}

const DiaryStateContext = createContext();
const DiaryDispatchContext = createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3); // id를 관리하기 위한 ref

  // 새로운 일기 추가
  const onCreate = (createDate, emotionId, content) => {
    dispatch({
      type: 'CREATE',
      date: {
        id: idRef.current++,
        createDate,
        emotionId,
        content,
      },
    });
  };

  // 기존 일기 수정
  const onUpdate = (id, createDate, emotionId, content) => {
    dispatch({
      type: 'UPDATE',
      // 수정에 필요한 매게변수를 적는다.
      date: {
        id,
        createDate,
        emotionId,
        content,
      },
    });
  };

  // 기존 일기 삭제
  const onDelete = (id) => {
    dispatch({
      type: 'DELETE',
      id,
    });
  };

  return (
    <>
      <DiaryStatecontext.Provider value={data}>
        {/* 상태 변화 함수를 공급받을 수 있게 되었다. */}
        <DiaryDispatchcontext.Provider value={(onCreate, onUpdate, onDelete)}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </DiaryDispatchcontext.Provider>
      </DiaryStatecontext.Provider>
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
