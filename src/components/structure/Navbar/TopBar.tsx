import { Link } from "react-router";
import SocialIcons from "../../ui/SocialIcons";
import { LuSquareMenu } from "react-icons/lu";
import { FaHeart, FaLock } from "react-icons/fa";

const TopBar = () => {
    return (
        <div className="bg-[#f2f1ee] py-3 flex items-center justify-around">
            <SocialIcons></SocialIcons>
            <div className="flex items-center gap-1 md:gap-10">
                <Link to={'/'}>
                    <p className="flex items-center md:gap-2 text-xs md:text-base">
                        <span><LuSquareMenu className="text-[#f79e23] hidden md:flex" /></span>
                        <span className="text-[#8c8e91] hover:text-black">Submit Recipe</span>
                    </p>
                </Link>
                <Link to={'/'}>
                    <p className="flex items-center md:gap-2 text-xs md:text-base">
                        <span><FaHeart className="text-[#f79e23] hidden md:flex" /></span>
                        <span className="text-[#8c8e91] hover:text-black">Saved Recipe</span>
                    </p>
                </Link>
                <Link to={'/'}>
                    <p className="flex items-center md:gap-2 text-xs md:text-base">
                        <span><FaLock className="text-[#f79e23] hidden md:flex" /></span>
                        <span className="text-[#8c8e91] hover:text-black">Login</span>
                    </p>
                </Link>
            </div>
        </div>
    );
};

export default TopBar;