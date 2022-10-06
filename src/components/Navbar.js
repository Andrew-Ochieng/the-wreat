// import { useState } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const menuRef = useRef()

    const showMenu = () => {
        menuRef.current.classList.toggle("hidden")

    }

    
    return ( 
        <div className="">
            <nav className="bg-green-400 px-8 py-6">
                <div className="md:flex items-center justify-between ">
                    <div className="flex items-center justify-between">
                        <Link className="md:text-2xl text-xl uppercase font-semibold" to='/'>The Wreat</Link>
                        <button onClick={showMenu} className="md:hidden">
                            <i className="text-xl fa fa-bars"></i> 
                            {/* <i className="fa fa-times"></i> */}
                        </button>
                    </div>

                    <div ref={menuRef} className="md:flex hidden">
                        <ul className="md:flex items-center md:text-lg font-medium text-white ">
                            <li className="md:mx-4 md:my-0 my-2 hover:text-gray-700">
                                <Link to='/'>Home</Link>
                            </li>
                            <li className="md:mx-4 md:my-0 my-2 hover:text-gray-700">
                                <Link to='/energy'>Energy</Link>
                            </li>
                            <li className="md:mx-4 md:my-0 my-2 hover:text-gray-700">
                                <Link to='/agriculture'>Agriculture</Link>
                            </li>
                            <li className="md:mx-4 md:my-0 my-2 hover:text-gray-700">
                                <Link to='/transport'>Transport</Link>
                            </li>
                            <li className="md:mx-4 md:my-0 my-2 hover:text-gray-700">
                                <Link to='/realestate'>Real Estate</Link>
                            </li>
                            <li className="md:mx-4 md:my-0 my-3 hover:text-gray-700">
                                <Link to='/create' className="bg-gray-700 hover:bg-green-700 duration-300 py-2 px-4 md:rounded-lg rounded-md">Create</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        
     );
}
 
export default Navbar;