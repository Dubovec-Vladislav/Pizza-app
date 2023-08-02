import React, { FC, useState } from 'react'
import style from './PizzaField.module.scss'
import BlockTitle from '../../UI/BlockTitle/BlockTitle'
import pizzasData from '../../../assets/PizzasData/pizzas.json'


// --------------------------------------------- //
//                 # Pizza field                 //
// --------------------------------------------- //

const PizzaField: FC = (props) => {
  console.log(pizzasData.pizzas);
  return (
    <section className={style.block}>
      <div className={style.title}><BlockTitle text={'Все пиццы'} /></div>
      <div className={style.body}>
        {
          pizzasData.pizzas.map((pizza) => (
            <PizzaItem
              id={pizza.id}
              imageUrl={pizza.imageUrl}
              name={pizza.name}
              types={pizza.types}
              sizes={pizza.sizes}
              price={pizza.price} />
          ))
        }
        {/* <PizzaItem imgName={'pizza-1'} name={'Чизбургер-пицца'} price={395} />
        <PizzaItem imgName={'pizza-2'} name={'Сырная'} price={450} />
        <PizzaItem imgName={'pizza-3'} name={'Креветки по-азиатски'} price={290} />
        <PizzaItem imgName={'pizza-4'} name={'Сырный цыпленок'} price={385} />
        <PizzaItem imgName={'pizza-1'} name={'Чизбургер-пицца'} price={395} />
        <PizzaItem imgName={'pizza-2'} name={'Сырная'} price={450} />
        <PizzaItem imgName={'pizza-3'} name={'Креветки по-азиатски'} price={290} />
        <PizzaItem imgName={'pizza-4'} name={'Сырный цыпленок'} price={385} /> */}
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
  id: number,
  imageUrl: string,
  name: string,
  types: number[],
  sizes: number[],
  price: number,
}

const PizzaItem: FC<PizzaItemProps> = ({ id, imageUrl, name, types, sizes, price, }) => {
  const doughTypeList = ['тонкое', 'традиционное']

  const [numOfPizzas, setNumberOfPizzas] = useState(0);
  const [activeDoughType, setActiveDoughType] = useState(doughTypeList[0]);
  const [activeSize, setActiveSize] = useState(sizes[0]);

  return (
    <div className={style.pizzaItem} key={id}>
      <div className={style.img}><img src={imageUrl} alt={name} /></div>
      <div className={style.name}>{name}</div>
      <div className={style.settings}>
        <ul className={style.dough}>
          {
            types.length > 1 ?
              // Если у нас больше чем один тип, то делаем мапинг и проверяем на активный тип
              types.map((indexOfDoughType) => (
                <li key={indexOfDoughType} className={
                  doughTypeList[indexOfDoughType] === activeDoughType ?
                    `${style.doughType} ${style.activeDoughType}` :
                    style.doughType}
                  onClick={() => setActiveDoughType(doughTypeList[indexOfDoughType])}
                >
                  {doughTypeList[indexOfDoughType]}
                </li>
              )) :
              <li key={0} className={`${style.doughType} ${style.activeDoughType}`}>{doughTypeList[types[0]]}</li>
            // Если у нас только один тип, то только его активным и выводим
          }
        </ul>
        <ul className={style.size}>
          {
            sizes.length > 1 ?
              sizes.map((size) => (
                <li key={sizes.indexOf(size)} className={
                  size === activeSize ?
                    `${style.sizeType} ${style.activeSizeType}` :
                    style.sizeType}
                  onClick={() => setActiveSize(size)}
                >
                  {size} см.
                </li>
              )) :
              <li key={0} className={`${style.doughType} ${style.activeDoughType}`}>{sizes[0]} см.</li>
          }
          {/* <li className={`${style.sizeType} ${style.activeSizeType}`}>26 см.</li>
          <li className={style.sizeType}>30 см.</li>
          <li className={style.sizeType}>40 см.</li> */}
        </ul>
      </div>
      <div className={style.footer}>
        <div className={style.price}>{price} ₽</div>
        <div className={style.add} onClick={() => setNumberOfPizzas(numOfPizzas + 1)}>
          Добавить
          <span className={numOfPizzas ? `${style.counter}` : `${style.none}`}>{numOfPizzas}</span>
        </div>
      </div>
    </div >
  );
}

// --------------------------------------------- //
//                 End Pizza item                //
// --------------------------------------------- //


export default PizzaField;