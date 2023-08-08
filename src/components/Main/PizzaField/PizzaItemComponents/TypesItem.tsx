import React, { FC } from 'react'
import style from './TypesItem.module.scss'

interface TypesItemProps {
  doughType: string,
  activeDoughType: string,
  setActiveDoughType: (doughType: string) => void,
}

const TypesItem: FC<TypesItemProps> = ({ doughType, activeDoughType, setActiveDoughType }) => {
  return (
    <li className={
      doughType === activeDoughType ?
        `${style.doughType} ${style.activeDoughType}` :
        style.doughType}
      onClick={() => setActiveDoughType(doughType)}
    >
      {doughType}
    </li>
  );
};

export default TypesItem;