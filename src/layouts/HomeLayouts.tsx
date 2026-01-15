import { Outlet } from "react-router";
import Navbar from "../components/structure/Navbar/Navbar";
import Footer from "../components/structure/Footer";

const HomeLayouts = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayouts; 