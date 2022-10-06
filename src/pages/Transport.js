
const Transport = ({transportBlogs}) => {
    return ( 
        <div className="md:8 m-4">
            <div className="grid md:grid-cols-3 sm:grid-cols-2 md:gap-8 gap-4">
                {
                    transportBlogs.map((transportBlog) => (
                        <div key={transportBlog.id} className="bg-cyan-200 md:p-8 p-4 rounded-lg shadow-md hover:shadow-lg">
                            <img className="rounded-lg" src={transportBlog.image_link} alt="" />
                            <h1 className="md:text-2xl text-lg font-semibold text-gray-900">{transportBlog.title}</h1>
                            <p>{transportBlog.content_preview}</p>
                            <h3 className="text-green-500">{transportBlog.author}</h3>
                        </div>
                    ))
                }
            </div>
        
        </div>
     );
}
 
export default Transport;