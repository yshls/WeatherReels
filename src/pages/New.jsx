import Header from '../components/Header';
import Button from '../components/Button';
import Editor from '../components/Editor';

const New = () => {
  return (
    <div>
      <Header title={'오늘의 일기 쓰기'} leftChild={<Button text={'<'} />} />
      <Editor />
    </div>
  );
};

export default New;
