import { useState } from 'react'
import AddTask from './components/AddTask'
import Tasks from './components/Tasks'



function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Plan surf trip itinerary",
      description: "Research surf spots, check swell forecasts, and outline daily activities.",
      isCompleted: false
    },
    {
      id: 2,
      title: "Pack gear for surf trip",
      description: "Prepare board, wax, wetsuit, sunscreen, and travel essentials.",
      isCompleted: false
    },
    {
      id: 3,
      title: "Book accommodation and transport",
      description: "Reserve lodging near the beach and confirm transportation details.",
      isCompleted: false
    }
  ])

  function onTaskClick(taskId) {
    const newTasks = tasks.map(task => {
      if (task.id == taskId) {
        return { ...task, isCompleted: !task.isCompleted }
      }

      return task
    })
    setTasks(newTasks)
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId)
    setTasks(newTasks)
  }

  return (
    <>
      <div className='w-screen h-screen bg-slate-500 flex justify-center p-6'>
        <div className='w-[500px] space-y-4'>
          <h1 className='text-3xl text-slate-100 font-bold text-center'>task manager</h1>
          <AddTask />
          <Tasks
            tasks={tasks}
            onTaskClick={onTaskClick}
            onDeleteTaskClick={onDeleteTaskClick}
          />
        </div>
      </div>
    </>
  )
}

export default App
