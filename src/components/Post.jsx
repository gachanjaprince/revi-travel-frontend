import React from 'react'
import { FaMapPin } from "react-icons/fa6";

const Post = ({post}) => {
    return (
        <div className='bg-white rounded-xl shadow-md relative grid grid-cols-1'>
            <div className="p-3">
                <img className="m-auto"src={post.images[0]}/>
            </div>
            <div className="p-3">
                <div className="mb-3">
                    <h3 className="text-xl font-bold">{post.title}</h3>
                </div>
                <div className="mb-3">{post.description}</div>
    
                <div className="flex flex-col lg:flex-row justify-between mb-3">
                    <div className="text-orange-700 mb-3">
                        <FaMapPin className='inline text-lg mb-1 mr-1'/> {post.location}
                    </div>
                    <a href={`/post/id/${post._id}`} className="h-[36px] bg-green-700 hover:bg-green-500 text-white px-4 py-2 rounded-lg text-center text-sm">
                        View More
                    </a>
                </div>
            </div>

        </div>
      )
}

export default Post