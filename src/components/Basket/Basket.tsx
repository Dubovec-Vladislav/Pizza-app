import React, { FC } from 'react'
import style from './Basket.module.scss'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../assets/ts/hooks'
import { changeNumberOfPizzas, clearPizzas, removePizza, selectBasketPizzas, selectBasketTotalNumberOfPizzas, selectBasketTotalPriceOfPizzas } from '../../assets/redux/slices/basketSlice'
import EmptyBasket from './EmptyBasket'
import { useDispatch } from 'react-redux'


// --------------------------------------------- //
//                   # Basket                    //
// --------------------------------------------- //

const Basket: FC = (props) => {
  const dispatch = useDispatch();
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

// --------------------------------------------- //
//                   End Basket                  //
// --------------------------------------------- //


// --------------------------------------------- //
//                 # Basket item                 //
// --------------------------------------------- //

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
}

// --------------------------------------------- //
//               # End Basket item               //
// --------------------------------------------- //


export default Basket;