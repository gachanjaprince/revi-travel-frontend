import React from 'react'
import { FaArrowLeft, FaMapPin } from 'react-icons/fa'
import { Link, useNavigate, useParams, useLoaderData } from "react-router-dom";
import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'
import ImageCarousel from '../components/ImageCarousel';
import  { api } from '../api/axios'

const PostPage = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const post = useLoaderData()
    const [userId, setUserId] = useState([])

    useEffect(()=>{
        const fetchUser = async (req, res)=>{
            try {
                const response = await api.get('/auth/status')
                const user = response.data.user
                setUserId(user)

            } catch(e) {
                toast.error(e)
            }
        }
        fetchUser()
    })

    const onDeleteClick = async (postId) => {
      try{
        const confirm = window.confirm('Are you sure you want to delete this post?')
        if(!confirm) return

        const response = await api.delete(`/${post._id}`)
        const data = response.data
        console.log(data)

        toast.success('Post Deleted Successfully')
        navigate('/')
      } catch (e) {
        toast.error(e)
      }
        
    }

   

    return (
    <>
    <section>
      <div className="container m-auto py-6 px-6">
        <Link
          to="/"
          className="text-green-700 hover:text-green-500 flex items-center"
        >
          <FaArrowLeft className='mr-2' /> Return to Feed
        </Link>
      </div>
    </section>

    <section className="bg-indigo-50">
      <div className="container m-auto py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
          <main>
            <div className="bg-slate-300 p-6 rounded-lg shadow-md text-center md:text-left">
              <h1 className="text-3xl font-bold mb-4"> {post.title} </h1>
              <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
                <div>
                  <FaMapPin className='inline text-xl text-orange-700 mb-2'/>
                  <p className="inline text-lg text-orange-700"> {post.location} </p>
                </div>
              </div>
              <div>
                <ImageCarousel images={post.images} />
              </div>
            </div>

            
            <div className="bg-slate-300 p-6 rounded-lg shadow-md mt-6">
              <h4 className="text-green-800 text-lg font-bold mb-6">
                Description
              </h4>

              <p className="mb-4"> {post.description} </p>


              <p className="mb-4">{}</p>
            </div>
          </main>

          <aside>
            { (userId === post.user) ? (
                <div className="bg-slate-300 p-6 rounded-lg shadow-md mt-6">
                    <Link to={`/edit/id/${post._id}`} className="bg-green-700 hover:bg-green-500 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block">
                        Edit Job
                    </Link>

                    <button onClick={()=>{onDeleteClick(post._id)}} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block">
                        Delete Job
                    </button>
                </div>
            ) : (
                <div>

                </div>)      
            }   
          </aside>
        </div>
      </div>
    </section>   
    </>
    ) 
}

const postLoader = async ({ params }) => {
    const res = await api.get(`/post/id/${params.id}`)
    const data = res.data.post
    return data
}

export {PostPage as default, postLoader}