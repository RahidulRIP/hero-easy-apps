import { useOutletContext } from "react-router";
import Container from "../../Components/Container/Container";
import { getId } from "../../Utilities/localStorage";
import InstallationCard from "./InstallationCard";
import { useState } from "react";

const Installation = () => {

    const [sortOrder, setSortOrder] = useState();

    const { appsData } = useOutletContext();
    const LSIds = getId();
    const installedApps = appsData.filter(app => LSIds.includes(app.id));

    const sortedApps = installedApps.slice().sort((a, b) =>
        sortOrder === 'High-Low' ? b.size - a.size :
            sortOrder === 'Low-High' ? a.size - b.size :
                0
    );

    const handleShort = (e) => {
        const shortValue = e.target.value;
        setSortOrder(shortValue)
    }
    return (
        <div>
            <Container>
                <div>
                    <div className="text-center space-y-3.5 py-10 md:py-20">
                        <h2 className="text-4xl font-bold">Your Installed Apps</h2>
                        <p >Explore All Trending Apps on the Market developed by us</p>
                    </div>

                    <div>
                        <div className="flex items-center justify-between pb-3.5 p-2.5">
                            <h2>Apps Found</h2>
                            <div>
                                <select onChange={handleShort} value={sortOrder} defaultValue="Sort by Size" className="select appearance-none">
                                    <option disabled={true}>Sort by Size</option>
                                    <option>Low-High</option>
                                    <option>High-Low</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="p-2.5 space-y-8 pb-12 md:pb-28">
                        {
                            sortedApps.map(appData => <InstallationCard key={appData.id} appData={appData} />)
                        }

                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Installation;