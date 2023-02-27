import React, { useState } from 'react';
import ProductInfo from '../productInfo/ProductInfo';
import PurcaseButton from '../purcaseButton/PurcaseButton';
import Counter from '../counter/Counter';
import DeliveryInfo from '../deliveryInfo/DeliveryInfo';
import PurcaseInfo from '../purchaseInfo/PurchaseInfo';
import style from './ProductCard.module.css';
import productImage from '../../assets/rapigen.svg';

export default function ProductCard() {
  const [count, setCount] = useState(1);

  let data = {
    id: '01',
    name: `래피젠 코로나 자가 검사 키트 2개입X1박스`,
    image: productImage,
    price: 6370,
    delivery: '택배배송',
    charge: 3000,
    discount: 88,
  };

  function localeString(num) {
    return `${num.toLocaleString()}원`;
  }

  return (
    <div className={style.productCard}>
      <ProductInfo
        image={data.image}
        discount={data.discount}
        name={data.name}
        price={localeString(data.price)}
      />
      <DeliveryInfo
        delivery={data.delivery}
        charge={localeString(data.charge)}
      />
      <Counter count={count} setCount={setCount} />
      <PurcaseInfo price={localeString(data.price * count)} count={count} />
      <PurcaseButton count={count} />
    </div>
  );
}
