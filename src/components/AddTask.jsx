import React from 'react'

const AddTask = () => {
    return (
        <div className='space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col'>
            <input type="text" placeholder='Enter the task title' className='border border-slate-300 outline-slate-400 px-4 py-2 rounded-md' />
            <input type="text" placeholder='Enter the task description' className='border border-slate-300 outline-slate-400 px-4 py-2 rounded-md' />
            <button className='bg-slate-500 text-white px-4 py-2 rounded-md font-medium cursor-pointer'>Add</button>
        </div>
    )
}

export default AddTask