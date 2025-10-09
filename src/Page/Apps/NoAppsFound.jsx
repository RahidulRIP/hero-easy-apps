import { Link } from "react-router";

const NoAppsFound = () => {
    return (

        <div className="md:min-h-[380px]  flex  flex-col  items-center justify-center gap-10">
            <h2 className="text-6xl font-medium text-center">No Apps Found</h2>
            <Link to={'/apps'}><button className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">Show All Apps</button></Link>
        </div>

    );
};

export default NoAppsFound;