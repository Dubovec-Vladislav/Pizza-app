import React, { FC } from 'react'
import style from './PizzaField.module.scss'
import BlockTitle from '../../UI/BlockTitle/BlockTitle'
// import pizzasData from '../../../assets/PizzasData/pizzas.json'
import PizzaItem from './PizzaItem'
import Skeleton from '../../UI/Skeleton/Skeleton'
import { useAppSelector } from '../../../assets/ts/hooks'
import { selectSearchValue } from '../../../assets/redux/slices/searchSlice'
import { usePizzaData } from '../../../assets/customHooks/usePizzaData'

interface PizzaFieldProps {
  category: string | number,
  sortBy: string,
  order: string,
}

const PizzaField: FC<PizzaFieldProps> = React.memo(({ category, sortBy, order }) => {
  const searchValue = useAppSelector(selectSearchValue);

  const { data, isLoading } = usePizzaData(category, sortBy, order); // Custom hook
  console.log(data, isLoading);

  return (
    <section className={style.block}>
      <div className={style.title}><BlockTitle text={'Все пиццы'} /></div>
      <div className={style.body}>
        {
          isLoading
            ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
            : data ?
              data.filter((pizza) => {
                return pizza.name.toLowerCase().includes(searchValue.toLowerCase());
              }) // for static data
                .map((pizza) => (
                  <PizzaItem
                    key={pizza.id}
                    id={pizza.id}
                    imageUrl={pizza.imageUrl}
                    name={pizza.name}
                    types={pizza.types}
                    sizes={pizza.sizes}
                    prices={pizza.prices}
                  />
                ))
              : <div className={style.error}>Упс... что-то пошло не так. Повторите попытку позже</div>
        }
      </div>
    </section>
  );
});

export default PizzaField;