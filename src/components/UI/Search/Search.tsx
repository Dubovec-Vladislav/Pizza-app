import React, { ChangeEvent, FC, useCallback, useEffect, useRef, useState } from 'react'
import style from './Search.module.scss'
import debounce from 'lodash.debounce'
import { selectSearchValue, setSearchValue } from '@searchSlice'
import { useAppDispatch, useAppSelector } from '@hooks'

const Search: FC = (props) => {
  const dispatch = useAppDispatch();
  const search = useAppSelector(selectSearchValue);
  const [value, setValue] = useState<string>(search);
  useEffect(() => setValue(search), [search]);
  const inputRef = useRef<HTMLInputElement>(null);

  const updateSearchValue = useCallback(debounce((string) => {
    dispatch(setSearchValue(string));
  }, 300), []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    updateSearchValue(e.target.value);
  }

  const handleClearClick = () => {
    setValue('');
    dispatch(setSearchValue(''));
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