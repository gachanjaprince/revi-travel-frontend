import { useState, useEffect } from "react";
import { api } from '../api/axios'
import Hero from '../components/Hero'
import Posts from '../components/Posts'

const HomePage = () => {
  const [posts, setPosts] = useState([])

  useEffect(()=>{
    const fetchPosts = async()=>{
        try{
            const res = await api.get(`/post/feed`)
            const data = Object.keys(res.data.posts).map((e)=> res.data.posts[e])

            setPosts(data)
        } catch (e) {
            console.log('Error fetching data', e)
        }
    }
    fetchPosts()
}, [])

  return (
    <>
        <Hero title='revi travel' subtitle='Escape Explore Experience' />
        <Posts heading='Feed' posts={posts}/>
    </>
  )
}

export default HomePage