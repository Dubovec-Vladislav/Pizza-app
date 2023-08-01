import React, { FC } from 'react'
import style from './Main.module.scss'
import TypeOfPizza from './CategoryOfPizza/CategoryOfPizza'
import PizzaField from './PizzaField/PizzaField'

const Main: FC = (props) => {
  return (
    <main className={style.block}>
      <div className={style.body}>
        <TypeOfPizza />
        <PizzaField />
      </div>
    </main>
  );
};

export default Main;