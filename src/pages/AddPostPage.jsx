import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'
import Spinner from '../components/Spinner'
import { api } from '../api/axios'

const AddPostPage = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('');
    const [images, setImages] = useState();
    const [location, setLocation] = useState('');
    const [userId, setUserId] = useState('')
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate()    

    useEffect(()=>{
      const fetchUserId = async () => {
        try{
          const res = await api.get('/auth/status')
          setUserId(res.data.user)
        } catch(error) {
          console.log('Error fetching data', error)
        } 
      }
      fetchUserId()
    } ,[])

    // SUBMIT BUTTON DISABLE WHILE POST UPLOADS
    const submitBtn = ()=> loading ?
        (<button className="bg-slate-400 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                 disabled={true}
                 type="submit"
        > <Spinner/> </button>) 
        : 
        (<button className="bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                 type="submit"
          >Add Spot</button>)

    // POST UPLOADING
    const submitForm = async (event)=> {
      try {
        event.preventDefault();
        setLoading(true)

        let imageList = []
        for (let i=0; i<images.length; i++){
          const formData = new FormData()
          formData.append('file', images[i])
          formData.append('upload_preset', 'm1wizfvk')

          // AXIOS SENDS CREDENTIALS WITH REQUEST BY DEFAULT (ignores 'withoutCredentials: true') - CAUSES PREFLIGHT RESPONSE TO BE BLOCKED DUE TO NO HEADERS
          // const {data} = await axios.post('https://api.cloudinary.com/v1_1/duztrpcnj/image/upload', formData)
          // console.log(data)
          // imageList.push(data?.secure_url)

          // SENDING FETCH POST REQUEST WITHOUT CREDENTENTIALS SPECIFICALLY FOR CLOUDINARY (Hopefully so no response headers √)
          const fetchOptions = {
            method: 'POST',
            credentials: 'omit',
            body: formData
          }
          const response = await fetch('https://api.cloudinary.com/v1_1/duztrpcnj/image/upload', fetchOptions)
          const data = await response.json()
          imageList.push(data.secure_url)
        }

        const res = await api.post('/post/createPost', {title, description, imageList, location, userId})
        setLoading(true)

        if (res.data.status === "error") {
          setLoading(false)
          toast.error(res.data.msg)
        } else {
          setLoading(false)
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
            <h2 className="text-3xl text-center font-semibold mb-6">Add New Spot</h2>


            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2"
                >Name</label
                >
              <input
                type="text"
                id="title"
                name="title"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. Beaver Hills Dark Sky Preserve"
                required
                value={title}
                onChange={(event)=> setTitle(event.target.value)}
              />
            </div>


            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>
                Images
              </label>
              <input type="file"
                     id="images" 
                     name="images" 
                     className="border rounded w-full py-2 px-3 mb-2" 
                     required 
                     multiple={true}
                     onChange={(event)=> setImages(event.target.files)}
              />
            </div>


            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 font-bold mb-2"
                >Description</label
              >
              <textarea
                id="description"
                name="description"
                className="border rounded w-full py-2 px-3"
                rows="4"
                value={description}
                onChange={(event)=> setDescription(event.target.value)}
              ></textarea>
            </div>


            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>
                Location
              </label>
              <input
                type='text'
                id='location'
                name='location'
                className='border rounded w-full py-2 px-3 mb-2'
                placeholder='eg. Edmonton, AB'
                required
                value={location}
                onChange={(event)=> setLocation(event.target.value)}           
              />
            </div>

            <div>
              {submitBtn()}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default AddPostPage