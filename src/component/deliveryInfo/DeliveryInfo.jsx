import React from 'react';
import style from './DeliveryInfo.module.css';

export default function DeliveryInfo(props) {
  return (
    <div className={style.DeliveryInfo}>
      <span className={style.delivery}>{props.delivery}</span>
      <span className={style.charge}>{props.charge}</span>
      <p>10개마다 부과</p>
    </div>
  );
}
