import React, { FC } from 'react'
import style from './FullPizza.module.scss'
import { useParams } from 'react-router-dom'
import PizzaItem from '../Main/PizzaField/PizzaItem'
import Skeleton from '../UI/Skeleton/Skeleton'
import { useGetPizzaQuery } from '../../assets/redux/api/fetchOnePizzaAPI'


const FullPizza: FC = () => {
  const params = useParams<{ id: string }>();
  const { data, isLoading } = useGetPizzaQuery(params.id!)

  return (
    <section className={style.block}>
      <div className={style.body}>
        {isLoading
          ? [...new Array(1)].map((_, index) => <Skeleton key={index} />)
          : data
            ? <PizzaItem
              key={data.id}
              id={data.id}
              imageUrl={data.imageUrl}
              name={data.name}
              types={data.types}
              sizes={data.sizes}
              prices={data.prices}
            />
            : <div>Упс... видимо такой пиццы нет</div>
        }
      </div>
    </section>
  );
};

export default FullPizza;