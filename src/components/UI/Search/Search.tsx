import React, { FC, useContext } from 'react'
import style from './Search.module.scss'
import { SearchContext } from '../../../App'

const Search: FC = () => {
  const { searchValue, setSearchValue } = useContext(SearchContext)!;

  return (
    <div className={style.body}>
      <input className={style.search}
        value={searchValue}
        placeholder='Поиск пиццы...'
        onChange={(e) => setSearchValue(e.target.value)}
      ></input>
      {searchValue ? <span className={style.cross} onClick={() => setSearchValue('')}></span> : ''}
    </div>
  );
};

export default Search;