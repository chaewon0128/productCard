import React, { useState } from 'react';
import Tooltip from '../tooltip/Tooltip';
import style from './PurchaseInfo.module.css';

export default function PurcaseInfo(props) {
  const [tooltip, SetTooltip] = useState(false);
  const openTooltip = () => {
    return SetTooltip(true);
  };
  const closeTooltip = () => {
    return SetTooltip(!tooltip);
  };
  const secondaryStyle = {
    color: '#6B90DC',
  };

  return (
    <div className={style.info}>
      <span className={style.total}>총 상품 금액 </span>
      <button className={style.infoButton} onClick={openTooltip}>
        ?
      </button>
      {tooltip ? (
        <Tooltip style={secondaryStyle} onClick={closeTooltip} />
      ) : null}
      <div className={style.total__price}>
        <span className={style.count}>총 수량 {props.count}개</span>
        <span className={style.price} style={secondaryStyle}>
          {props.price}
        </span>
      </div>
    </div>
  );
}
