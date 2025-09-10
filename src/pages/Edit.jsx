// useParams 훅은 현재 브라우저에 명시한 URL 파라미터의 값을 가져오는 커스텀 훅
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Button from '../components/Button';
import Editor from '../components/Editor';
import { useContext, useState, useEffect } from 'react';
import { DiaryDispatchContext, DiaryStateContext } from '../App';

const Edit = () => {
  const params = useParams();
  const nav = useNavigate();
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);
  const data = useContext(DiaryStateContext);

  const [currentDiaryItem, setCurrentDiaryItem] = useState();

  useEffect(() => {
    const item = data.find((it) => String(it.id) === String(params.id));
    if (!item) {
      window.alert('존재하지 않는 일기입니다.');
      nav('/', { replace: true });
      return;
    }
    setCurrentDiaryItem(item);
  }, [params.id, data, nav]);

  const onClickDelete = () => {
    // window.confirm: 내장 객체를 활용하는 함수 <- 팝업창 나오게 한다.
    if (window.confirm('일기를 정말 삭제할까요? 다시 복구되지 않아요!')) {
      onDelete(Number(params.id));
      nav('/', { replace: true });
    }
  };

  const onSubmit = (input) => {
    if (window.confirm('일기를 정말 수정할까요?')) {
      onUpdate(
        Number(params.id),
        input.createdDate.getTime(),
        input.emotionId,
        input.content
      );
      nav('/', { replace: true });
    }
  };

  return (
    <div>
      <Header
        title={'일기 수정하기'}
        leftChild={<Button onClick={() => nav(-1)} text={'< 뒤로 가기'} />}
        rightChild={
          <Button onClick={onClickDelete} text={'삭제하기'} type={'NEGATIVE'} />
        }
      />
      {currentDiaryItem && (
        <Editor initData={currentDiaryItem} onSubmit={onSubmit} />
      )}
    </div>
  );
};

export default Edit;
