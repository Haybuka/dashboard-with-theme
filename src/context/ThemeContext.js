import React, {createContext,useState} from 'react'

export const ThemeContext = createContext()
export function ThemeProvider(props) {
  const [mode,setMode] = useState(false)
  return (
    <ThemeContext.Provider value={{mode,setMode}}>
        {props.children}
    </ThemeContext.Provider>
  )
}

