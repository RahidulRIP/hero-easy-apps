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
                <div className='text-white items-center md:flex justify-evenly p-6 space-y-5 md:space-y-0'>
                    <div>
                        <div className="flex items-center gap-1 w-8">
                            <img src={headerImg} alt="" />
                            <Link to={'/'} className="font-bold text-xl ">HERO.IO</Link>
                        </div>
                    </div>
                    <div className='md:flex  gap-36 space-y-10 md:space-y-10'>
                        <form>
                            <h6 className="footer-title">Newsletter</h6>
                            <fieldset className="w-80">
                                <label>Enter your email address</label>
                                <div className="join">
                                    <input
                                        type="text"
                                        placeholder="username@site.com"
                                        className="input input-bordered join-item" />
                                    <button className="btn btn-primary join-item">Subscribe</button>
                                </div>
                            </fieldset>
                        </form>
                        <nav className='flex flex-col'>
                            <h6 className="footer-title">Company</h6>
                            <a className="link link-hover">About us</a>
                            <a className="link link-hover">Contact</a>
                            <a className="link link-hover">Jobs</a>
                            <a className="link link-hover">Press kit</a>
                        </nav>
                        <nav className='flex flex-col'>
                            <h6 className="footer-title">Legal</h6>
                            <a className="link link-hover">Terms of use</a>
                            <a className="link link-hover">Privacy policy</a>
                            <a className="link link-hover">Cookie policy</a>
                        </nav>
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