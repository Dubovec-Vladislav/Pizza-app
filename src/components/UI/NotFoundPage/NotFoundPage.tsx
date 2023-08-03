import React, { FC } from 'react'
import style from './NotFoundPage.module.scss'

const NotFoundPage: FC = (props) => {
  return (
    <section className={style.block}>
      <div className={style.body}>
        <div className={style.title}>Извините, ничего не найдено &#128533;</div>
        <div className={style.subTitle}>Возможно страница была удалена или перенесена на другой адрес</div>
      </div>
    </section>
  );
};

export default NotFoundPage;