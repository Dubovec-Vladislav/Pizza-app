import React, { FC, useState } from "react"
import style from './PizzaItem.module.scss'
import TypesItem from "./PizzaItemComponents/TypesItem"
import SizesItem from "./PizzaItemComponents/SizesItem"
import { addPizza } from "../../../assets/redux/slices/basketSlice"
import { useDispatch } from "react-redux"

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

  const [numOfPizzas, setNumberOfPizzas] = useState(0);
  // Активным будет самый первый тип теста в массиве
  const [activeDoughType, setActiveDoughType] = useState(doughTypeList[types[0]]);
  const [activeSize, setActiveSize] = useState(sizes[0]);
  const [activePriceIndex, setActivePriceIndex] = useState(0);

  const price = activeDoughType === 'тонкое' ? prices[activePriceIndex] : prices[activePriceIndex] + 25;
  const dispatch = useDispatch();

  const handleAddClick = () => {
    setNumberOfPizzas(numOfPizzas + 1)
    const pizza = {
      id: id,
      imageUrl: imageUrl,
      name: name,
      types: activeDoughType,
      sizes: activeSize,
      price: price,
      numberOfPizzas: 1,
    }
    console.log(pizza);
    // dispatch(addPizza(pizza))
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