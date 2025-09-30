import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Button from '../components/Button';
import Viewer from '../components/Viewer';
import useDiary from '../hooks/useDiary';
import { getStringedDate } from '../util/getStringedDate';

const Diary = () => {
  const params = useParams();
  const nav = useNavigate();

  const currentDiaryItem = useDiary(params.id);

  if (!currentDiaryItem) {
    return <div>일기를 불러오고 있습니다...</div>;
  }

  const { createdDate, emotionId, content } = currentDiaryItem;
  const title = `${getStringedDate(new Date(createdDate))} 기록`;

  return (
    <div>
      <Header
        title={title}
        leftChild={<Button text={'< 뒤로 가기'} onClick={() => nav(-1)} />}
        rightChild={
          <Button text={'수정하기'} onClick={() => nav(`/edit/${params.id}`)} />
        }
      />
      <Viewer emotionId={emotionId} content={content} />
    </div>
  );
};

export default Diary;
