import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router";

const SocialIcons = () => {
    return (
        <div className="flex items-center gap-1 md:gap-4">
            <Link to={'#'}><FaFacebook className="text-[#8c8e91]" /></Link>
            <Link to={'#'}><FaTwitter className="text-[#8c8e91]" /></Link>
            <Link to={'#'}><FaInstagram className="text-[#8c8e91]" /></Link>
            <Link to={'#'}><FaYoutube className="text-[#8c8e91]" /></Link>
        </div>
    );
};

export default SocialIcons;