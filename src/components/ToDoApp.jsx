import React, { useState } from 'react'
import "./ToDoApp.css"

const ToDoApp = () => {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (inputValue.trim() !== '') {
      const newTodo = {
        id: crypto.randomUUID(),
        text: inputValue,
        done: false
      }

      setTodos((prevTodos) => [...prevTodos, newTodo])
      setInputValue("")
    }
  }

  const toggleDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    )
  }

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">To-Do List</h1>

      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Add a task"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Add
        </button>
      </form>

      {todos.length === 0 && (
        <p className="text-center text-gray-500 italic">There are no tasks</p>
      )}

      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`flex justify-between items-center px-4 py-2 rounded-lg shadow-sm transition cursor-pointer ${todo.done ? 'bg-green-100' : 'bg-gray-100 hover:bg-gray-200'
              }`}
            onClick={() => toggleDone(todo.id)}
          >
            <span
              className={`flex-1 ${todo.done ? 'line-through text-gray-400' : ''
                }`}
            >
              {todo.text}
            </span>

            {todo.done && (
              <span className="text-green-500 text-lg mr-2">✔️</span>
            )}

            <button
              onClick={(e) => {
                e.stopPropagation() // impede que clicar no X marque como feita
                deleteTodo(todo.id)
              }}
              className="text-red-500 hover:text-red-700 font-bold"
              aria-label="Delete task"
              title="Delete task"
            >
              ✕
            </button>
          </li>
        ))}
      </ul>


    </div>
  )
}

export default ToDoApp
