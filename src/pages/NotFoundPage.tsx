import PagesBanner from "../components/ui/PagesBanner";

import bg from '../assets/images/appetizer.jpg'
import { Link, useLocation } from "react-router";

const NotFoundPage = () => {
    const location = useLocation();
    return (
        <div>
            <PagesBanner title={"404 Error"} bg={bg}></PagesBanner>
            <div className='py-10 lg:py-20 px-4'>
                <div className='max-w-3xl mx-auto bg-base-100 shadow-lg border-gray-200 py-10 md:py-16 px-5 text-center space-y-8'>
                    <h2 className="text-xl md:text-3xl font-medium">We couldn't find the page you're looking for</h2>
                    <p className="text-gray-400">No route matches URL "{location.pathname}"</p>
                    <Link to={'/'}><button className="btn btn-lg bg-[#f89223]">Back To Home</button></Link>
                </div >
            </div>
        </div>
    );
};

export default NotFoundPage;