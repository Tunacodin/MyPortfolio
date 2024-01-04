import React, { useEffect, useState } from 'react'
import MainPage from './MainPage'
import MoreAbout from './MoreAbout'
import Hobbies from './Hobbies';
import {MainContext} from './components/context'
import { More } from './components/More';




const App = () => {

  useEffect(() => {
    document.body.style.backgroundColor = theme === 'light'? '#ffffff' : '#000000'
  })
  const [theme, settheme] = useState('light')

  const data = {
    theme, settheme
  }

  return (
    <MainContext.Provider value={data}>
      <More/>
      
    </MainContext.Provider>
  );
}

export default App
