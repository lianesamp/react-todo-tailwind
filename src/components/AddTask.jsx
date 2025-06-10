import React, { useState } from 'react'

const AddTask = ({ onAddTaskSubmit }) => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")



    return (
        <div className='space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col'>
            <input
                type="text"
                placeholder='Enter the task title'
                className='border border-slate-300 outline-slate-400 px-4 py-2 rounded-md'
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />
            <input
                type="text"
                placeholder='Enter the task description'
                className='border border-slate-300 outline-slate-400 px-4 py-2 rounded-md'
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            />
            <button
                onClick={() => {
                    if (!title.trim() || !description.trim()) {
                        return alert("Add title and description")
                    }
                    onAddTaskSubmit(title, description)
                    setTitle("")
                    setDescription("")

                }}
                className='bg-slate-500 text-white px-4 py-2 rounded-md font-medium cursor-pointer'>Add</button>
        </div>
    )
}

export default AddTask