import BlogCard from "../components/BlogCard";

const Home = ({ blogs }) => {
    

    return (
     <div className="md:8 m-4">
          <div className="grid md:grid-cols-3 sm:grid-cols-2 md:gap-8 gap-4">
          {
               blogs.map((blog) => (
                    <BlogCard blog={blog} />
               ))
          }

        </div>
     </div>
     );
}
 
export default Home;