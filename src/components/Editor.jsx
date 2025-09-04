import './Editor.css';
import EmotionItem from './EmotionItem';
import Button from './Button';

const emotionList = [
  { emotionId: 1, emotionName: '행복' },
  { emotionId: 2, emotionName: '슬픔' },
  { emotionId: 3, emotionName: '놀람' },
  { emotionId: 4, emotionName: '분노' },
  { emotionId: 5, emotionName: '우울' },
];

const Editor = () => {
  const emotionId = 1;
  return (
    <div className="Editor">
      <section className="date_section">
        <h4>오늘의 날짜</h4>
        <input type="date" />
      </section>
      <section className="emotion_section">
        <h4>마음의 날씨는 어떤가요?</h4>
        <div className="emotion_list_wrapper">
          {emotionList.map((item) => (
            <EmotionItem
              key={item.emotionId}
              isSelected={item.emotionId === emotionId}
              {...item}
            />
          ))}
        </div>
      </section>
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <textarea placeholder="오늘은 어땠나요?"></textarea>
      </section>
      <section className="button_section">
        <Button text={'취소하기'} />
        <Button text={'저장하기'} type={'POSITIVE'} />
      </section>
    </div>
  );
};

export default Editor;
