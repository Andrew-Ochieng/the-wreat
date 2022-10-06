import BlogForm from "../components/BlogForm";

const Create = ({addBlogs}) => {
    return ( 
        <div>
            <BlogForm addBlogs={addBlogs} />

        </div>
     );
}
 
export default Create;