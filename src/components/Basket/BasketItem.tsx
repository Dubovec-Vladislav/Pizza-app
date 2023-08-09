import React, { FC } from 'react'
import style from './BasketItem.module.scss'
import { useDispatch } from 'react-redux';
import { changeNumberOfPizzas, removePizza } from '../../assets/redux/slices/basketSlice'

interface IBasketItemProps {
  id: number,
  imageUrl: string,
  name: string,
  type: string,
  size: number,
  price: number,
  numOfPizzas: number,
}

const BasketItem: FC<IBasketItemProps> = ({ id, imageUrl, name, type, size, price, numOfPizzas }) => {
  const dispatch = useDispatch()

  return (
    <div className={style.basketItem}>
      <div className={style.img}><img src={imageUrl} alt={name} /></div>
      <div className={style.text}>
        <div className={style.itemTitle}>{name}</div>
        <div className={style.itemSubtitle}>{`${type} тесто, ${size} см.`}</div>
      </div>
      <div className={style.numberOfPizzas}>
        <div className={style.minus}
          onClick={() => dispatch(changeNumberOfPizzas({ id: id, price: price, action: '-' }))}
        ></div>
        <span>{numOfPizzas}</span>
        <div className={style.plus}
          onClick={() => dispatch(changeNumberOfPizzas({ id: id, price: price, action: '+' }))}
        ></div>
      </div>
      <div className={style.price}>{price} ₽</div>
      <div className={style.close} onClick={() => dispatch(removePizza({ id: id, price: price }))}></div>
    </div>
  );
};

export default BasketItem;