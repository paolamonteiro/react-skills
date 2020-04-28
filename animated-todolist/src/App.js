import React, { useState } from "react"
import Routes from "./components/Routes"
import { TodoListProvider } from "./components/TodoListContext"
import { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme } from "./styles/Themes"

const App = () => {
  const [theme, setTheme] = useState("light")
  
  const toggletheme = () => {
    if (theme === "light") {
      setTheme("dark")
      return
    }
    setTheme("light")
  }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <TodoListProvider>
        <Routes toggletheme={toggletheme} />
      </TodoListProvider>
    </ThemeProvider>
  )
}

export default App