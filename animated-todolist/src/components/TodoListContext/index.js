import React, { useState } from "react"

export const TodoListContext = React.createContext()

export const TodoListProvider = props => {
  const [todos, setTodos] = useState([])
  return (
    <TodoListContext.Provider value={[todos, setTodos]}>{props.children}
    </TodoListContext.Provider>
  )
}