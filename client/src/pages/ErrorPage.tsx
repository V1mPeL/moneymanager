import { FC } from 'react'
import { Link } from 'react-router-dom'
import img from '../assets/not-found.png'

const ErrorPage: FC = () => {
  return (
    <div className='min-h-screen bg-slate-900 font-roboto text-white flex justify-center items-center flex-col gap-10'>
      <img src={img} alt="img" className='w-[700px] h-[500px]'/>
      <Link to={'/'} className='bg-sky-500 rounded-md px-6 py-2 hover:bg-sky-600'>
        Back
      </Link>
    </div>
  )
}

export default ErrorPage