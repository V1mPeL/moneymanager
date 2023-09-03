import { FC } from 'react'
import { Link } from 'react-router-dom';

const Home: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl mb-4">Main Page</h1>
      <div className="space-y-4">
        <Link
          to="/transactions"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition duration-300 ease-in-out mr-4"
        >
          Manage Transactions
        </Link>
        <Link
          to="/categories"
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded transition duration-300 ease-in-out"
        >
          Manage Categories
        </Link>
      </div>
    </div>
  )
}

export default Home