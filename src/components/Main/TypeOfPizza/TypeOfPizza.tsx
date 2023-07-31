import React, { FC } from 'react'
import style from './TypeOfPizza.module.scss'
import SortMenu from '../../UI/SortMenu/SortMenu'


// --------------------------------------------- //
//                    # Menu                     //
// --------------------------------------------- //

const TypeOfPizza: FC = (props) => {
  return (
    <section className={style.menu}>
      <div className={style.typeMenu}>
        <TypeItem text={'Все'} active/>
        <TypeItem text={'Мясные'} />
        <TypeItem text={'Вегетарианская'} />
        <TypeItem text={'Гриль'} />
        <TypeItem text={'Острые'} />
        <TypeItem text={'Закрытые'} />
      </div>
      <div className={style.sortMenu}>
        <SortMenu />
      </div>
    </section>
  );
};

// --------------------------------------------- //
//                    End Menu                   //
// --------------------------------------------- //


// --------------------------------------------- //
//                  # Type item                  //
// --------------------------------------------- //

interface ITypeItemProps {
  text: string,
  active?: boolean,
}

const TypeItem: FC<ITypeItemProps> = ({ text, active }) => {
  return (
    <div className={active ? `${style.typeItem} ${style.activeTypeItem}` : `${style.typeItem}`}>{text}</div>
  );
}

// --------------------------------------------- //
//                  End Type item                //
// --------------------------------------------- //


export default TypeOfPizza;