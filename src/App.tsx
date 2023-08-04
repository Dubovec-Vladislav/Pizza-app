import React, { FC, useState } from 'react'
import style from './App.module.scss'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import { Route, Routes } from 'react-router-dom'
import Basket from './components/Basket/Basket'
import NotFoundPage from './components/UI/NotFoundPage/NotFoundPage'

const App: FC = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className={style.wrapper}>
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/basket' element={<Basket />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
