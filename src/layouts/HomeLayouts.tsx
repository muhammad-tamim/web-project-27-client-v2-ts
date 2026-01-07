import { Outlet } from "react-router";
import Navbar from "../components/structure/Navbar/Navbar";

const HomeLayouts = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            {/* <h1>Footer</h1> */}
        </div>
    );
};

export default HomeLayouts; 