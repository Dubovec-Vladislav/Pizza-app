import React, { FC, useState } from 'react'
import style from './PizzaField.module.scss'
import BlockTitle from '../../UI/BlockTitle/BlockTitle'


// --------------------------------------------- //
//                 # Pizza field                 //
// --------------------------------------------- //

const PizzaField: FC = (props) => {
  return (
    <section className={style.block}>
      <div className={style.title}><BlockTitle text={'Все пиццы'} /></div>
      <div className={style.body}>
        <PizzaItem imgName={'pizza-1'} name={'Чизбургер-пицца'} price={395} />
        <PizzaItem imgName={'pizza-2'} name={'Сырная'} price={450} />
        <PizzaItem imgName={'pizza-3'} name={'Креветки по-азиатски'} price={290} />
        <PizzaItem imgName={'pizza-4'} name={'Сырный цыпленок'} price={385} />
        <PizzaItem imgName={'pizza-1'} name={'Чизбургер-пицца'} price={395} />
        <PizzaItem imgName={'pizza-2'} name={'Сырная'} price={450} />
        <PizzaItem imgName={'pizza-3'} name={'Креветки по-азиатски'} price={290} />
        <PizzaItem imgName={'pizza-4'} name={'Сырный цыпленок'} price={385} />
      </div>
    </section>
  );
};

// --------------------------------------------- //
//                 End Pizza field               //
// --------------------------------------------- //


// --------------------------------------------- //
//                 # Pizza item                  //
// --------------------------------------------- //

interface PizzaItemProps {
  imgName: string,
  name: string,
  price: number,
}

const PizzaItem: FC<PizzaItemProps> = ({ imgName, name, price }) => {
  const [numOfPizzas, changeNumberOfPizzas] = useState(0);
  const handleAddClick = () => changeNumberOfPizzas(numOfPizzas + 1)

  return (
    <div className={style.pizzaItem}>
      <div className={style.img}><img src={`/img/Pizzas/${imgName}.jpg`} alt={imgName} /></div>
      <div className={style.name}>{name}</div>
      <div className={style.settings}>
        <div className={style.dough}>
          <div className={`${style.doughType} ${style.activeDoughType}`}>тонкое</div>
          <div className={style.doughType}>традиционное</div>
        </div>
        <div className={style.size}>
          <div className={`${style.sizeType} ${style.activeSizeType}`}>26 см.</div>
          <div className={style.sizeType}>30 см.</div>
          <div className={style.sizeType}>40 см.</div>
        </div>
      </div>
      <div className={style.footer}>
        <div className={style.price}>{price} ₽</div>
        <div className={style.add} onClick={handleAddClick}>
          Добавить
          <span className={numOfPizzas ? `${style.counter}` : `${style.none}`}>{numOfPizzas}</span>
        </div>
      </div>
    </div>
  );
}

// --------------------------------------------- //
//                 End Pizza item                //
// --------------------------------------------- //


export default PizzaField;