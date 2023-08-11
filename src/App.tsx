import React, { FC } from 'react'
import style from './App.module.scss'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import { Route, Routes } from 'react-router-dom'
import Basket from './components/Basket/Basket'
import NotFoundPage from './components/UI/NotFoundPage/NotFoundPage'
import FullPizza from './components/FullPizza/FullPizza'

// export const SearchContext = createContext<{
//   searchValue: string;
//   setSearchValue: (searchValue: string) => void;
// } | undefined>(undefined);

const App: FC = () => {
  // const [searchValue, setSearchValue] = useState('');

  return (
    <div className={style.wrapper}>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/basket' element={<Basket />} />
        <Route path='/pizza/:id' element={<FullPizza />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
    // <SearchContext.Provider value={{ searchValue, setSearchValue }}>
    // </SearchContext.Provider>
  );
}

export default App;
