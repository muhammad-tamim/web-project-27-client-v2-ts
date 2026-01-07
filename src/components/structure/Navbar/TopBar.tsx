import { NavLink } from "react-router";
import SocialIcons from "../../ui/SocialIcons";
import { LuSquareMenu } from "react-icons/lu";
import { FaHeart, FaLock } from "react-icons/fa";

const TopBar = () => {
    return (
        <div className="bg-[#f2f1ee] py-3 flex items-center justify-around">
            <SocialIcons></SocialIcons>
            <div className="flex items-center gap-1 md:gap-10">
                <NavLink to={'/submitRecipe'} className={({ isActive }) => isActive ? 'text-black' : 'text-[#8c8e91]'}>
                    <p className="flex items-center md:gap-2 text-xs md:text-base">
                        <span><LuSquareMenu className="text-[#f79e23] hidden md:flex" /></span>
                        <span className="hover:text-black">Submit Recipe</span>
                    </p>
                </ NavLink>
                <NavLink to={'/savedRecipe'} className={({ isActive }) => isActive ? 'text-black' : 'text-[#8c8e91]'}>
                    <p className="flex items-center md:gap-2 text-xs md:text-base">
                        <span><FaHeart className="text-[#f79e23] hidden md:flex" /></span>
                        <span className="hover:text-black">Saved Recipe</span>
                    </p>
                </NavLink>
                <NavLink to={'/signIn'} className={({ isActive }) => isActive ? 'text-black' : 'text-[#8c8e91]'}>
                    <p className="flex items-center md:gap-2 text-xs md:text-base">
                        <span><FaLock className="text-[#f79e23] hidden md:flex" /></span>
                        <span className="hover:text-black">SignIn</span>
                    </p>
                </NavLink>
            </div>
        </div>
    );
};

export default TopBar;