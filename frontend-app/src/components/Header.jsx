import React from 'react'
import { Link,useLocation } from 'react-router-dom'

const Header = () => {
    const location = useLocation();

  return (
    <div className=' w-full px-4 py-4 bg-gray-300 shadow-md flex justify-between'>
       <div className=' text-lg font-semibold '>  <Link to={"/"}>Customer Feedback Application</Link></div>
        <div>
            { location.pathname == '/guest' || location.pathname == '/' ? <Link to={`/login`}>
                <button className='rounded bg-gray-800 text-white text-sm px-3 py-1'>Admin</button>
            </Link>:'' }
        </div>
    </div>
  )
}

export default Header