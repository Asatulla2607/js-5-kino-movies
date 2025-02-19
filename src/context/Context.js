import React, { useState } from 'react'
import { LanguageContext } from '.';

const Context = ({children}) => {

    const [language,setLanguage] = useState('en-US')
    const [mode, setMode] = useState(JSON.parse(localStorage.getItem('mode')) || false)
  return (
    <LanguageContext.Provider value={{language,setLanguage, mode, setMode }}>
      {children}
    </LanguageContext.Provider>
  )
}

export default Context;
