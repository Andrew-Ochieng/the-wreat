

const HomeCard = ({ blog: {id, image_link, title, content_preview, author} }) => {
    
    
    return ( 
        
        <div key={id} className="bg-cyan-200 lg:p-8 p-4 rounded-lg shadow-md hover:shadow-lg">
            <img className="rounded-lg" src={image_link} alt="" />
            <h1 className="md:text-2xl text-lg font-semibold text-gray-900">{title}</h1>
            <p>{content_preview}</p>
            <h3 className="text-green-500">{author}</h3>
        </div>

     );
}
 
export default HomeCard;