import React from 'react';
import style from './Tooltip.module.css';

export default function Tooltip(props) {
  return (
    <p className={style.tooltip}>
      총 상품금액에{' '}
      <span style={props.style}>배송비는 포함되어 있지 않습니다.</span> 결제시
      배송비가 추가될 수 있습니다.
      <button
        aria-label="배송비 추가 사항 닫기 버튼"
        onClick={props.onClick}
      ></button>
    </p>
  );
}
