import logo from "../../assets/images/logo.png"
import { Link, NavLink } from "react-router";
import { CiMenuFries } from "react-icons/ci";
import { navItems } from "../../utils/navItems";

const Navbar = () => {

    return (
        <>
            {/* for large screens */}
            <div className="hidden md:flex justify-around items-center bg-[#f2f1ee] py-3 sticky top-0 z-50">

                {/* left */}
                <div className="w-28">
                    <Link to={'/'}><img src={logo} alt="logo" /></Link>
                </div>

                {/* middle */}
                <div className="space-x-3 lg:space-x-6">
                    {navItems.map((item) => <NavLink key={item.id} to={item.to}
                        className={({ isActive }) => isActive ? 'text-black font-medium lg:text-xl' : 'text-[#8e9092] lg:text-lg'}>
                        {item.label}
                    </NavLink>)}
                </div>

                {/* right */}
                <div className="flex items-center gap-3 lg:gap-6">

                    {/* auth */}
                    <NavLink to={'/sign-in'} className={({ isActive }) => isActive ? 'text-black font-medium lg:text-xl' : 'text-[#8e9092] lg:text-lg'}>SignIn</NavLink>
                    <NavLink to={'/sign-up'} className={({ isActive }) => isActive ? 'text-black font-medium lg:text-xl' : 'text-[#8e9092] lg:text-lg'}>SignUp</NavLink>

                    {/* profile */}
                    <div className="dropdown dropdown-end ">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content mt-3 w-52 p-2 shadow bg-[#f2f1ee] opacity-80">
                            <li>
                                <Link to={'/profile'} className="justify-between">
                                    Setting
                                </Link>
                            </li>
                            <li><a className="btn">Logout</a></li>
                        </ul>
                    </div>
                </div>

            </div>

            {/* for small screens */}
            <div className="md:hidden flex justify-between bg-[#f2f1ee] py-3 px-4">

                {/* left side */}
                <div className="w-28">
                    <Link to={'/'}><img src={logo} alt="logo" /></Link>
                </div>


                {/* right side */}
                <div className="flex items-center gap-2">

                    {/* profile */}
                    <div className="flex items-center gap-6">

                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu menu-sm dropdown-content mt-3 w-52 p-2 shadow bg-[#f2f1ee] opacity-80">
                                <li>
                                    <Link to={'/profile'} className="justify-between">
                                        Setting
                                    </Link>
                                </li>
                                <li><a className="btn">Logout</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* drawer */}
                    <div className="drawer drawer-end">
                        <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                            {/* Page content here */}
                            <label htmlFor="my-drawer-1" className="drawer-button"><CiMenuFries size={30} className="text-[#8e9092]" /></label>
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer-1" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu bg-base-200 min-h-full w-40 p-4">
                                {/* Sidebar content here */}
                                <li>
                                    {navItems.map((item) => <NavLink key={item.id} to={item.to}
                                        className={({ isActive }) => isActive ? 'text-black font-medium' : 'text-[#8e9092]'}>
                                        {item.label}
                                    </NavLink>)}
                                </li>
                                <li>
                                    <NavLink to={'/sign-in'} className={({ isActive }) => isActive ? 'text-black font-medium' : 'text-[#8e9092]'}>SignIn</NavLink>
                                    <NavLink to={'/sign-up'} className={({ isActive }) => isActive ? 'text-black font-medium' : 'text-[#8e9092]'}>SignUp</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
};

export default Navbar;