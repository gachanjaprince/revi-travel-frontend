import { useNavigate } from "react-router-dom";
import logo from '../assets/logos/logo.png'
import { toast } from 'react-toastify'
import { api } from "../api/axios";

const Footer = () => {
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

    const userLogout = async ()=> {
        try {
            const response = await api.get('/auth/status')
            if (!response.data.auth){
                return toast('No Account Logged In', {
                    style: {
                      border: '1px solid black',
                      color: '#713200',
                      iconTheme: {
                        primary: 'green',
                        secondary: 'black',
                      },
                    },
                  });
            }

            const res = await api.post('/auth/logout')
            toast.success(res.data.msg)
            navigate('/')
        } catch(e) {
            return toast.error(e)
        }
      }

    return (
      <footer className="sticky top-[100vh] py-3 bg-slate-900">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center sm:justify-between pt-2">
                <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                    <img src={logo} className="h-8" alt="Flowbite Logo" />
                </a>
                <div className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0">
                    <button onClick={() => fetchUser('/add-post', '/login')} className="hover:underline me-4 md:me-6">Add Spot</button>
                    <button onClick={() => fetchUser('/my-account', '/login')}href="/my-account" className="hover:underline me-4 md:me-6">My Account</button>
                    <button type='button' onClick={()=> userLogout()} className="hover:underline">Logout</button>
                </div>
            </div>
            <hr className="my-6 border-green-500 sm:mx-auto lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-white">© 2024 <a target="blank" href="https://princegachanja.com/" className="hover:underline">Prince Gachanja</a>. All Rights Reserved.</span>
          </div>
      </footer>
  )
}

export default Footer