import Post from './Post'
const Posts = ({heading, posts}) => {

    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
                    {heading}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {posts.map((post)=> (
                        <Post post={post} key={post._id} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Posts