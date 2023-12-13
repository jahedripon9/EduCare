
const Subscribe = () => {
    return (
        <div>
            <section className="text-gray-600 body-font sm:mx-28">
                <div className="container px-5 py-5 mx-auto  bg-yellow-100 ">

                    <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end  " >
                        <div className="relative flex-grow w-full">
                            <input type="text" placeholder="Your name" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="relative flex-grow w-full">
                            <input type="text" placeholder="Your email address" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="relative flex-grow w-full">
                            <button className="text-white bg-red-500 border-0 py-2 px-12 focus:outline-none hover:bg-red-700 rounded text-lg">Subscribe</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Subscribe;