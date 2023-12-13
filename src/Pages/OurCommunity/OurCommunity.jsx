import img from '../../assets/image 2.png';
const OurCommunity = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-white">
                <div className="hero-content text-center flex-col lg:flex-row-reverse flex-row  sm:my-8">
                    <div className="max-w-md sm:absolute sm:left-36 sm:-mt-80   left-0">
                        <h1 className="text-5xl font-bold">Start growing with our community</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.</p>
                        <button className="btn bg-red-500 sm:-mt-20">Join community</button>
                    </div>
                    <img src={img} className='mx-auto'/>
                </div>
            </div>
        </div>
    );
};

export default OurCommunity;