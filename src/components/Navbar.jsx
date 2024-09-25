import { useNavigate } from "react-router-dom";
import { FaUser } from 'react-icons/fa6'
import { PiMapPinPlusFill } from "react-icons/pi";
import { api } from "../api/axios";

import { NavLink } from 'react-router-dom'
import logo from '../assets/logos/logo.png'

const Navbar = () => {
  const navigate = useNavigate()

  const fetchUser = async (authAction, unAuthAction) => {
    try{
      const res = await api.get('/auth/status')

      if (res.data.auth){
        navigate(authAction)
      } else {
        navigate(unAuthAction)
      }
    } catch(error) {
      console.log('Error fetching data', error)
    } 
  }

  return (
    <nav className="bg-slate-900 border-b border-green-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-between md:items-stretch md:justify-start">
            {/* <!-- Logo --> */}
            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
              <img className="h-10 w-auto" src={logo} alt="revi travel" />
            </NavLink>
            
            <div className="md:ml-auto">
                <div className="flex space-x-2">
                  <button onClick={() => fetchUser('/add-post', '/login')} className="text-xl text-white hover:bg-gray-900 hover:text-green-500 rounded-md px-3 py-2"> <PiMapPinPlusFill/> </button>
                  <button onClick={() => fetchUser('/my-account', '/login')} className="text-xl text-white hover:bg-gray-900 hover:text-green-500 rounded-md px-3 py-2"> <FaUser/> </button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </nav>
  )
}

export default Navbar