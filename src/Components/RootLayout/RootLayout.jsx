import { Outlet, useNavigation } from "react-router";
import Footer from "../../Page/Shared/Footer";
import Navbar from "../../Page/Shared/Navbar";
import Loading from "../Loading/Loading";
import { use } from "react";

const RootLayout = ({ allData }) => {

    const allAppsData = use(allData);

    const navigation = useNavigation();
    // console.log(navigation)

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-1 bg-[#f5f5f5]">
                {
                    navigation?.state === "loading"
                        ? <Loading />
                        : <Outlet context={{ appsData: allAppsData }}></Outlet>
                }

            </div>
            <Footer />
        </div>
    );
};

export default RootLayout;