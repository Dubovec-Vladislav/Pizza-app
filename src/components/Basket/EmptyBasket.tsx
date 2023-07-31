import React, { FC } from 'react'
import style from './EmptyBasket.module.scss'

const EmptyBasket: FC = (props) => {
  return (
    <>
      <div className={style.title}>Корзина пустая <span>&#128533;</span></div>
      <div className={style.subTitle}>
        Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать пиццу, перейди на главную страницу.
      </div>
      <div className={style.img}><img src="/img/UI/empty-basket.svg" alt="empty-basket" /></div>
    </>
  );
};

export default EmptyBasket;