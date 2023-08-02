import React, { FC } from 'react'
import style from './TypesItem.module.scss'

interface TypesItemProps {
  id: number,
  activeDoughType: string,
  setActiveDoughType: (doughType: string) => void,
}

const TypesItem: FC<TypesItemProps> = ({ id, activeDoughType, setActiveDoughType }) => {
  const doughTypeList = ['тонкое', 'традиционное']
  const doughType = doughTypeList[id];

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