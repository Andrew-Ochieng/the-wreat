

const HomeCard = ({ energyBlogs }) => {
    
    
    return ( 
        <div>
            {
                energyBlogs.map((energyBlog) => (
                    <div key={energyBlog.id}>
                        <h1>{energyBlog.title}</h1>
                        <h3>{energyBlog.author}</h3>
                        <img src={energyBlog.image_link} alt="" />
                    </div>
                ))
            }

        </div>
     );
}
 
export default HomeCard;