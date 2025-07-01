import React from 'react';
import './Header.css';

// props로는 전달받은 값을 입력한다.
const Header = ({ title, leftChild, rightChild }) => {
  return (
    <div className="Header">
      <div className="header_left">{leftChild}</div>
      <div className="header_center">{title}</div>
      <div className="header_right">{rightChild}</div>
    </div>
  );
};

export default Header;
