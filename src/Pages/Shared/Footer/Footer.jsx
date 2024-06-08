import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../../assets/Vector.png';
import { faFacebook,  faLinkedinIn, faSquareInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
    return (
        <div>
            <footer className="text-gray-600 body-font bg-yellow-100 mx-auto">
                <div className="container px-5 py-8 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                            <img src={logo} alt="" />
                            <span className="ml-3 text-xl">EduCare</span>
                        </a>
                        <p className="mt-2 text-sm text-gray-500">Air plant banjo lyft occupy retro adaptogen indego</p>
                    </div>
                    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-bold text-gray-900 tracking-widest text-bold mb-3">Follow us</h2>
                            <nav className="list-none mb-8">
                                
                                <FontAwesomeIcon className=' text-3xl' icon={faSquareInstagram} />                                
                                <FontAwesomeIcon className='mx-4 text-3xl' icon={faLinkedinIn} />                                
                                <FontAwesomeIcon className='mx-0 text-3xl' icon={faFacebook} />                               
                                <FontAwesomeIcon className='mx-2 text-3xl' icon={faTwitter} />                                
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-bold text-gray-900 tracking-widest text-bold mb-3">Useful Links</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Our Projects</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">FAQ’s</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">News and Updates</a>
                                </li>
                                
                            </nav>
                        </div>
                        <div className="lg:w-2/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-bold text-gray-900 tracking-widest text-bold mb-3">Contacts</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Address : 4-5 Main road , Delhi</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Email : educare@gmail.com</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Phone Number : +91 4533433265</a>
                                </li>
                                
                            </nav>
                        </div>
                        
                    </div>
                </div> <hr />
                <div className="bg-yellow-100">
                    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row justify-center">
                        <p className="text-gray-500 text-sm text-center sm:text-left">© 2023 EduCare —
                            <a href="https://github.com/jahedripon9" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">Jahed Ahmed</a>
                        </p>
                        
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;