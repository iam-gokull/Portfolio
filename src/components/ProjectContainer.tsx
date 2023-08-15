import { Link } from "react-router-dom"

const ProjectContainer = () => {
  return (
    <div className='rounded-md relative object-cover w-[350px] h-[350px] md:w-[450px] md:h-[400px] bg-center bg-no-repeat overflow-hidden p-4 flex items-end'>
        <img src='https://www.codewonders.dev/_next/image?url=https%3A%2F%2Fi.ibb.co%2FtCZFDhL%2FScreen-Recording-2020-06-11-at-1.gif&w=1080&q=75' className='absolute object-cover w-full h-full left-0 top-0'/>
        <div className='z-50 transition-opacity opacity-0 hover:opacity-100 pb-16 space-y-2'>
            <h1 className='inline font-bold uppercase text-xl text-white'>Comentario</h1>
            <p className="text-white">An online software feedback webapp with sentiment analysis.</p>
            <div className="flex gap-4">
                <Link to='#' className="rounded-full bg-gray-400 px-4 py-1 text-white text-xs font-bold">Github</Link>
                <Link to='#' className="rounded-full bg-gray-400 px-4 py-1 text-white text-xs font-bold">Live</Link>
            </div>
        </div>
       
    </div>
  )
}

export default ProjectContainer