const Footer = () => {
    return ( 
        <div>
            <footer className="bg-gray-900 ">
                <div className="md:py-8 md:px-16 p-6 md:flex justify-between"> 
                    <div className="text-gray-100 space-y-2">
                        <h1>The Wreat</h1>
                        <p>Lorem ipsum dolor sit.</p>
                        <div className="md:space-x-4">
                            <i className="fa fa-facebook"></i>
                            <i className="fa fa-instagram"></i>
                            <i className="fa fa-linkedin"></i>
                            <i className="fa fa-github"></i>
                        </div>
                    </div>
                    <div className="text-gray-100 space-y-2">
                        <h3 className="font-medium md:text-xl text-lg">Topics</h3>
                        <ul className="space-y-1">
                            <li>Energy</li>
                            <li>Agriculture</li>
                            <li>Transport</li>
                            <li>Real Estate</li>
                            <li>Waste Management</li>
                        </ul>
                    </div>
                    <div className="text-gray-100 space-y-2">
                        <h3 className="font-medium md:text-xl text-lg">About</h3>
                        <ul className="space-y-1">
                            <li>Links</li>
                            <li>Links</li>
                            <li>Links</li>
                            <li>Links</li>
                            <li>Links</li>
                        </ul>
                    </div>
                    <div className="text-gray-100 space-y-2">
                        <h3 className="font-medium md:text-xl text-lg">Support</h3>
                        <ul className="space-y-1">
                            <li>Contact</li>
                            <li>Help</li>
                            <li>FAQ</li>
                            <li>Links</li>
                            <li>Links</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
     );
}
 
export default Footer;