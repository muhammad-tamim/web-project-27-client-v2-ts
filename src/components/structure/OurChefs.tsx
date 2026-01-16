import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { Link } from "react-router";

import chef1 from '../../assets/images/chef-1.jpg'
import chef2 from '../../assets/images/chef-2.jpg'
import chef3 from '../../assets/images/chef-3.jpg'
import chef4 from '../../assets/images/chef-4.jpg'
import chef5 from '../../assets/images/chef-5.jpg'
import chef6 from '../../assets/images/chef-6.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const chefs = [
    {
        id: 1,
        name: "Christine Eve",
        title: "Executive Chef",
        company: "Le Gourmet Kitchen",
        image: chef1,
    },
    {
        id: 2,
        name: "Daniel Brooks",
        title: "Sous Chef",
        company: "Urban Spice",
        image: chef2,
    },
    {
        id: 3,
        name: "Maria Gonzalez",
        title: "Pastry Chef",
        company: "Sweet Cravings Bakery",
        image: chef3,
    },
    {
        id: 4,
        name: "James Anderson",
        title: "Grill Master",
        company: "Fire & Smoke BBQ",
        image: chef4,
    },
    {
        id: 5,
        name: "Aisha Rahman",
        title: "Asian Cuisine Specialist",
        company: "Spice Route Asia",
        image: chef5,
    },
    {
        id: 6,
        name: "Luca Romano",
        title: "Italian Cuisine Chef",
        company: "Casa Italiano",
        image: chef6,
    },
];


const OurChefs = () => {
    return (
        <div className="bg-gray-50 py-10">
            <div className="max-w-7xl mx-auto ">
                <h2 className='text-3xl md:text-5xl text-center font-semibold mb-20'>Top Chef's</h2>

                {/* for large screens */}
                <div className="hidden lg:flex">
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={20}
                        loop={true}
                        autoplay={{ delay: 2500, disableOnInteraction: false, }}
                        modules={[Pagination, Autoplay]}>
                        {chefs.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="max-w-xs p-6 shadow-md border border-gray-100 rounded-xl sm:px-12">
                                    <img src={item.image} alt="" className="w-32 h-32 mx-auto rounded-full aspect-square" />
                                    <div className="space-y-4 text-center ">
                                        <div className="my-2 space-y-1">
                                            <h2 className="text-xl font-semibold sm:text-2xl">{item.name}</h2>
                                            <p className="px-5 text-xs sm:text-base">{item.title}</p>
                                            <p className="px-5 text-xs sm:text-base">{item.company}</p>
                                        </div>
                                        <div className="flex justify-center pt-2 space-x-4 align-center">
                                            <Link to={'#'} className="p-2 rounded-md">
                                                <FaGithub></FaGithub>
                                            </Link>
                                            <Link to={'#'} className="p-2 rounded-md">
                                                <FaLinkedin></FaLinkedin>
                                            </Link>
                                            <Link to={'#'} className="p-2 rounded-md">
                                                <FaTwitter></FaTwitter>
                                            </Link>
                                            <Link to={'#'} className="p-2 rounded-md">
                                                <MdMail />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </div>

                {/* for medium screens */}
                <div className="hidden md:flex lg:hidden">
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={20}
                        loop={true}
                        autoplay={{ delay: 2500, disableOnInteraction: false, }}
                        modules={[Pagination, Autoplay]}>
                        {chefs.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="max-w-xs mx-auto p-6 shadow-lg rounded-xl sm:px-12">
                                    <img src={item.image} alt="" className="w-32 h-32 mx-auto rounded-full aspect-square" />
                                    <div className="space-y-4 text-center ">
                                        <div className="my-2 space-y-1">
                                            <h2 className="text-xl font-semibold sm:text-2xl">{item.name}</h2>
                                            <p className="px-5 text-xs sm:text-base">{item.title}</p>
                                            <p className="px-5 text-xs sm:text-base">{item.company}</p>
                                        </div>
                                        <div className="flex justify-center pt-2 space-x-4 align-center">
                                            <Link to={'#'} className="p-2 rounded-md">
                                                <FaGithub></FaGithub>
                                            </Link>
                                            <Link to={'#'} className="p-2 rounded-md">
                                                <FaLinkedin></FaLinkedin>
                                            </Link>
                                            <Link to={'#'} className="p-2 rounded-md">
                                                <FaTwitter></FaTwitter>
                                            </Link>
                                            <Link to={'#'} className="p-2 rounded-md">
                                                <MdMail />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </div>

                {/* for small screens */}
                <div className="md:hidden">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={20}
                        loop={true}
                        autoplay={{ delay: 2500, disableOnInteraction: false, }}
                        modules={[Pagination, Autoplay]}>
                        {chefs.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="max-w-xs mx-auto p-6 shadow-lg rounded-xl sm:px-12">
                                    <img src={item.image} alt="" className="w-32 h-32 mx-auto rounded-full aspect-square" />
                                    <div className="space-y-4 text-center ">
                                        <div className="my-2 space-y-1">
                                            <h2 className="text-xl font-semibold sm:text-2xl">{item.name}</h2>
                                            <p className="px-5 text-xs sm:text-base">{item.title}</p>
                                            <p className="px-5 text-xs sm:text-base">{item.company}</p>
                                        </div>
                                        <div className="flex justify-center pt-2 space-x-4 align-center">
                                            <Link to={'#'} className="p-2 rounded-md">
                                                <FaGithub></FaGithub>
                                            </Link>
                                            <Link to={'#'} className="p-2 rounded-md">
                                                <FaLinkedin></FaLinkedin>
                                            </Link>
                                            <Link to={'#'} className="p-2 rounded-md">
                                                <FaTwitter></FaTwitter>
                                            </Link>
                                            <Link to={'#'} className="p-2 rounded-md">
                                                <MdMail />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default OurChefs;