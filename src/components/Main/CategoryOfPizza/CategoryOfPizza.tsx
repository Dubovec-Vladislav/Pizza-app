import React, { FC, useState } from 'react'
import style from './CategoryOfPizza.module.scss'
import SortMenu from '../../UI/SortMenu/SortMenu'


// --------------------------------------------- //
//                 # Categories                  //
// --------------------------------------------- //

const TypeOfPizza: FC = (props) => {
  const categoryItems = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  const [activeItem, setActiveItem] = useState(categoryItems[0]);

  return (
    <section className={style.menu}>
      <div className={style.typeMenu}>
        {
          categoryItems.map((item, index) => (
            item === activeItem ?
              <CategoryItem key={index} text={item} setActiveItem={setActiveItem} active /> :
              <CategoryItem key={index} text={item} setActiveItem={setActiveItem} />
          ))
        }
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
  setActiveItem: (text: string) => void;
}

const CategoryItem: FC<ICategoryItemProps> = ({ text, active, setActiveItem }) => {
  return (
    <div className={active ? `${style.categoryItem} ${style.activeCategoryItem}` : `${style.categoryItem}`}
      onClick={() => setActiveItem(text)}
    >{text}</div>
  );
}

// --------------------------------------------- //
//                End Category item              //
// --------------------------------------------- //


export default TypeOfPizza;