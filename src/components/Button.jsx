import React from 'react';
import './Buttton.css';

// 버튼이 부모props에 받는거에 따라 다르게 동작하게 설정할 것
const Button = ({ text, type, onClick }) => {
  return (
    <div>
      <button onClick={onClick} className={`Button Button_${type}`}>
        {text}
      </button>
    </div>
  );
};

export default Button;
