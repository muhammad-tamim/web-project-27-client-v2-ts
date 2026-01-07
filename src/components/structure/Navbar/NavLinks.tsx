import { CiMenuFries } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";
import { MdOutlineKeyboardArrowDown, MdOutlineMenu } from "react-icons/md";
import { Link, NavLink } from "react-router";

const NavLinks = () => {
    return (
        <div>
            <div className="space-x-10 hidden md:block">
                <NavLink to={'/'} className={({ isActive }) => isActive ? 'text-black' : 'text-[#8c8e91] hover:text-black'}>Home</NavLink>

                {/* Browse Recipes */}
                <div className="dropdown dropdown-hover">
                    <div className="hover:text-black text-[#8c8e91] flex items-center gap-1 cursor-pointer" tabIndex={0} role="button">
                        <span >Browse Recipes</span>
                        <span ><MdOutlineKeyboardArrowDown /></span>
                    </div >
                    <ul tabIndex="-1" className="dropdown-content border-t-3 border-t-[#f79e23] menu bg-base-100 z-1 w-44 p-2 shadow-sm">
                        <li className="group border-b border-[#eae9e7]">
                            <Link to={'/allRecipes'}>
                                <span className="hidden group-hover:block group-hover:text-[#f79e23]"><GoDotFill /></span>
                                <span>All Recipes</span>
                            </Link>
                        </li>
                        <li className="group border-b border-[#eae9e7]">
                            <Link to={'/appetizers'}>
                                <span className="hidden group-hover:block group-hover:text-[#f79e23]"><GoDotFill /></span>
                                <span>Appetizers</span>
                            </Link>
                        </li>
                        <li className="group border-b border-[#eae9e7]">
                            <Link to={'/beef'}>
                                <span className="hidden group-hover:block group-hover:text-[#f79e23]"><GoDotFill /></span>
                                <span>Beef</span>
                            </Link>
                        </li>
                        <li className="group border-b border-[#eae9e7]">
                            <Link to={'/chicken'}>
                                <span className="hidden group-hover:block group-hover:text-[#f79e23]"><GoDotFill /></span>
                                <span>Chicken</span>
                            </Link>
                        </li>
                        <li className="group border-b border-[#eae9e7]">
                            <Link to={'/vegetarian'}>
                                <span className="hidden group-hover:block group-hover:text-[#f79e23]"><GoDotFill /></span>
                                <span>Vegetarian</span>
                            </Link>
                        </li>
                        <li className="group">
                            <Link to={'/desserts'}>
                                <span className="hidden group-hover:block group-hover:text-[#f79e23]"><GoDotFill /></span>
                                <span>Desserts</span>
                            </Link>
                        </li>
                    </ul>
                </div>

                <NavLink to={'/myRecipes'} className={({ isActive }) => isActive ? 'text-black' : 'text-[#8c8e91] hover:text-black'}>My Recipes</NavLink>
                <NavLink to={'/news'} className={({ isActive }) => isActive ? 'text-black' : 'text-[#8c8e91] hover:text-black'}>News</NavLink>
                <NavLink to={'/contact'} className={({ isActive }) => isActive ? 'text-black' : 'text-[#8c8e91] hover:text-black'}>Contact</NavLink>
            </div>

            {/* for small screen */}
            <div className="dropdown w-full md:hidden">
                <div className="text-black cursor-pointer flex justify-center" tabIndex={0} role="button">
                    <MdOutlineMenu className="size-10" />
                </div >
                <ul tabIndex="-1" className="dropdown-content border-t-3 border-t-[#f79e23] w-full menu bg-base-100 z-1 p-2 shadow-sm">
                    <li className="group border-b border-[#eae9e7]">
                        <Link to={'/allRecipes'}>
                            <span className="hidden group-hover:block group-hover:text-[#f79e23]"><GoDotFill /></span>
                            <span className="hover:text-black text-[#8c8e91]">Home</span>
                        </Link>
                    </li>
                    <li className="group border-b border-[#eae9e7]">
                        <Link to={'/chicken'}>
                            <span className="hidden group-hover:block group-hover:text-[#f79e23]"><GoDotFill /></span>
                            <span className="hover:text-black text-[#8c8e91]">ALL Recipes</span>
                        </Link>
                    </li>
                    <li className="group border-b border-[#eae9e7] ">
                        <Link to={'/chicken'}>
                            <span className="hidden group-hover:block group-hover:text-[#f79e23]"><GoDotFill /></span>
                            <span className="hover:text-black text-[#8c8e91]">My Recipes</span>
                        </Link>
                    </li>
                    <li className="group border-b border-[#eae9e7]">
                        <Link to={'/vegetarian'}>
                            <span className="hidden group-hover:block group-hover:text-[#f79e23]"><GoDotFill /></span>
                            <span className="hover:text-black text-[#8c8e91]">News</span>
                        </Link>
                    </li>
                    <li className="group">
                        <Link to={'/desserts'}>
                            <span className="hidden group-hover:block group-hover:text-[#f79e23]"><GoDotFill /></span>
                            <span className="hover:text-black text-[#8c8e91]">Contact</span>
                        </Link>
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default NavLinks;