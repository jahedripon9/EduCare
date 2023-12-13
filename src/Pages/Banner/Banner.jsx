import img from '../../assets/5437683 1.png';
const Banner = () => {
    return (
        <>
            <div className="hero min-w-screen bg-white">
                <div className="hero-content flex-col lg:flex-row-reverse sm:my-8">
                    <img src={img}  />
                    <div className='mx-auto sm:px-10'>
                        <h1 className="text-5xl font-bold ">Start learning <br /> with us now</h1>
                        <p className="py-6 text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Ipsa laboriosam  voluptates sed beatae?</p>
                        <button className="btn bg-amber-900 text-white font-bold text-1xl">Start learning</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;