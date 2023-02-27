import React from 'react';
import style from './PurcaseButton.module.css';

export default function PurcaseButton({ count }) {
  let styleDisabled = {
    backgroundColor: '#dee0e3',
    color: '#999999',
  };

  return (
    <>
      <button type="submit" className={style.button}>
        구매하기
      </button>
    </>
  );
}
