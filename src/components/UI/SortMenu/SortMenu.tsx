import React, { FC, useState } from 'react'
import style from './SortMenu.module.scss'

interface SortMenuProps {
  sortTypes: string[],
  activeSortType: string,
  setActiveSortType: (item: string) => void,
}

const SortMenu: FC<SortMenuProps> = ({ sortTypes, activeSortType, setActiveSortType }) => {
  const [activeSort, toggleActiveSort] = useState(false);

  const handleClickMenuItem = (item: string) => {
    setActiveSortType(item);
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
          <span>{activeSortType}</span>
        </div>
      </div>
      <div className={activeSort ? `${style.popup} ${style.activeMenu}` : `${style.popup}`}>
        <ul className={style.list}>
          {
            sortTypes.map((item, i) => (
              <li
                key={i}
                className={activeSortType === item ? `${style.item} ${style.activeItem}` : `${style.item}`}
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