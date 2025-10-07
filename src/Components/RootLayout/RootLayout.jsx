import { Outlet } from "react-router";
import Footer from "../../Page/Shared/Footer";
import Navbar from "../../Page/Shared/Navbar";

const RootLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
            <Footer />
        </div>
    );
};

export default RootLayout;