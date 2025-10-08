import { useLocation } from "react-router";
import Container from "../Container/Container";
import downloadIcon from '../../assets/icon-downloads.png';
import ratingIcon from '../../assets/icon-ratings.png';
import reviewsIcon from '../../assets/icon-review.png';


const CardDetails = () => {

    const detailsData = useLocation();

    const data = detailsData?.state;
    const { companyName, description, downloads, id, image, ratings, reviews, size, title, ratingAvg } = data;

    return (
        <div className="bg-[#f5f5f5] pt-10 md:pt-20">
            <Container>
                <div className="card card-side gap-10   shadow-sm ">
                    <figure>
                        <img
                            className="md:w-full rounded-lg bg-white p-"
                            src={image}
                            alt="Shoes" />
                    </figure>
                    <div className="flex flex-col w-full">
                        <div>
                            <h2 className="card-title">{title}</h2>
                            <p>Developed by {companyName}</p>
                            <div className="divider w-full"></div>
                        </div>
                        <div className="flex gap-[110px]">
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
                        <div className="card-actions">
                            <button className="btn text-white bg-[#00d293]">Install Now({size / 1000}KB)</button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default CardDetails;