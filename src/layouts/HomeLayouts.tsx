import { Outlet } from "react-router";
import Footer from "../components/structure/Footer";
import Navbar from "../components/structure/Navbar";

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