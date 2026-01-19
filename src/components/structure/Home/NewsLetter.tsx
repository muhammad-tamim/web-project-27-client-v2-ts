
const NewsLetter = () => {
    return (
        <div >
            <div className="relative bg-gray-700">
                <div className="absolute inset-x-0 bottom-0">
                    <svg viewBox="0 0 224 12" fill="currentColor" className="w-full -mb-1 text-white" preserveAspectRatio="none">
                        <path
                            d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z">
                        </path>
                    </svg>
                </div>
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-7xl md:px-24 lg:px-8 lg:py-20">
                    <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center space-y-6">
                        <h2 className="font-sans text-3xl text-center font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                            Subscribe to our newsletter
                        </h2>
                        <p className="text-base text-white md:text-lg">
                            Discover new recipes, cooking tips, and food stories from home cooks around the world,delivered fresh to your inbox.
                        </p>
                        <form className="flex flex-col items-center w-full mb-4 md:flex-row md:px-16">
                            <input placeholder="Email"
                                type="email"
                                className="input w-full"
                            />
                            <button className="btn ml-2 mt-4 md:mt-0 bg-[#f89223]">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;