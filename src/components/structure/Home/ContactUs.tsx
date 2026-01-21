import { useState, type FormEvent } from "react";
import chefs from '../../../assets/images/contact-chefs3.jpg';

const ContactUs = () => {
    // Form state
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Here you can handle form submission (e.g., send to backend)
        console.log({ name, email, phone, subject, message });
        alert("Message sent! (Check console for data)");
    };

    return (
        <div className='bg-gray-50'>
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-3 justify-center items-center gap-y-12">

                    {/* Form Section */}
                    <div className="lg:col-span-2 p-8 w-full max-w-2xl mx-auto">
                        <div>
                            <h2 className="text-3xl text-slate-900 font-bold">Contact us</h2>
                            <p className="text-[15px] text-slate-600 leading-relaxed mt-4">
                                Have questions or need assistance? We're here to help! Reach out to our team for support, inquiries, or collaboration opportunities.
                            </p>
                        </div>

                        <form className="mt-8" onSubmit={handleSubmit}>
                            <div className="grid sm:grid-cols-2 gap-4">

                                {/* Name */}
                                <div>
                                    <label className='text-sm text-slate-900 font-medium mb-2 block'>Name</label>
                                    <input
                                        type='text'
                                        placeholder='Enter Name'
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                        className="w-full py-3 px-4 text-slate-800 bg-white border border-gray-300 focus:border-slate-900 text-sm outline-0 rounded-md"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label className='text-sm text-slate-900 font-medium mb-2 block'>Email</label>
                                    <input
                                        type='email'
                                        placeholder='Enter Email'
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        className="w-full py-3 px-4 text-slate-800 bg-white border border-gray-300 focus:border-slate-900 text-sm outline-0 rounded-md"
                                    />
                                </div>

                                {/* Phone */}
                                <div>
                                    <label className='text-sm text-slate-900 font-medium mb-2 block'>Phone No.</label>
                                    <input
                                        type='text'
                                        placeholder='Enter Phone No.'
                                        value={phone}
                                        onChange={e => setPhone(e.target.value)}
                                        className="w-full py-3 px-4 text-slate-800 bg-white border border-gray-300 focus:border-slate-900 text-sm outline-0 rounded-md"
                                    />
                                </div>

                                {/* Subject */}
                                <div>
                                    <label className='text-sm text-slate-900 font-medium mb-2 block'>Subject</label>
                                    <input
                                        type='text'
                                        placeholder='Enter Subject'
                                        value={subject}
                                        onChange={e => setSubject(e.target.value)}
                                        className="w-full py-3 px-4 text-slate-800 bg-white border border-gray-300 focus:border-slate-900 text-sm outline-0 rounded-md"
                                    />
                                </div>

                                {/* Message */}
                                <div className="col-span-full">
                                    <label className='text-sm text-slate-900 font-medium mb-2 block'>Message</label>
                                    <textarea
                                        placeholder='Enter Message'
                                        rows={6}
                                        value={message}
                                        onChange={e => setMessage(e.target.value)}
                                        className="w-full px-4 text-slate-800 bg-white border border-gray-300 focus:border-slate-900 text-sm pt-3 outline-0 rounded-md"
                                    ></textarea>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type='submit'
                                className="text-white bg-[#f89223] font-medium tracking-wide text-sm px-4 py-3 w-full border-0 outline-0 rounded-md cursor-pointer mt-6"
                            >
                                Send message
                            </button>
                        </form>
                    </div>

                    {/* Image Section */}
                    <div className="hidden lg:flex relative lg:h-full">
                        <img
                            src={chefs}
                            alt="chefs"
                            className="w-full h-full lg:absolute lg:right-0 lg:top-0 lg:bottom-0"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
