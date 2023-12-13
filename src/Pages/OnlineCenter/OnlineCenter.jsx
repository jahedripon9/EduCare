import img from '../../assets/image 3.png';
const OnlineCenter = () => {
    return (
        <div className='my-10'>
            <div className="hero min-w-screen bg-white">
                <div className="hero-content flex-col lg:flex-row ">
                    <img src={img} className="max-h-sm rounded-lg shadow-2xl" />
                    <div className='sm:mx-20'>
                        <h1 className="text-5xl font-bold">Welcome to the <br /> online centers</h1>
                        <p className="py-6">* Start learning from your experience <br /> * Enhance your skills with us now <br />* Do your favorite course</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OnlineCenter;