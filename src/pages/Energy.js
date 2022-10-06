import BlogCard from "../components/BlogCard";

const Energy = (energyData) => {
    return ( 
        <div>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 md:gap-8 gap-4">
                {
                    energyData.map((energy) => {
                            return <BlogCard energy={energy} />
                    })
                }
            </div>
        
        </div>
     );
}
 
export default Energy;