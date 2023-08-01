import React, { FC } from 'react'
import style from './CategoryOfPizza.module.scss'
import SortMenu from '../../UI/SortMenu/SortMenu'


// --------------------------------------------- //
//                 # Categories                  //
// --------------------------------------------- //

const TypeOfPizza: FC = (props) => {
  return (
    <section className={style.menu}>
      <div className={style.typeMenu}>
        <CategoryItem text={'Все'} active/>
        <CategoryItem text={'Мясные'} />
        <CategoryItem text={'Вегетарианская'} />
        <CategoryItem text={'Гриль'} />
        <CategoryItem text={'Острые'} />
        <CategoryItem text={'Закрытые'} />
      </div>
      <div className={style.sortMenu}>
        <SortMenu />
      </div>
    </section>
  );
};

// --------------------------------------------- //
//                 End Categories                //
// --------------------------------------------- //


// --------------------------------------------- //
//                # Category item                //
// --------------------------------------------- //

interface ICategoryItemProps {
  text: string,
  active?: boolean,
}

const CategoryItem: FC<ICategoryItemProps> = ({ text, active }) => {
  return (
    <div className={active ? `${style.categoryItem} ${style.activeCategoryItem}` : `${style.categoryItem}`}>{text}</div>
  );
}

// --------------------------------------------- //
//                  Category item                //
// --------------------------------------------- //


export default TypeOfPizza;