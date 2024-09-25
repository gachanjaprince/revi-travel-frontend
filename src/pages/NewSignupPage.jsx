import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { api } from "../api/axios";

const NewSignupPage = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('');   
    const [email, setEmail] = useState('');

    const navigate = useNavigate()

    const submitForm = async (event)=> {
        try {
          event.preventDefault();
            
          const res = await api.post('/auth/createUser', {userName, email, password})
          console.log(res.data)

          if (res.data.status === "error") {
            toast.error(res.data.msg)
          } else {
            toast.success(res.data.msg)
            navigate('/')
          }
        } catch(e) {
          toast.error(e)
        }
    }


    return (
    <section className="bg-indigo-50">
      <div className="container m-auto max-w-2xl py-24">
        <div
          className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
        >
          <form onSubmit={submitForm}>
            <h2 className="text-3xl text-center font-semibold mb-6">Create New Account</h2>

            <div className="mb-4">
              <label htmlFor="type" className="block text-gray-700 font-bold mb-2"
                >Username 
              </label>
            <input
                type="text"
                id="userName"
                name="userName"
                className="border rounded w-full py-2 px-3 mb-2"
                required
                value={userName}
                onChange={(event)=> setUserName(event.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2"
                >Password</label
              >
              <input
                type="text"
                id="password"
                name="password"
                className="border rounded w-full py-2 px-3 mb-2"
                required
                value={password}
                onChange={(event)=> setPassword(event.target.value)}
              />
            </div>
            

            <div className="mb-4">
              <label
                htmlFor="contact_email"
                className="block text-gray-700 font-bold mb-2"
                >Email</label
              >
              <input
                type="email"
                id="email"
                name="email"
                className="border rounded w-full py-2 px-3"
                required
                value={email}
                onChange={(event)=> setEmail(event.target.value)}
              />
            </div>

            <div>
              <button
                className="bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mb-5"
                type="submit"
              >
                Signup
              </button>
            </div>
          </form>

          <div className="border-t-[1px] border-stone-400 mt-2 pt-5">
            <p className="text-lg text-slate-800 font-bold block mb-2">Already have an account?</p>
            <div className="flex flex-row justify-between">
              <button className="bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline" 
                      type="submit"
                      onClick={()=> navigate('/login')}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewSignupPage