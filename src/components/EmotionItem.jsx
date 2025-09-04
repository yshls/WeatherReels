import './EmotionItem.css';
import { getWeatherImg } from '../util/get_weather_img';
const EmotionItem = ({ emotionId, emotionName, isSelected }) => {
  return (
    <div
      className={`EmotionItem ${
        isSelected ? `EmotionItem_on_${emotionId}` : ''
      }`}
    >
      <img className="weather_img" src={getWeatherImg(emotionId)} />
      <div className="weather_name">{emotionName}</div>
    </div>
  );
};

export default EmotionItem;
