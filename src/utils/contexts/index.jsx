import { createContext, useState } from "react"

export const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const SurveyContext = createContext()

export function SurveyProvider({ children }) {
  const [answer, setAnswer] = useState({})

  const saveAnswer = (newAnser) => {
    setAnswer({
      ...answer,
      ...newAnser
    })
  }

  return <SurveyContext.Provider value={{answer, saveAnswer}}>{children}</SurveyContext.Provider>
}
