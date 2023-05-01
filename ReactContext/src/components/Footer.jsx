import React from 'react';
import './Footer.css';
import react from '../assets/react.svg'

export const Footer = () => {
  return (
    <footer className='footer'>
      <h5>
        React &nbsp;<img src={react} alt="react logo" className='footer-img' />&nbsp;
        <span>
          <a href='https://www.github.com/OcroDev'>@OcroDev</a>
        </span>
      </h5>
      <h6>Shopping Cart usando useContext & useReducer</h6>
    </footer>
  );
};
