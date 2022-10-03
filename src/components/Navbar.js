import { Link } from "react-router-dom";

const Navbar = () => {
    // const navLinks = ['Home', 'Energy', 'Agriculture', 'Transport', 'Real Estate', 'Waste Management']
    
    return ( 
        <div className="">
            <nav>
                <div>
                    <div>
                        <Link to='/'>The Wreat</Link>
                    </div>

                    <div>
                        <ul>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/energy'>Energy</Link>
                            </li>
                            <li>
                                <Link to='/agriculture'>Agriculture</Link>
                            </li>
                            <li>
                                <Link to='/transport'>Transport</Link>
                            </li>
                            <li>
                                <Link to='/realestate'>Real Estate</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        
     );
}
 
export default Navbar;