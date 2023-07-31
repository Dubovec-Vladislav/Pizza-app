import React, { FC } from 'react'
import style from './App.module.scss'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import { Route, Routes } from 'react-router-dom'
import Basket from './components/Basket/Basket'

const App: FC = () => {
  return (
    <div className={style.wrapper}>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/basket' element={<Basket />} />
      </Routes>
    </div>
  );
}

export default App;
