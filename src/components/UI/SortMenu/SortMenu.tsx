import React, { FC, useState } from 'react'
import style from './SortMenu.module.scss'

interface SortMenuProps {
  sortItems: string[],
  activeSort: boolean,
  toggleActiveSort: (activeSort: boolean) => void,
  activeSortItem: string,
  setActiveSortItem: (item: string) => void,
}

const SortMenu: FC<SortMenuProps> = ({ sortItems, activeSort, toggleActiveSort, activeSortItem, setActiveSortItem }) => {
  const handleClickMenuItem = (item: string) => {
    setActiveSortItem(item);
    toggleActiveSort(!activeSort);
  };

  return (
    <div className={style.sort}>
      <div className={style.label} onClick={() => toggleActiveSort(!activeSort)}>
        <div className={activeSort ? `${style.arrow} ${style.activeArrow}` : style.arrow}>
          <img src="/img/UI/arrow-down.svg" alt="arrow-down" />
        </div>
        <div className={style.text}>
          Сортировка по:
          <span>{activeSortItem}</span>
        </div>
      </div>
      <div className={activeSort ? `${style.popup} ${style.activeMenu}` : `${style.popup}`}>
        <ul className={style.list}>
          {
            sortItems.map((item, i) => (
              <li
                key={i}
                className={activeSortItem === item ? `${style.item} ${style.activeItem}` : `${style.item}`}
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