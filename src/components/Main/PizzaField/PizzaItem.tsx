import React, { FC, useState } from "react"
import style from './PizzaItem.module.scss'
import TypesItem from "./PizzaItemComponents/TypesItem"
import SizesItem from "./PizzaItemComponents/SizesItem"
import { addPizza, selectBasketPizzas } from "../../../assets/redux/slices/basketSlice"
import { useDispatch } from "react-redux"
import { useAppSelector } from "../../../assets/ts/hooks"

interface PizzaItemProps {
  id: number,
  imageUrl: string,
  name: string,
  types: number[],
  sizes: number[],
  prices: number[],
}

const PizzaItem: FC<PizzaItemProps> = ({ id, imageUrl, name, types, sizes, prices }) => {
  const doughTypeList = ['тонкое', 'традиционное'];
  const pizzas = useAppSelector(selectBasketPizzas);
  const dispatch = useDispatch();

  // Активным будет самый первый тип теста в массиве
  const [activeDoughType, setActiveDoughType] = useState(doughTypeList[types[0]]);
  const [activeSize, setActiveSize] = useState(sizes[0]);
  const [activePriceIndex, setActivePriceIndex] = useState(0);
  const price = activeDoughType === 'тонкое' ? prices[activePriceIndex] : prices[activePriceIndex] + 25;

  let numOfPizzas = 0;
  const pizzaIndex = pizzas.findIndex(pizza => pizza.id === id && pizza.price === price);
  if (pizzaIndex !== -1) numOfPizzas = pizzas[pizzaIndex].numberOfPizzas;


  const handleAddClick = () => {
    const pizza = {
      id: id,
      imageUrl: imageUrl,
      name: name,
      type: activeDoughType,
      size: activeSize,
      price: price,
      numberOfPizzas: 1,
    }
    dispatch(addPizza(pizza))
  }

  return (
    <div className={style.pizzaItem}>
      <div className={style.img}><img src={imageUrl} alt={name} /></div>
      <div className={style.name}>{name}</div>
      <div className={style.settings}>
        <ul className={style.dough}>
          {
            types.map((indexOfDoughType) => (
              <TypesItem key={indexOfDoughType}
                doughType={doughTypeList[indexOfDoughType]}
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
        <div className={style.price}>{price} ₽</div>
        <div className={style.add} onClick={handleAddClick}>
          Добавить
          <span className={numOfPizzas ? `${style.counter}` : `${style.none}`}>{numOfPizzas}</span>
        </div>
      </div>
    </div >
  );
}

export default PizzaItem;