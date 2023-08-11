import React, { FC, useEffect } from 'react'
import style from './FullPizza.module.scss'
import { fetchPizza, selectPizza } from '../../assets/redux/slices/pizzasSlice'
import { useAppDispatch, useAppSelector } from '../../assets/ts/hooks'
import { useParams } from 'react-router-dom';


const FullPizza: FC = () => {
  const dispatch = useAppDispatch();
  let params = useParams();
  const id = params.id;

  useEffect(() => {
    dispatch(fetchPizza(id!));
  }, [id, dispatch])

  const pizza = useAppSelector(selectPizza);
  console.log(pizza);

  return (
    <section className={style.block}>
      <div className={style.body}>
        {pizza.name}
        <div><img src={pizza.imageUrl} alt="" /></div>
        <div>Types</div>
        <ul>
          {
            pizza.types?.map((type, index) => <li key={index}>{type}</li>)
          }
        </ul>
        <div>Sizes</div>
        <ul>
          {
            pizza.sizes?.map((size, index) => <li key={index}>{size}</li>)
          }
        </ul>
      </div>
    </section>
  );
};

export default FullPizza;