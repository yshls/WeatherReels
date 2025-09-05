import './Editor.css';
import EmotionItem from './EmotionItem';
import Button from './Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const emotionList = [
  { emotionId: 1, emotionName: '행복' },
  { emotionId: 2, emotionName: '슬픔' },
  { emotionId: 3, emotionName: '놀람' },
  { emotionId: 4, emotionName: '분노' },
  { emotionId: 5, emotionName: '우울' },
];

// YYYY-MM-DD 형식으로 날짜를 변환하는 헬퍼 함수
const getStringedDate = (targetDate) => {
  const d = targetDate instanceof Date ? targetDate : new Date(targetDate);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const date = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${date}`;
};

const Editor = ({ onSubmit }) => {
  const nav = useNavigate();
  const [input, setInput] = useState({
    createdDate: new Date(), // 내부 상태는 Date 객체로 유지
    emotionId: 3, // 기본 감정
    content: '',
  });

  const onChangeInput = (e) => {
    console.log(e.target.name); // 어떤 요소에 입력이 들어온건지
    console.log(e.target.value); // 입력된 값이 무엇인지?

    const name = e.target.name;
    let value = e.target.value;

    if (name === 'createdDate') {
      value = new Date(value); // 문자열 -> Date 변환
    }

    setInput((prev) => ({
      ...prev,
      [name]: value, // 변환된 value 사용!
    }));
  };

  const onSelectEmotion = (emotionId) => {
    setInput((prev) => ({
      ...prev,
      emotionId: emotionId,
    }));
  };

  const onClickSubmitButton = () => {
    onSubmit(input);
  };

  return (
    <div className="Editor">
      <section className="date_section">
        <h4>오늘의 날짜</h4>
        <input
          name="createdDate"
          type="date"
          value={getStringedDate(input.createdDate)}
          onChange={onChangeInput}
        />
      </section>

      <section className="emotion_section">
        <h4>마음의 날씨는 어떤가요?</h4>
        <div className="emotion_list_wrapper">
          {emotionList.map((item) => (
            <EmotionItem
              key={item.emotionId}
              onClick={() => onSelectEmotion(item.emotionId)}
              isSelected={item.emotionId === input.emotionId}
              {...item}
            />
          ))}
        </div>
      </section>

      <section className="content_section">
        <h4>오늘의 일기</h4>
        <textarea
          name="content"
          value={input.content}
          onChange={onChangeInput}
          placeholder="오늘은 어땠나요?"
        ></textarea>
      </section>

      <section className="button_section">
        <Button onClick={() => nav(-1)} text={'취소하기'} />
        <Button
          text={'저장하기'}
          onClick={onClickSubmitButton}
          type={'POSITIVE'}
        />
      </section>
    </div>
  );
};

export default Editor;
