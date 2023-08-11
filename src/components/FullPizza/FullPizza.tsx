import React, { FC, useEffect } from 'react'
import style from './FullPizza.module.scss'
import { fetchPizza, selectPizza } from '../../assets/redux/slices/pizzasSlice'
import { useAppDispatch, useAppSelector } from '../../assets/ts/hooks'
import { useParams } from 'react-router-dom';
import PizzaItem from '../Main/PizzaField/PizzaItem'


const FullPizza: FC = () => {
  const dispatch = useAppDispatch();
  const params = useParams<{ id: string }>();

  useEffect(() => {
    dispatch(fetchPizza(params.id!));
  }, [params.id, dispatch])

  const pizza = useAppSelector(selectPizza);
  console.log(pizza);

  if (!pizza) {
    return <div>Загрузка</div>
  }

  return (
    <section className={style.block}>
      <div className={style.body}>
        {pizza.id ?
          <PizzaItem
            key={pizza.id}
            id={pizza.id || ''}
            imageUrl={pizza.imageUrl || ''}
            name={pizza.name || ''}
            types={pizza.types || []}
            sizes={pizza.sizes || []}
            prices={pizza.prices || []}
          />
          : <div>Упс... видимо такой пиццы нет</div>
        }
      </div>
    </section>
  );
};

export default FullPizza;