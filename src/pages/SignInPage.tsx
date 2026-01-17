import { FcGoogle } from 'react-icons/fc';
import { IoEyeOutline } from 'react-icons/io5';
import { MdOutlineMailOutline } from 'react-icons/md';
import { Link } from 'react-router';

const SignInPage = () => {
    return (
        <div className="py-10 lg:py-20 flex flex-col items-center justify-center px-4 lg:px-8 xl:px-0">
            <div className="grid md:grid-cols-2 items-center gap-4 max-md:gap-8 max-w-6xl max-md:max-w-lg w-full p-4 [box-shadow:0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md">
                <div className="md:max-w-md w-full px-4 py-4">
                    <form>
                        <div className="mb-12">
                            <h1 className="text-slate-900 text-3xl font-bold">Sign in</h1>
                            <p className="text-[15px] mt-6 text-slate-600">Don't have an account <Link to={'/sign-up'} className="text-[#f89223] font-medium hover:underline ml-1 whitespace-nowrap">Register here</Link></p>
                        </div>

                        <label className="text-slate-900 text-[13px] font-medium block mb-2">Email</label>
                        <div className="relative flex items-center">
                            <input name="email" type="email" required className="input w-full border-0 bg-gray-100 focus:outline-[#f89223]" placeholder="Enter email" />
                            <span className='size-5 absolute right-2 text-slate-400'><MdOutlineMailOutline /></span>
                        </div>

                        <label className="mt-8 text-slate-900 text-[13px] font-medium block mb-2">Password</label>
                        <div className="relative flex items-center">
                            <input name="password" type="password" required className="input w-full border-0 bg-gray-100 focus:outline-[#f89223]" placeholder="Enter password" />
                            <span className='size-5 absolute right-2 text-slate-400'><IoEyeOutline /></span>
                        </div>

                        <p className="text-[#f89223] font-medium text-sm hover:underline mt-8 text-right cursor-pointer">
                            Forgot Password?
                        </p>

                        <button className="mt-12 btn w-full text-white bg-[#f89223]">
                            Sign in
                        </button>

                        <div className="divider">or</div>

                        <button type="button" className="w-full flex items-center justify-center gap-4 btn">
                            <FcGoogle className='size-5' />
                            Continue with google
                        </button>

                    </form>
                </div>

                <div className="w-full h-full flex items-center bg-[#f89223] rounded-xl p-8">
                    <img src="https://readymadeui.com/signin-image.webp" className="w-full aspect-12/12 object-contain" alt="login-image" />
                </div>
            </div>
        </div>
    );
};

export default SignInPage;