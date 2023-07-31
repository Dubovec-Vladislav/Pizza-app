import React, { FC, useState } from 'react'
import style from './SortMenu.module.scss'

const SortMenu: FC = () => {
  const [activeMenu, setActiveMenu] = useState(false);

  const handleClickMenuItem = () => setActiveMenu(!activeMenu);

  return (
    <div className={style.sort}>
      <div className={style.label}>
        <div className={activeMenu ? `${style.arrow} ${style.activeArrow}` : style.arrow}>
          <img src="/img/UI/arrow-down.svg" alt="arrow-down" />
        </div>
        <div className={style.text}>
          Сортировка по:
          <span onClick={handleClickMenuItem}>популярности</span>
        </div>
      </div>
      <div className={activeMenu ? `${style.popup} ${style.activeMenu}` : `${style.popup}`}>
        <ul className={style.list}>
          <li className={`${style.item} ${style.activeItem}`}>популярности</li>
          <li className={style.item}>цене</li>
          <li className={style.item}>алфавиту</li>
        </ul>
      </div>
    </div>
  );
};

export default SortMenu;