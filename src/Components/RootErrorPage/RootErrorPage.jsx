import { MdErrorOutline } from "react-icons/md";
import { Link } from "react-router";

const RootErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col gap-3.5 items-center justify-center">
            <MdErrorOutline size={60} className="text-red-600"/>
            <h2 className="text-4xl font-semibold">App is Not Found</h2>
            <p>The app are looking for does not exist or has been removed</p>
            <Link to={'/'}><button className="btn btn-error text-white text-lg">Back to Home</button></Link>
        </div>
    );
};

export default RootErrorPage;