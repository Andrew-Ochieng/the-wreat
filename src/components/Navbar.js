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
                <div className="flex items-center justify-between ">
                    <div className="flex items-center justify-between">
                        <Link className="text-xl uppercase font-semibold" to='/'>The Wreat</Link>
                        <button onClick={showMenu} className="md:hidden">
                            <i className="fa fa-bars"></i> 
                            {/* <i className="fa fa-times"></i> */}
                        </button>
                    </div>

                    <div ref={menuRef} className="md:flex hidden">
                        <ul className="md:flex items-center">
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