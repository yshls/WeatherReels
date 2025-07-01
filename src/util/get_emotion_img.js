import Sunny from './../assets/Sunny.svg';
import Rainy from './../assets/Rainy.svg';
import Stormy from './../assets/Stormy.svg';
import Tornado from './../assets/Tornado.svg';
import Cloudy from './../assets/Cloudy.svg';

// 함수를 내보냄 -> export 키워드 사용
export function getEmotionImg(emotionId) {
  switch (emotionId) {
    case 1:
      return Sunny;
    case 2:
      return Rainy;
    case 3:
      return Stormy;
    case 4:
      return Tornado;
    case 5:
      return Cloudy;
    default:
      return null;
  }
}
