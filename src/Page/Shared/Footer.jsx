import { Link } from 'react-router';
import headerImg from '../../assets/logo.png'
import { FaFacebook, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import Container from '../../Components/Container/Container';

const Footer = () => {
    return (
        <div className='bg-black'>
            {/* <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4">
                <aside className="grid-flow-col items-center">
                    <div className="flex items-center gap-1 w-10">
                        <img src={headerImg} alt="" />
                        <Link to={'/'} className="font-bold text-xl ">HERO.IO</Link>
                    </div>
                </aside>



                <div className='w-full border'>
                    

                        <div>
                            <Link>
                                <FaXTwitter />
                            </Link>
                            <Link>
                                <FaLinkedinIn />
                            </Link>
                            <Link>
                                <FaFacebook />
                            </Link>
                        </div>
                    
                </div>



            </footer> */}
            <Container>
                <div className='text-white items-center md:flex justify-between p-6'>
                    <div>
                        <div className="flex items-center gap-1 w-8">
                            <img src={headerImg} alt="" />
                            <Link to={'/'} className="font-bold text-xl ">HERO.IO</Link>
                        </div>
                    </div>
                    <div>

                    </div>
                    <div>
                        <h2 className='text-lg font-medium mb-1.5'>Social Links</h2>
                        <div className='flex items-center gap-2.5'>
                            <Link>
                                <FaXTwitter />
                            </Link>
                            <Link>
                                <FaLinkedinIn />
                            </Link>
                            <Link>
                                <FaFacebook />
                            </Link>
                        </div>
                    </div>
                </div>
               <div className="border-b-2 border-gray-900 my-2"></div>
                <h2 className='text-white text-center'>Copyright © 2025 - All right reserved</h2>
            </Container>
        </div>
    );
};

export default Footer;