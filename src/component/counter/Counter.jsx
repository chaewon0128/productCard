import React, { useState } from 'react';
import style from './Counter.module.css';

export default function Counter({ count, setCount }) {
  const handleMinus = () => {
    if (count <= 0) {
      return 0;
    } else setCount((prev) => prev - 1);
  };
  const handlePlus = () => {
    return setCount((prev) => prev + 1);
  };

  return (
    <div className={style.counter}>
      <button
        type="button"
        aria-label="갯수 감소 버튼"
        className={style.button}
        onClick={handleMinus}
      >
        -
      </button>
      <span className={style.count}>{count}</span>
      <button
        type="button"
        aria-label="갯수 추가 버튼"
        className={style.button}
        onClick={handlePlus}
      >
        +
      </button>
    </div>
  );
}
