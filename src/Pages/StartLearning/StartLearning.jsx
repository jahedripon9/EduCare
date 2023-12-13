import img from '../../assets/image 1.png';
const Banner = () => {
    return (
        <>
            <div className="hero min-w-screen bg-white">
                <div className="hero-content flex-col lg:flex-row-reverse sm:my-8">
                    <img src={img} className="max-h-sm rounded-lg shadow-2xl" />
                    <div className='mx-auto sm:px-10'>
                        <h1 className="text-4xl font-bold ">Start learning by <br /> creating free account <br /> and get register</h1>
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;