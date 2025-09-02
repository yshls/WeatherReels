import React from 'react';
import { getWeatherImg } from '../util/get_weather_img.js';
import './DiaryItem.css';
import Button from './Button.jsx';

const DiaryItem = () => {
  const getWeatherImgId = 5;

  return (
    <div className="DiaryItem">
      <div className={`img_section`}>
        <img src={getWeatherImg(5)} alt="날씨 아이콘" />
      </div>
      <div className="info_section">
        <div className={`created_date created_date_${getWeatherImgId}`}>
          {new Date().toLocaleDateString()}
        </div>
        <div className="content">
          일기 내용이 여기에 들어갑니다. 오늘은 날씨가 맑고 기분이 좋습니다.
        </div>
      </div>
      <div className="button_section">
        <Button text="수정하기" />
      </div>
    </div>
  );
};

export default DiaryItem;
