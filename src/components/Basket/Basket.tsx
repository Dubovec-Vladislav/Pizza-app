import React, { FC } from 'react'
import style from './Basket.module.scss'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../assets/ts/hooks'
import { clearPizzas, selectBasketPizzas, selectBasketTotalNumberOfPizzas, selectBasketTotalPriceOfPizzas } from '../../assets/redux/slices/basketSlice'
import EmptyBasket from './EmptyBasket/EmptyBasket'
import BasketItem from './BasketItem'

const Basket: FC = (props) => {
  const dispatch = useAppDispatch();
  const pizzas = useAppSelector(selectBasketPizzas);
  const totalNumberOfPizzas = useAppSelector(selectBasketTotalNumberOfPizzas);
  const totalPriceOfPizzas = useAppSelector(selectBasketTotalPriceOfPizzas);

  return (
    <section className={style.block}>
      <div className={style.body}>
        {pizzas.length > 0
          ?
          <>
            <div className={style.header}>
              <div className={style.title}><img src="/img/UI/black-cart.svg" alt="black-cart" />Корзина</div>
              <div className={style.clearBasket} onClick={() => dispatch(clearPizzas())}><img src="/img/UI/trash-bin.svg" alt="trash-bin" />Очистить корзину</div>
            </div>
            <div className={style.content}>
              {
                pizzas.map(pizza => (
                  <BasketItem key={pizza.id}
                    id={pizza.id}
                    imageUrl={pizza.imageUrl}
                    name={pizza.name}
                    type={pizza.type}
                    size={pizza.size}
                    price={pizza.price}
                    numOfPizzas={pizza.numberOfPizzas}
                  />
                ))
              }
            </div>
            <div className={style.footer}>
              <div className={style.footerItem}>
                <div className={style.totalNumberOfPizzas}>Всего пицц: <span>{totalNumberOfPizzas} шт.</span></div>
                <div className={style.totalPriceOfPizzas}>Сумма заказа: <span>{totalPriceOfPizzas} ₽</span></div>
              </div>
              <div className={style.footerItem}>
                <Link to={"/"} className={style.backBtn}>Назад</Link>
                <div className={style.payBtn}>Оплатить сейчас</div>
              </div>
            </div>
          </>
          :
          <EmptyBasket />
        }
      </div>
    </section>
  );
};

export default Basket;