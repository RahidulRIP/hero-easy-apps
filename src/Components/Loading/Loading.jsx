import icon from '../../assets/logo.png'

const Loading = () => {
    return (

        <div className="min-h-screen flex items-center justify-center">
            <img className='w-28 animate-spin' src={icon} alt="" />
        </div>
    );
};

export default Loading;