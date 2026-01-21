import logo from "../../assets/images/logo.png";
import { Link, NavLink } from "react-router";
import { CiMenuFries } from "react-icons/ci";
import { navItems } from "../../utils/navItems";
import { IoIosArrowDown } from "react-icons/io";
import { AuthContext } from "../../contexts/AuthContext";
import toast from "react-hot-toast";
import { useContext } from "react";
import userImage from '../../assets/images/no-user.png';

const Navbar = () => {
    const authContext = useContext(AuthContext);
    if (!authContext) return null;

    const { user, signOutUser } = authContext;

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                toast.success("SignOut successful");
            })
            .catch(err => {
                toast.error("SignOut failed");
                console.error(err);
            });
    };

    return (
        <>
            {/* Large screens */}
            <div className="hidden lg:flex justify-around items-center bg-gray-50 py-3 sticky top-0 z-50">

                {/* Left */}
                <div className="w-28">
                    <Link to="/"><img src={logo} alt="logo" /></Link>
                </div>

                {/* Middle */}
                <div className="space-x-3 lg:space-x-4 xl:space-x-6">
                    {navItems.map((item) =>
                        item.children ? (
                            <div key={item.id.toString()} className="dropdown dropdown-center">
                                <div
                                    tabIndex={0}
                                    role="button"
                                    className="list-none cursor-pointer flex items-center gap-1 text-[#8e9092] lg:text-lg"
                                >
                                    {item.label} <IoIosArrowDown />
                                </div>

                                <ul
                                    tabIndex={-1}
                                    className="menu mt-4 dropdown-content bg-base-100 rounded-box z-10 w-40 p-2 shadow rounded-none border-[#f89223] border-t-2"
                                >
                                    {item.children.map((child) => (
                                        <li key={child.id.toString()}>
                                            <NavLink
                                                to={child.to}
                                                className={({ isActive }) =>
                                                    isActive
                                                        ? "font-medium text-black"
                                                        : "text-gray-600"
                                                }
                                            >
                                                {child.label}
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ) : (
                            <NavLink
                                key={item.id.toString()}
                                to={item.to}
                                className={({ isActive }) =>
                                    isActive ? "text-black font-medium lg:text-lg" : "text-[#8e9092] lg:text-base"
                                }
                            >
                                {item.label}
                            </NavLink>
                        )
                    )}
                </div>

                {/* Right */}
                <div className="flex items-center gap-2 lg:gap-4">

                    {/* Auth buttons */}
                    {!user && (
                        <>
                            <NavLink
                                to="/sign-in"
                                className={({ isActive }) =>
                                    isActive ? "text-black font-medium lg:text-lg" : "text-[#8e9092] lg:text-base"
                                }
                            >
                                SignIn
                            </NavLink>
                            <NavLink
                                to="/sign-up"
                                className={({ isActive }) =>
                                    isActive ? "text-black font-medium lg:text-lg" : "text-[#8e9092] lg:text-base"
                                }
                            >
                                SignUp
                            </NavLink>
                        </>
                    )}

                    {/* Profile */}
                    {user && (
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL ?? userImage} alt="user avatar" />
                                </div>
                            </div>
                            <ul
                                tabIndex={-1}
                                className="space-y-3 menu mt-3 dropdown-content bg-base-100 rounded-box z-10 w-40 p-2 shadow rounded-none border-[#f89223] border-t-2"
                            >
                                <li>
                                    <Link to="/profile" className="btn">
                                        Setting
                                    </Link>
                                </li>
                                <li>
                                    <button onClick={handleSignOut} className="btn btn-error">
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            {/* Small screens */}
            <div className="lg:hidden flex justify-between bg-gray-50 py-3 px-4">
                {/* Left */}
                <div className="w-28">
                    <Link to="/"><img src={logo} alt="logo" /></Link>
                </div>

                {/* Right */}
                <div className="flex items-center gap-2">
                    {/* Profile */}
                    {user && (
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL ?? userImage} alt="user avatar" />
                                </div>
                            </div>
                            <ul
                                tabIndex={-1}
                                className="menu menu-sm dropdown-content mt-3 w-52 p-2 shadow bg-[#f2f1ee] opacity-80"
                            >
                                <li>
                                    <Link to="/profile" className="justify-between">
                                        Setting
                                    </Link>
                                </li>
                                <li>
                                    <button onClick={handleSignOut} className="btn btn-error">
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        </div>
                    )}

                    {/* Drawer */}
                    <div className="drawer drawer-end">
                        <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                            <label htmlFor="my-drawer-1" className="drawer-button">
                                <CiMenuFries size={30} className="text-[#8e9092]" />
                            </label>
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer-1" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu bg-base-200 min-h-full w-40 md:w-96 p-4">
                                {navItems.map((item) =>
                                    item.children ? (
                                        <li key={item.id.toString()}>
                                            <span className="font-medium text-gray-700 flex items-center gap-1">
                                                {item.label} <IoIosArrowDown size={14} />
                                            </span>
                                            <ul className="pl-4 mt-1 space-y-1">
                                                {item.children.map((child) => (
                                                    <li key={child.id.toString()}>
                                                        <NavLink
                                                            to={child.to}
                                                            className={({ isActive }) =>
                                                                isActive ? "text-black font-medium" : "text-[#8e9092]"
                                                            }
                                                        >
                                                            {child.label}
                                                        </NavLink>
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                    ) : (
                                        <li key={item.id.toString()}>
                                            <NavLink
                                                to={item.to}
                                                className={({ isActive }) =>
                                                    isActive ? "text-black font-medium" : "text-[#8e9092]"
                                                }
                                            >
                                                {item.label}
                                            </NavLink>
                                        </li>
                                    )
                                )}
                                {!user && (
                                    <li className="mt-2 flex flex-col gap-2">
                                        <NavLink
                                            to="/sign-in"
                                            className={({ isActive }) =>
                                                isActive ? 'text-black font-medium' : 'text-[#8e9092]'
                                            }
                                        >
                                            SignIn
                                        </NavLink>
                                        <NavLink
                                            to="/sign-up"
                                            className={({ isActive }) =>
                                                isActive ? 'text-black font-medium' : 'text-[#8e9092]'
                                            }
                                        >
                                            SignUp
                                        </NavLink>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
