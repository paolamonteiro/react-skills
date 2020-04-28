import React, { useContext, useState, useEffect } from "react"
import { TodoListContext } from "../TodoListContext"
import {
  DoneTodoBox,
  TrashTodoList,
  TrashTodoButton
} from "../../styles/DoneTodos"

const Trash = () => {
  const [todos, setTodos] = useContext(TodoListContext)

  const [todosInTrash, setTodosInTrash] = useState([])

  useEffect(() => {
    setTodosInTrash(todos.filter(todo => todo.done === true))
  }, [todos])

  const undone = index => {
    const restoredTodo = todos.map((todo, todoIndex) =>
      todoIndex === index ? { ...todo, done: false } : todo
    )
    setTodos(restoredTodo)
  }

  return (
    <DoneTodoBox>
      <h2>Completed ToDo List</h2>
      <TrashTodoList>
        {todosInTrash.map((todo, index) => (
          <li key={index}>
            {todo.value}
            <TrashTodoButton onClick={() => undone(index)}>-</TrashTodoButton>
          </li>
        ))}
      </TrashTodoList>
    </DoneTodoBox>
  )
}

export default Trash