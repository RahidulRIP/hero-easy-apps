import { useNavigate } from 'react-router';
import downloadIcon from '../../assets/icon-downloads.png';
import ratingIcon from '../../assets/icon-ratings.png';

const TrendingApps = ({ data }) => {
    const { companyName, description, downloads, id, image, ratings, reviews, size, title, ratingAvg } = data;
    // console.log(data)
    const navigate = useNavigate();
    return (
        <div onClick={() => navigate(`/cardDetails/${id}`, { state: data })}>

            <div className="card bg-base-100 shadow-sm p-5">
                <figure>
                    <img
                        className="rounded-lg bg-[#d9d9d9] p-5"
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="mt-3.5">
                    <h2 className="card-title">
                        {title}
                    </h2>

                    <div className="flex items-center justify-between mt-1.5">
                        <div className="badge bg-[#f1f5e9] p-4">
                            <img className='w-4' src={downloadIcon} alt="" />
                            <div className='text-[#00D390] font-medium'>{downloads / 1000000}M
                            </div>
                        </div>
                        <div className="badge bg-[#FFF0E1] p-4">
                            <img className='w-4' src={ratingIcon} alt="" />
                            <div className='text-[#FF8811] font-medium'>
                                {ratingAvg}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default TrendingApps;