import { useEffect, useState } from 'react'
import Posts from '../components/Posts'
import { api } from '../api/axios'
import axios from 'axios'

const MyAccountPage = () => {
    const [myPosts, setMyPosts] = useState([])

    useEffect(()=>{
        const fetchMyPosts = async()=>{
            try{
                const status = await api.get('/auth/status')
                const account = status.data.user
                const response = await api.get(`/account/${account}`)
                // const response = await axios({
                //     method: 'GET',
                //     params: {
                //       userId: account
                //     },
                //     url: 'https://revi-travel-backend.onrender.com/account',
                //   })
                const data = Object.keys(response.data.posts).map((e)=> response.data.posts[e])
                setMyPosts(data)

            } catch (error) {
                console.log('Error fetching data', error)
            }
        }
        fetchMyPosts()
    }, [])


    return (
        <Posts heading='My Posts' posts={myPosts}/>
    )
}

export default MyAccountPage