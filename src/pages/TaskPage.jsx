import { ChevronLeftIcon } from "lucide-react"
import { useNavigate, useSearchParams } from "react-router-dom"


function TaskPage() {

    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const title = searchParams.get("title")
    const description = searchParams.get("description")

    return (
        <div className="h-screen w-screen bg-slate-500 p-6">

            <div className='space-y-4'>
                <div className="flex justify-center relative mb-6">
                    <button
                        onClick={() => navigate(-1)}
                        className="absolute left-0 top-0 bottom-0 text-slate-100 cursor-pointer">
                        <ChevronLeftIcon />
                    </button>
                    <h1 className='text-3xl text-slate-100 font-bold text-center'>Task Details</h1>
                </div>


                <div className="bg-slate-400 p-4 rounded-md">
                    <h2 className="text-xl text-white font-bold">{title}</h2>
                    <p className="text-white">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default TaskPage