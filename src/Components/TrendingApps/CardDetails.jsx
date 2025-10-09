import { useLocation } from "react-router";
import Container from "../Container/Container";
import downloadIcon from '../../assets/icon-downloads.png';
import ratingIcon from '../../assets/icon-ratings.png';
import reviewsIcon from '../../assets/icon-review.png';
import VerticalChart from "./VerticalChart";
import { getId, setId } from "../../Utilities/localStorage";
import { useEffect, useState } from "react";



const CardDetails = () => {

    const [installButtonText, setInstallButtonText] = useState(false);
    const [LSIds, setLSIds] = useState(getId());


    const detailsData = useLocation();

    const data = detailsData?.state;
    const { companyName, description, downloads, image, ratings, reviews, size, title, ratingAvg, id } = data;


    const handleInstallButton = (id) => {
        setId(id);
        setLSIds(getId());
    };

    useEffect(() => {
        if (LSIds.includes(data?.id)) {
            setInstallButtonText(true);
        }
    }, [data, LSIds])


    return (
        <div className="bg-[#f5f5f5] pt-10 md:pt-20">
            <Container>
                <div className="flex flex-col md:flex-row  gap-10   shadow-sm ">
                    <div className="p-2.5 md:p-10">
                        <img
                            className="rounded-lg bg-white p-4"
                            src={image}
                            alt="Shoes" />
                    </div>
                    <div className="flex flex-col items-center md:items-start md:justify-center  w-full">
                        <div>
                            <h2 className="card-title">{title}</h2>
                            <p>Developed by {companyName}</p>

                        </div>
                        <div className="divider w-full"></div>
                        <div className="flex gap-8  md:gap-[110px]">
                            <div>
                                <img className="w-10 mb-2" src={downloadIcon} alt="" />
                                <p className="text-[#001931]">Downloads</p>
                                <h2 className="text-4xl font-extrabold">{downloads / 1000000}M</h2>
                            </div>
                            <div>
                                <img className="w-10 mb-2" src={ratingIcon} alt="" />
                                <p className="text-[#001931]">Average Ratings</p>
                                <h2 className="text-4xl font-extrabold">{ratingAvg}</h2>
                            </div>
                            <div>
                                <img className="w-10 mb-2" src={reviewsIcon} alt="" />
                                <p className="text-[#001931]">Total Reviews</p>
                                <h2 className="text-4xl font-extrabold">{reviews / 1000}K</h2>
                            </div>
                        </div>
                        <div className="card-actions mt-8 pb-2.5">
                            <button disabled={installButtonText} onClick={() => handleInstallButton(id)} className="btn text-white bg-[#00d293] cursor-pointer">
                                {
                                    installButtonText ? `Installed` : `Install Now (${size / 1000}KB)`

                                }
                            </button>
                        </div>
                    </div>

                </div>
            </Container>
            <div className="mt-2 md:mt-10">
                <Container>
                    <h2 className="text-2xl font-semibold md:pl-8 mb-2.5">Ratings</h2>
                    <VerticalChart ratings={ratings}></VerticalChart>
                    <div className="pt-5 pb-10 md:pb-20 md:pl-8 p-2.5">
                        <h2 className="text-2xl font-semibold">Description:</h2>
                        <p className="md:w-1/2 text-justify mt-3.5">{description}</p>
                    </div>
                </Container>
            </div>




        </div>
    );
};

export default CardDetails;