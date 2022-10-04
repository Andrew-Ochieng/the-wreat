import { useState, useEffect } from "react";

const Home = () => {
    const [clean, setClean] = useState([])

    useEffect(() => {
        energyData()


    }, [])

    const energyData = () => {
        const cleanApi = 'https://the-wreat-api.herokuapp.com/energy'
        fetch(cleanApi)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
            })
    }

    return (
        <div>
            


        </div>
     );
}
 
export default Home;