import React, { FC, createContext, useState } from 'react'
import style from './App.module.scss'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import { Route, Routes } from 'react-router-dom'
import Basket from './components/Basket/Basket'
import NotFoundPage from './components/UI/NotFoundPage/NotFoundPage'

export const SearchContext = createContext<{
  searchValue: string;
  setSearchValue: (searchValue: string) => void;
} | undefined>(undefined);

const App: FC = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      <div className={style.wrapper}>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/basket' element={<Basket />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>
    </SearchContext.Provider>
  );
}

export default App;
