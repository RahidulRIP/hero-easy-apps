import { Outlet, useLoaderData, useNavigation } from "react-router";
import Footer from "../../Page/Shared/Footer";
import Navbar from "../../Page/Shared/Navbar";

const RootLayout = () => {
    const allAppsData = useLoaderData();
    const navigation = useNavigation();
    // console.log(navigation)
    // console.log(allAppsData)
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-1">
                {
                    navigation?.state === "loading"
                        ? 'Loading......'
                        : <Outlet context={{ appsData: allAppsData }}></Outlet>
                }

            </div>
            <Footer />
        </div>
    );
};

export default RootLayout;