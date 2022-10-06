import BlogCard from "../components/BlogCard";

const Home = ({ energyData, transportData }) => {
//     console.log(energyData, transport)


    return (
     <div className="md:m-8 m-4">
          <div className="grid md:grid-cols-3 sm:grid-cols-2 md:gap-8 gap-4">
          {
               energyData.map((energy) => (
                    <BlogCard energy={energy} />
               ))
          }
        </div>

        {/* <div className="grid md:grid-cols-3 sm:grid-cols-2 md:gap-8 gap-4">
          {
               transportData.map((transport) => {
                    return <BlogCard transport={transport} />
               })
          }
        </div> */}
     </div>
     );
}
 
export default Home;