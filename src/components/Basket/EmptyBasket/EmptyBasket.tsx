import React, { FC } from 'react'
import style from './EmptyBasket.module.scss'
import { Link } from 'react-router-dom'

const EmptyBasket: FC = (props) => {
  return (
    <>
      <div className={style.title}>Корзина пустая <span>&#128533;</span></div>
      <div className={style.subTitle}>
        Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать пиццу, перейди на главную страницу.
      </div>
      <Link to='/' className={style.img}><img src="/img/UI/empty-basket.svg" alt="empty-basket" /></Link>
    </>
  );
};

export default EmptyBasket;