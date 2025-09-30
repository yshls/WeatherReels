import { useContext, useState, useEffect } from 'react';
import { DiaryStateContext } from '../App';
import { useNavigate } from 'react-router-dom';

const useDiary = (id) => {
  const data = useContext(DiaryStateContext);
  const [currentDiaryItem, setCurrentDiaryItem] = useState();
  const nav = useNavigate();

  useEffect(() => {
    const currentDiary = data.find((item) => String(item.id) === String(id));

    if (!currentDiary) {
      window.alert('존재하지 않는 일기입니다.');
      nav('/', { replace: true });
    }

    setCurrentDiaryItem(currentDiary);
  }, [id, data, nav]);

  return currentDiaryItem;
};

export default useDiary;
