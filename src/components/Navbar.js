import { Link } from "react-router-dom";

const Navbar = () => {
    // const navLinks = ['Home', 'Energy', 'Agriculture', 'Transport', 'Real Estate', 'Waste Management']
    
    return ( 
        <div className="">
            <nav className="bg-green-400 px-8 py-6">
                <div className="flex items-center justify-between ">
                    <div>
                        <Link className="text-xl uppercase font-semibold" to='/'>The Wreat</Link>
                    </div>

                    <div>
                        <ul className="flex items-center">
                            <li className="mx-4">
                                <Link to='/'>Home</Link>
                            </li>
                            <li className="mx-4">
                                <Link to='/energy'>Energy</Link>
                            </li>
                            <li className="mx-4">
                                <Link to='/agriculture'>Agriculture</Link>
                            </li>
                            <li className="mx-4">
                                <Link to='/transport'>Transport</Link>
                            </li>
                            <li className="mx-4">
                                <Link to='/realestate'>Real Estate</Link>
                            </li>
                            <li className="mx-4 bg-white hover:bg-cyan-400 hover:text-white duration-300 py-2 px-4 rounded-lg">
                                <Link to='/create'>Create</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        
     );
}
 
export default Navbar;