import downloadIcon from '../../assets/icon-downloads.png';
import ratingIcon from '../../assets/icon-ratings.png';

const InstallationCard = ({ appData }) => {
    const { downloads, image, size, title, ratingAvg } = appData;
    return (
        <div className='flex items-center justify-between bg-[#ffffff] rounded-sm p-7'>
            <div className='flex flex-col md:flex-row md:items-center gap-5'>
                <div>
                    <img className='bg-[#d9d9d9] rounded-lg w-20 p-2.5 mx-auto' src={image} alt="" />
                </div>
                <div className=''>
                    <h2 className='text-lg font-medium'>{title}</h2>
                    <div className='flex gap-4'>
                        <div className='flex items-center  gap-1.5'>
                            <img className="w-4" src={downloadIcon} alt="" />
                            <h2 className="text-[#00d293] font-medium">{downloads / 1000000}M</h2>
                        </div>
                        <div className='flex items-center gap-1.5'>
                            <img className="w-4" src={ratingIcon} alt="" />
                            <h2 className="text-[#ff892d] font-medium">{ratingAvg}</h2>
                        </div>
                        <h5 className='text-[#627382]'><span> {size / 1000} KB</span></h5>
                    </div>
                </div>
            </div>
            <button className='btn text-white bg-[#00D390]'>Uninstall</button>
        </div>
    );
};

export default InstallationCard;