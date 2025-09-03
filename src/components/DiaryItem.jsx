import { useNavigate } from 'react-router-dom';
import { getWeatherImg } from '../util/get_weather_img.js';
import './DiaryItem.css';
import Button from './Button.jsx';

const DiaryItem = ({ id, emotionId, createdDate, content }) => {
  const nav = useNavigate();

  return (
    <div className="DiaryItem">
      <div onClick={() => nav(`/diary/${id}`)} className={`img_section`}>
        <img src={getWeatherImg(emotionId)} alt="날씨 아이콘" />
      </div>
      <div onClick={() => nav(`/diary/${id}`)} className="info_section">
        <div className={`created_date created_date_${emotionId}`}>
          {new Date(createdDate).toLocaleDateString()}
        </div>
        <div className="content">{content}</div>
      </div>
      <div className="button_section">
        <Button onClick={() => nav(`/edit/${id}`)} text="수정하기" />
      </div>
    </div>
  );
};

export default DiaryItem;
