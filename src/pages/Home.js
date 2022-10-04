import { useState, useEffect } from "react";
import BlogCard from "../components/BlogCard";

const Home = () => {
    const [energyBlogs, setEnergyBlogs] = useState([])

    useEffect(() => {
        energyData()

    }, [])

    const energyData = () => {
        const cleanApi = 'https://the-wreat-api.herokuapp.com/energy'
        fetch(cleanApi)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setEnergyBlogs(data)
            })
    }

    return (
        <div>
             <BlogCard energyBlogs={energyBlogs} /> 
            

        </div>
     );
}
 
export default Home;