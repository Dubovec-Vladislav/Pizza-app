import React, { ChangeEvent, FC, useCallback, useContext, useRef, useState } from 'react'
import style from './Search.module.scss'
import { SearchContext } from '../../../App'
import debounce from 'lodash.debounce'

const Search: FC = (props) => {
  const [value, setValue] = useState('')
  const { setSearchValue } = useContext(SearchContext)!;
  const inputRef = useRef<HTMLInputElement>(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateSearchValue = useCallback(debounce((string) => {
    setSearchValue(string);
  }, 250), []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    updateSearchValue(e.target.value);
  }

  const handleClearClick = () => {
    setValue('');
    setSearchValue('');
    inputRef.current?.focus();
  }

  return (
    <div className={style.body}>
      <input className={style.input}
        ref={inputRef}
        value={value}
        placeholder='Поиск пиццы...'
        onChange={handleInputChange}
      ></input>
      {value ? <span className={style.cross} onClick={handleClearClick}></span> : ''
      }
    </div >
  );
};

export default Search;