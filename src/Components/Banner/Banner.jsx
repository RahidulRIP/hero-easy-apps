import { FaGooglePlay } from "react-icons/fa";
import Container from "../Container/Container";
import { SiAppstore } from "react-icons/si";
import heroImg from '../../assets/hero.png';

const Banner = () => {
    return (
        <div className="mt-8 md:mt-20">
            <Container>
                <div className="flex flex-col items-center gap-10">
                    <div className="flex flex-col items-center text-center gap-4">

                        <h2 className="md:w-[597px] mx-auto text-7xl font-medium ">We Build <span className="text-[#8754e6]">Productive</span> Apps</h2>

                        <p className=" md:w-[800px] p-2.5 text-[#627382] text-lg">At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

                        <div className="md:pt-6 flex items-center gap-4">
                            <button className="btn text-lg font-semibold"><FaGooglePlay size={26} className="text-[#49bcfc]" />Google Play</button>
                            <button className="btn text-lg font-semibold"><SiAppstore size={26} className="text-white bg-[#0ea1f6] p-0.5 rounded-sm" /> App Store</button>

                        </div>
                    </div>
                    <div>
                        <div>
                            <img className="md:max-w-3xl mx-auto px-2.5" src={heroImg} alt="" />
                        </div>
                    </div>
                </div>
            </Container>
            <div className="text-center bg-gradient-to-r from-[#632EE3] to-[#9F62F2] p-6 md:p-16">
                <Container>
                    <h2 className="text-white text-5xl font-bold mb-10">Trusted by Millions, Built for You</h2>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-40 p-2.5">
                        <div className="text-white md:space-y-4">
                            <h5>Total Downloads</h5>
                            <h1 className="text-6xl font-extrabold">29.0M</h1>
                            <h5>21% more than last month</h5>
                        </div>
                        <div className="text-white md:space-y-4">
                            <h5>Total Reviews</h5>
                            <h1 className="text-6xl font-extrabold">906K</h1>
                            <h5>46% more than last month</h5>
                        </div>
                        <div className="text-white md:space-y-4">
                            <h5>Active Apps</h5>
                            <h1 className="text-6xl font-extrabold">132+</h1>
                            <h5>31 more will Launch</h5>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Banner;