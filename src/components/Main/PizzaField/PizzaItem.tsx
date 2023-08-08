import React, { FC, useState } from "react"
import style from './PizzaItem.module.scss'
import TypesItem from "./PizzaItemComponents/TypesItem"
import SizesItem from "./PizzaItemComponents/SizesItem"

interface PizzaItemProps {
  imageUrl: string,
  name: string,
  types: number[],
  sizes: number[],
  prices: number[],
}

const PizzaItem: FC<PizzaItemProps> = ({ imageUrl, name, types, sizes, prices }) => {
  const doughTypeList = ['тонкое', 'традиционное'];

  const [numOfPizzas, setNumberOfPizzas] = useState(0);
  // Активным будет самый первый тип теста в массиве
  const [activeDoughType, setActiveDoughType] = useState(doughTypeList[types[0]]);
  const [activeSize, setActiveSize] = useState(sizes[0]);
  const [activePriceIndex, setActivePriceIndex] = useState(0);

  return (
    <div className={style.pizzaItem}>
      <div className={style.img}><img src={imageUrl} alt={name} /></div>
      <div className={style.name}>{name}</div>
      <div className={style.settings}>
        <ul className={style.dough}>
          {
            types.map((indexOfDoughType) => (
              <TypesItem key={indexOfDoughType}
                id={indexOfDoughType}
                activeDoughType={activeDoughType}
                setActiveDoughType={setActiveDoughType}
              />
            ))
          }
        </ul>
        <ul className={style.size}>
          {
            sizes.map((size) => (
              <SizesItem key={sizes.indexOf(size)}
                size={size}
                activeSize={activeSize}
                setActiveSize={setActiveSize}
                setActivePrice={setActivePriceIndex}
                sizes={sizes}
              />
            ))
          }
        </ul>
      </div>
      <div className={style.footer}>
        <div className={style.price}>{prices[activePriceIndex]} ₽</div>
        <div className={style.add} onClick={() => setNumberOfPizzas(numOfPizzas + 1)}>
          Добавить
          <span className={numOfPizzas ? `${style.counter}` : `${style.none}`}>{numOfPizzas}</span>
        </div>
      </div>
    </div >
  );
}

export default PizzaItem;