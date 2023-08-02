import React, { FC, useState } from 'react'
import style from './SortMenu.module.scss'

const SortMenu: FC = () => {
  const menuItems = ['популярности', 'цене', 'алфавиту'];

  const [active, toggleActive] = useState(false);
  const [activeItem, setActiveItem] = useState(menuItems[0]);

  const handleClickCurrentMenuItem = () => toggleActive(!active);
  const handleClickMenuItem = (item: string) => {
    setActiveItem(item);
    toggleActive(!active);
  };

  return (
    <div className={style.sort}>
      <div className={style.label}>
        <div className={active ? `${style.arrow} ${style.activeArrow}` : style.arrow}>
          <img src="/img/UI/arrow-down.svg" alt="arrow-down" />
        </div>
        <div className={style.text}>
          Сортировка по:
          <span onClick={handleClickCurrentMenuItem}>{activeItem}</span>
        </div>
      </div>
      <div className={active ? `${style.popup} ${style.activeMenu}` : `${style.popup}`}>
        <ul className={style.list}>
          {
            menuItems.map((item) => (
              <li
                key={item}
                className={activeItem === item ? `${style.item} ${style.activeItem}` : `${style.item}`}
                onClick={() => handleClickMenuItem(item)}
              >
                {item}
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
};

export default SortMenu;