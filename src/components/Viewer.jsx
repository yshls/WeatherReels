import './Viewer.css';
import { getWeatherImg } from '../util/get_weather_img';
import { emotionList } from '../util/constants';

const Viewer = ({ emotionId, content }) => {
  const emotionItem = emotionList.find((item) => item.emotionId === emotionId);
  return (
    <div className="Viewer">
      <section className="img_section">
        <h4>오늘의 감정</h4>
        <div className={`emotion_img_wrapper emotion_img_wrapper_${emotionId}`}>
          <img src={getWeatherImg(emotionId)} />
          <div className="emotion_descript">{emotionItem.emotionName}</div>
        </div>
      </section>
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <div className="content_wrapper">
          <p>{content}</p>
        </div>
      </section>
    </div>
  );
};

export default Viewer;
