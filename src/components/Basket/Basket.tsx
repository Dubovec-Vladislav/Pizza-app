import React, { FC, useState } from 'react'
import style from './Basket.module.scss'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../assets/ts/hooks'
import { clearPizzas, selectBasketPizzas } from '../../assets/redux/slices/basketSlice'
import EmptyBasket from './EmptyBasket'
import { useDispatch } from 'react-redux'


// --------------------------------------------- //
//                   # Basket                    //
// --------------------------------------------- //

const Basket: FC = (props) => {
  const dispatch = useDispatch();
  const pizzas = useAppSelector(selectBasketPizzas);

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
                    imageUrl={pizza.imageUrl}
                    name={pizza.name}
                    type={pizza.type}
                    size={pizza.size}
                    price={pizza.price}
                    nOP={pizza.numberOfPizzas}
                  />
                ))
              }
            </div>
            <div className={style.footer}>
              <div className={style.footerItem}>
                <div className={style.totalNumberOfPizzas}>Всего пицц: <span>{pizzas.length} шт.</span></div>
                <div className={style.totalPriceOfPizzas}>Сумма заказа: <span>900 ₽</span></div>
              </div>
              <div className={style.footerItem}>
                <Link to={"/"} className={style.backBtn}>Вернуться назад</Link>
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

// --------------------------------------------- //
//                   End Basket                  //
// --------------------------------------------- //


// --------------------------------------------- //
//                 # Basket item                 //
// --------------------------------------------- //

interface IBasketItemProps {
  imageUrl: string;
  name: string;
  type: string;
  size: number;
  price: number;
  nOP: number;
}

const BasketItem: FC<IBasketItemProps> = ({ imageUrl, name, type, size, price, nOP }) => {
  const [numberOfPizzas, changeNumberOfPizzas] = useState(nOP);

  return (
    <div className={style.basketItem}>
      <div className={style.img}><img src={imageUrl} alt={name} /></div>
      <div className={style.text}>
        <div className={style.title}>{name}</div>
        <div className={style.subtitle}>{`${type} тесто, ${size} см.`}</div>
      </div>
      <div className={style.numberOfPizzas}>
        <div className={style.minus} onClick={() => changeNumberOfPizzas(numberOfPizzas - 1)}></div>
        <span>{numberOfPizzas}</span>
        <div className={style.plus} onClick={() => changeNumberOfPizzas(numberOfPizzas + 1)}></div>
      </div>
      <div className={style.price}>{price} ₽</div>
      <div className={style.close}></div>
    </div>
  );
}

// --------------------------------------------- //
//               # End Basket item               //
// --------------------------------------------- //


export default Basket;