import { Link, NavLink } from "react-router";
import Container from "../../Components/Container/Container";
import headerImg from '../../assets/logo.png'

import './Navbar.css'
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
    const links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/apps'}>Apps</NavLink></li>
        <li><NavLink to={'/installation'}>Installation</NavLink></li>
    </>
    return (
        <div className="bg-base-100 shadow-sm">

            <Container>
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold">
                                {links}
                            </ul>
                        </div>
                        <div className="flex items-center gap-1 w-10">
                            <img src={headerImg} alt="" />
                            <Link to={'/'} className="font-bold text-xl bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">HERO.IO</Link>
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 font-semibold">
                            {links}
                        </ul>
                    </div>
                    <div className="navbar-end">

                        <Link className="btn text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]"><FaGithub size={20} />Contribute</Link>
                    </div>
                </div>
            </Container>

        </div>
    );
};

export default Navbar;