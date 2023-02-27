import React from 'react';
import style from './ProductInfo.module.css';

export default function ProductInfo(props) {
  return (
    <div className={style.ProductInfo}>
      <div className={style.img}>
        <img src={props.image} alt={props.name} />
      </div>
      <h1 className={style.name}>{props.name}</h1>
      <div className={style.wrapper}>
        <span className={style.discount}>{props.discount}%</span>
        <span className={style.price}>{props.price}</span>
      </div>
    </div>
  );
}
