import BlogCard from "../components/BlogCard";

const Home = ({ energyBlogs}) => {
    

    return (
        <div>
             <BlogCard energyBlogs={energyBlogs} /> 
            

        </div>
     );
}
 
export default Home;