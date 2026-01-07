import TopBar from "./TopBar";
import logo from "../../../assets/images/logo.png"
import { Link } from "react-router";
import NavLinks from "./NavLinks";

const Navbar = () => {

    return (
        <div className="text-center space-y-4 lg:space-y-8">

            <TopBar></TopBar>

            <div className="max-w-28 md:max-w-32 lg:max-w-40 mx-auto">
                <Link to={'/'}><img src={logo} alt="logo" /></Link>
            </div>

            <hr className="text-[#eae9e7]" />

            <NavLinks></NavLinks>

        </div>
    );
};

export default Navbar;