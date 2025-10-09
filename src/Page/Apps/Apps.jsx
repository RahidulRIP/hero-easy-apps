import { useOutletContext } from "react-router";
import TrendingApps from "../../Components/TrendingApps/TrendingApps";
import Container from "../../Components/Container/Container";
import { useState } from "react";
import NoAppsFound from "./NoAppsFound";
import Loading from "../../Components/Loading/Loading";

const Apps = () => {
    const { appsData } = useOutletContext();

    const [searchValue, setSearchValue] = useState('');
    const [loading, setLoading] = useState(false)



    const handleSearch = (e) => {
        e.preventDefault();
        const searchValue = e.target.value;
        setSearchValue(searchValue);
        setLoading(true);

        setTimeout(() => {
            setLoading(false)
        }, 500)
    };


    const filteredAppsData = appsData.filter(data => data?.title.toLowerCase().includes(searchValue.toLowerCase()));

    const emptySearch = filteredAppsData?.length === 0;

    return (
        <div className="bg-[#f5f5f5] pb-10 md:pb-20">
            <Container>
                <div className="text-center pt-10 md:pt-20 pb-5 md:pb-10 p-2.5">
                    <h2 className="text-3xl md:text-5xl font-bold pb-3.5">Our All Applications</h2>
                    <p className="text-[#627382]">Explore All Apps on the Market developed by us. We code for Millions</p>
                </div>

                <div className="flex items-center justify-between pb-3.5 p-2.5">
                    <h2 className="text-lg md:text-2xl font-semibold">({appsData.length}) Apps Found</h2>
                    <div className="">
                        <label className="input md:w-[400px]">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="m21 21-4.3-4.3"></path>
                                </g>
                            </svg>
                            <input
                                onChange={handleSearch}
                                type="search"
                                required
                                placeholder="Search"
                                value={searchValue}
                            />
                        </label>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2.5">
                    {
                        loading ? '' : filteredAppsData.map(data => <TrendingApps key={data.id} data={data}></TrendingApps>)

                    }
                </div>


            </Container>
            {
                loading ? <Loading /> : emptySearch && <NoAppsFound />
            }
        </div>
    );
};

export default Apps;