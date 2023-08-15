import React, { FC } from 'react'
import style from './BasketItem.module.scss'
import { changeNumberOfPizzas, removePizza } from '@basketSlice'
import { useAppDispatch } from '@hooks'

interface IBasketItemProps {
  id: string,
  imageUrl: string,
  name: string,
  type: string,
  size: number,
  price: number,
  numberOfPizzas: number,
}

const BasketItem: FC<IBasketItemProps> = ({ id, imageUrl, name, type, size, price, numberOfPizzas }) => {
  const dispatch = useAppDispatch()

  return (
    <div className={style.basketItem}>
      <div className={style.img}><img src={imageUrl} alt={name} /></div>
      <div className={style.text}>
        <div className={style.itemTitle}>{name}</div>
        <div className={style.itemSubtitle}>{`${type} тесто, ${size} см.`}</div>
      </div>
      <div className={style.numberOfPizzas}>
        {
          numberOfPizzas > 1
            ? <div className={style.minus}
              onClick={() => dispatch(changeNumberOfPizzas({ id: id, price: price, action: '-' }))}
            ></div>
            : <div className={`${style.minus} ${style.disableMinus}`}></div>
        }
        <span>{numberOfPizzas}</span>
        <div className={style.plus}
          onClick={() => dispatch(changeNumberOfPizzas({ id: id, price: price, action: '+' }))}
        ></div>
      </div>
      <div className={style.price}>{price} ₽</div>
      <div className={style.delete} onClick={() => dispatch(removePizza({ id: id, price: price }))}></div>
    </div >
  );
};

export default BasketItem;