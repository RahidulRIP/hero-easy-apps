import { Link, useOutletContext } from "react-router";
import Banner from "../../Components/Banner/Banner";
import TrendingApps from "../../Components/TrendingApps/TrendingApps";
import Container from "../../Components/Container/Container";
import VerticalChart from "../../Components/TrendingApps/VerticalChart";

const Home = () => {

    const { appsData } = useOutletContext();

    return (
        <div>
            <Banner />
            <div className="bg-[#f5f5f5] p-2.5">
                <div className="text-center mt-10 md:mt-20 mb-5 md:mb-10 space-y-4">
                    <h2 className="text-5xl font-bold">Trending Apps</h2>
                    <p className="text-lg text-[#627382]">Explore All Trending Apps on the Market developed by us</p>
                </div>
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {
                            appsData.slice(0, 8).map(data => <TrendingApps key={data.id} data={data}></TrendingApps>)
                        }
                    </div>
                </Container>
                <div className="text-center mb-10 md:mb-20 mt-5 md:mt-10">
                    <Link to={'apps'}>
                        <button className="btn text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-8">Show All</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;        