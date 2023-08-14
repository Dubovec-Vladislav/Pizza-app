import React, { FC, useState } from "react"
import style from './PizzaItem.module.scss'
import TypesItem from "./PizzaItemComponents/TypesItem"
import SizesItem from "./PizzaItemComponents/SizesItem"
import { addPizza, selectBasketPizzas } from "../../../assets/redux/slices/basketSlice"
import { useAppDispatch, useAppSelector } from "../../../assets/ts/hooks"
// import { useAddPizzaMutation } from "../../../assets/redux/api/fetchPizzasAPI"
// import { Link } from "react-router-dom"

interface PizzaItemProps {
  id: string,
  imageUrl: string,
  name: string,
  types: number[],
  sizes: number[],
  prices: number[],
}

const PizzaItem: FC<PizzaItemProps> = ({ id, imageUrl, name, types, sizes, prices }) => {
  // const [add] = useAddPizzaMutation();

  const doughTypeList = ['тонкое', 'традиционное'];
  const basketPizzas = useAppSelector(selectBasketPizzas);
  const dispatch = useAppDispatch();

  // Активным будет самый первый тип теста в массиве
  const [activeDoughType, setActiveDoughType] = useState(doughTypeList[types[0]]);
  const [activeSize, setActiveSize] = useState(sizes[0]);
  const [activePrice, setActivePrice] = useState(0);

  // Определяем цену (если традиционное то +25 руб.)
  const price = activeDoughType === 'тонкое' ? prices[activePrice] : prices[activePrice] + 25;

  // Определяем количество пицц с данным характеристиками 
  let numOfPizzas = 0;
  const pizzaIndex = basketPizzas.findIndex(pizza => pizza.id === id && pizza.price === price);
  if (pizzaIndex !== -1) numOfPizzas = basketPizzas[pizzaIndex].numberOfPizzas;

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
      {/* <Link to={`/pizza/${id}`}><div className={style.img}><img src={imageUrl} alt={name} /></div></Link> */}
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
                setActivePrice={setActivePrice}
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