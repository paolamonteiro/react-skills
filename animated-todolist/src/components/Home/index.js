import React, { useState, useContext, useEffect } from "react"
import { TodoListContext } from "../TodoListContext"
import Ads from "../Ads"
import {
  TodoFormBox,
  TodoForm,
  TodoButton,
  TodoList
} from "../../styles/TodoForm"
import { Fade } from "react-reveal"

const Home = () => {
  const initialValue = {
    id: "",
    value: "",
    done: false
  }

  const [todo, setTodo] = useState(initialValue)
  const [pendingTodos, setPendingTodos] = useState([])

  const [todos, setTodos] = useContext(TodoListContext)

  useEffect(() => {
    setPendingTodos(todos.filter(todo => todo.done === false))
  }, [todos])

  const invalidInput = !!(todo.value.length % 2)

  const handleChange = event => {
    const { value, name } = event.target
    const newTodo = { ...todo, [name]: value }
    setTodo(newTodo)
  }

  const handleSubmit = event => {
    if (todo.value !== "" && !invalidInput) {
      setTodos([...todos, { ...todo, id: Date.now() }])
    }
    event.preventDefault()
    setTodo(initialValue)
  }

  const done = id => {
    const doneTodos = todos.map(todo =>
      todo.id === id ? { ...todo, done: true } : todo
    )
    setTodos(doneTodos)
  }

  return (
    <>
      <TodoFormBox>
        <h1> To Do List </h1>
        <TodoForm onSubmit={handleSubmit}>
          <input
            type="text"
            name="value"
            value={todo.value}
            onChange={handleChange}
          />
          <TodoButton type="submit">+</TodoButton>
          <Fade bottom collapse when={invalidInput}>
            <div className="invalid-feedback">
              Oh no, the number of characters is odd :(
            </div>
          </Fade>
        </TodoForm>
        <TodoList>
          {pendingTodos.map(todo => (
            <li key={todo.id}>
              {todo.value}
              <TodoButton onClick={() => done(todo.id)}>-</TodoButton>
            </li>
          ))}
        </TodoList>
      </TodoFormBox>
      <Ads></Ads>
    </>
  )
}

export default Home