import React, { useState } from 'react';

const TodoList = () => {
  const initialValue = {
    value: '',
  };

  const [task, setTask] = useState(initialValue);
  const [tasks, setTasks] = useState([]);

  const handleInputChange = event => {
    const { value } = event.target;
    const newtask = { ...task, value };
    setTask(newtask);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    if (task.value.trim()) {
      setTasks([...tasks, task]);
      setTask(initialValue);
    }
  }

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input
          onChange={handleInputChange}
          type="text"
          value={task.value}
          data-testid="input-task-field"
        />
        <button type="submit" data-testid="submit-form-btn">Add new task</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Todo List</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((taskItem, index) => (
            <tr key={index}>
              <td>{taskItem.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TodoList;
