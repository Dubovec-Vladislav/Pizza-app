import React, { FC } from 'react'
import style from './PizzaField.module.scss'
import BlockTitle from '../../UI/BlockTitle/BlockTitle'
// import pizzasData from '../../../assets/PizzasData/pizzas.json'
import PizzaItem from './PizzaItem'
import Skeleton from '../../UI/Skeleton/Skeleton'
import { useAppSelector } from '../../../assets/ts/hooks'
import { selectPizzas, selectStatus } from '../../../assets/redux/slices/pizzasSlice'
import { selectSearchValue } from '../../../assets/redux/slices/searchSlice'

const PizzaField: FC = React.memo((props) => {
  const searchValue = useAppSelector(selectSearchValue);

  const pizzas = useAppSelector(selectPizzas);
  const status = useAppSelector(selectStatus);
  console.log(status);

  return (
    <section className={style.block}>
      <div className={style.title}><BlockTitle text={'Все пиццы'} /></div>
      <div className={style.body}>
        {
          status === 'error'
            ? <div className={style.error}>Упс... что-то пошло не так. Повторите попытку позже</div>
            : status === 'loading'
              ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
              : pizzas
                .filter((pizza) => {
                  return pizza.name.toLowerCase().includes(searchValue.toLowerCase()); // True if includes, false if not
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
        }
      </div>
    </section>
  );
});

export default PizzaField;