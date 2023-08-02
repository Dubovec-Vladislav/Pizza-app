import React, { FC, useState } from 'react'
import style from './Basket.module.scss'
import { Link } from 'react-router-dom'
import EmptyBasket from './EmptyBasket'


// --------------------------------------------- //
//                   # Basket                    //
// --------------------------------------------- //

const Basket: FC = (props) => {
  return (
    <section className={style.block}>
      <div className={style.body}>
        <div className={style.header}>
          <div className={style.title}><img src="/img/UI/black-cart.svg" alt="black-cart" />Корзина</div>
          <div className={style.clearBasket}><img src="/img/UI/trash-bin.svg" alt="trash-bin" />Очистить корзину</div>
        </div>
        <div className={style.content}>
          <BasketItem imgName={'pizza-4'} name={'Сырный цыпленок'} description={'тонкое тесто, 26 см.'} price={770} />
          <BasketItem imgName={'pizza-3'} name={'Креветки по-азиатски'} description={'толстое тесто, 40 см.'} price={290} />
          <BasketItem imgName={'pizza-1'} name={'Сырный цыпленок'} description={'тонкое тесто, 30 см.'} price={350} />
        </div>
        <div className={style.footer}>
          <div className={style.footerItem}>
            <div className={style.totalNumberOfPizzas}>Всего пицц: <span>3 шт.</span></div>
            <div className={style.totalPriceOfPizzas}>Сумма заказа: <span>900 ₽</span></div>
          </div>
          <div className={style.footerItem}>
            <Link to={"/"} className={style.backBtn}>Вернуться назад</Link>
            <div className={style.payBtn}>Оплатить сейчас</div>
          </div>
        </div>
        {/* <EmptyBasket /> */}
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
  imgName: string,
  name: string,
  description: string,
  price: number,
}

const BasketItem: FC<IBasketItemProps> = ({ imgName, name, description, price }) => {
  const PATH = '/img/Pizzas/'
  const [numberOfPizzas, changeNumberOfPizzas] = useState(1);

  return (
    <div className={style.basketItem}>
      <div className={style.img}><img src={`${PATH}${imgName}.jpg`} alt={imgName} /></div>
      <div className={style.text}>
        <div className={style.title}>{name}</div>
        <div className={style.subtitle}>{description}</div>
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