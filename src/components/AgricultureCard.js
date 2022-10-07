
const AgricultureCard = ({agriculture: {id, image_link, title, content_preview, author, content_link}}) => {
    return ( 
        <div>
            <div key={id} className="bg-cyan-200 lg:p-8 p-4 rounded-lg shadow-md hover:shadow-lg">
                <img className="rounded-lg mb-2" src={image_link} alt="" />
                <a href={content_link} className="md:text-2xl text-lg font-semibold text-gray-900 hover:text-white">{title}</a>
                <p>{content_preview}</p>
                <h3 className="text-green-500">{author}</h3>
            </div>

        </div>
     );
}
 
export default AgricultureCard;