import chefs from '../../../assets/images/contact-chefs3.jpg'

const ContactUs = () => {
    return (
        <div className="bg-gray-50 max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 justify-center items-center gap-y-12">
                <div className="lg:col-span-2 p-8 w-full max-w-2xl mx-auto">
                    <div>
                        <h2 className="text-3xl text-slate-900 font-bold">Contact us</h2>
                        <p className="text-[15px] text-slate-600 leading-relaxed mt-4">Have questions or need assistance? We're here to help! Reach out to our team for support, inquiries, or collaboration opportunities.</p>
                    </div>
                    <form className="mt-8">
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                                <label className='text-sm text-slate-900 font-medium mb-2 block'>Name</label>
                                <input type='text' placeholder='Enter Name'
                                    className="w-full py-3 px-4 text-slate-800 bg-white border border-gray-300 focus:border-slate-900 text-sm outline-0 rounded-md" />
                            </div>
                            <div>
                                <label className='text-sm text-slate-900 font-medium mb-2 block'>Email</label>
                                <input type='email' placeholder='Enter Email'
                                    className="w-full py-3 px-4 text-slate-800 bg-white border border-gray-300 focus:border-slate-900 text-sm outline-0 rounded-md" />
                            </div>
                            <div>
                                <label className='text-sm text-slate-900 font-medium mb-2 block'>Phone No.</label>
                                <input type='number' placeholder='Enter Phone No.'
                                    className="w-full py-3 px-4 text-slate-800 bg-white border border-gray-300 focus:border-slate-900 text-sm outline-0 rounded-md" />
                            </div>
                            <div>
                                <label className='text-sm text-slate-900 font-medium mb-2 block'>Subject</label>
                                <input type='text' placeholder='Enter Subject'
                                    className="w-full py-3 px-4 text-slate-800 bg-white border border-gray-300 focus:border-slate-900 text-sm outline-0 rounded-md" />
                            </div>
                            <div className="col-span-full">
                                <label className='text-sm text-slate-900 font-medium mb-2 block'>Message</label>
                                <textarea placeholder='Enter Message' rows="6"
                                    className="w-full px-4 text-slate-800 bg-white border border-gray-300 focus:border-slate-900 text-sm pt-3 outline-0 rounded-md"></textarea>
                            </div>
                        </div>
                        <button type='button'
                            className="text-white bg-[#f89223] font-medium tracking-wide text-sm px-4 py-3 w-full border-0 outline-0 rounded-md cursor-pointer mt-6">Send message</button>
                    </form>
                </div>

                <div className="relative lg:h-screen">
                    <img src={chefs} alt="app-img"
                        className="w-full h-full  lg:absolute lg:right-0 lg:top-0 lg:bottom-0" />
                </div>
            </div>
        </div>
    );
};

export default ContactUs;