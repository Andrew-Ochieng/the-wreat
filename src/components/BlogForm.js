import { useState } from "react";

const BlogForm = ({addBlogs}) => {
    const [formData, setFormData] = useState({ 
        title: "", 
        author: "", 
        image_link: "", 
        date: "",
        content: ""
      });

    const addNewBlog = (e) => {
        e.preventDefault()

        validateForm()
    }

    const validateForm = () => {

        // re-check form validation for individual input form-value !== ""
        const postUrl = 'https://the-wreat-api.herokuapp.com/energy'
        fetch(postUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: formData.title,
                author: formData.author,
                image_link: formData.image_link,
                date: formData.date,
                content: formData.content,
            })
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            addBlogs(data)
            setFormData({
                title: "",
                author: "",
                image_link: "",
                date: null,
                content: "",
            })

        })
        .catch((err) => console.log(err))
    }

    const handleInput = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
    

    return ( 
        <div className="md:my-32 sm:my-16 my-8 mx-6">
            <div className="flex justify-center items-center ">
                <form action="#" method="post" onSubmit={addNewBlog}>
                    <div className="my-2">
                        <label className="md:text-xl font-medium" htmlFor="title">Title</label><br />
                        <input className="my-1 rounded-lg outline-none border-2 pl-2 pr-3 py-3 w-full" type="text" name="title" value={formData.title} onchange={handleInput} placeholder="Write Title.."/>
                    </div>
                    <div className="my-2">
                        <label className="md:text-xl font-medium" htmlFor="author">Author</label><br />
                        <input className="my-1 rounded-lg outline-none border-2 pl-2 pr-3 py-3 w-full" type="text" name="author" value={formData.author} onchange={handleInput} placeholder="Write Name.."/>
                    </div>
                    <div className="my-2">
                        <label className="md:text-xl font-medium" htmlFor="image-link">Image Link</label><br />
                        <input className="my-1 rounded-lg outline-none border-2 pl-2 pr-3 py-3 w-full" type="text" name="image_link" value={formData.image_link} onchange={handleInput} placeholder="Write Name.."/>
                    </div>
                    <div className="my-2">
                        <label className="md:text-xl font-medium" htmlFor="date">Date</label><br />
                        <input className="my-1 rounded-lg outline-none border-2 pl-2 pr-3 py-3 w-full" type="date" name="date" value={formData.date} onchange={handleInput} placeholder="Date.." />
                    </div>
                    <div className="my-2">
                        <label className="md:text-xl font-medium" htmlFor="content">Content</label><br />
                        <textarea className="my-1 rounded-lg outline-none border-2 pl-2 pr-3 py-3 w-full" name="content" value={formData.content} onchange={handleInput} placeholder="Write Content.." cols="30" rows="6"></textarea>
                    </div>
                    <input className="w-full py-3 bg-cyan-400 rounded-lg cursor-pointer hover:bg-cyan-500 duration-200" type="submit" value="Add Blog" />
                </form>
            </div>
            
        </div>
     );
}
 
export default BlogForm;