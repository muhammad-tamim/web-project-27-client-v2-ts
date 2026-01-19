import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';

import image1 from '../../../../assets/images/baked-chicken-breast.jpg'
import image2 from '../../../../assets/images/chicken-tikka-masala.jpg'
import image3 from '../../../../assets/images/burger.jpg'
import image4 from '../../../../assets/images/raspberry.jpg'
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const slideItems = [
    { id: 1, title: 'Baked Chicken Breast', image: image1, rating: 4, description: 'A handful of simple ingredients typify the fresh, vibrant flavors of Greek cooking Lorem ipsum dolor sit amet..' },
    { id: 2, title: 'Chicken Tikka Masala', image: image2, rating: 5, description: 'A handful of simple ingredients typify the fresh, vibrant Lorem ipsum dolor sit amet. flavors of Greek cooking.' },
    { id: 3, title: 'Ultimate Cheese Burger', image: image3, rating: 4, description: 'A handful of simple ingredients Lorem ipsum dolor sit amet. typify the fresh, vibrant flavors of Greek cooking.' },
    { id: 4, title: 'Raspberry Tartlet', image: image4, rating: 3, description: 'A handful Lorem ipsum dolor sit amet. of simple ingredients typify the fresh, vibrant flavors of Greek cooking.' },
]

const Hero = () => {
    return (
        <div>

            {/* for larger screens */}
            <div className='hidden lg:flex'>
                <Swiper
                    slidesPerView={2} spaceBetween={5} pagination={{ clickable: true }} loop={true} navigation={true}
                    modules={[Pagination, Navigation, Autoplay]} autoplay={{ delay: 2500, disableOnInteraction: false, }}>
                    {slideItems.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className='relative min-h-[calc(100vh-64px)]'>
                                <img className='h-[calc(100vh-64px)] w-full object-fill' src={item.image} alt={item.title} />

                                {/* Black overlay */}
                                <div className="absolute inset-0 bg-black/60"></div>

                                <div className='absolute inset-0 text-center flex flex-col justify-center items-center gap-5'>
                                    {/* <div className='flex gap-1 items-center'>
                                        {[...Array(item.rating)].map((_, index) => (
                                            <FaStar key={index} className='text-[#f89223]' />
                                        ))}
                                    </div> */}
                                    <h1 className='text-white font-bold text-5xl'>{item.title}</h1>
                                    <p className='text-white max-w-md'>{item.description}</p>
                                    <Link to={`/recipe-details/${item.title}`}><button className='btn bg-[#f89223] text-white'>View Details</button></Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>

            {/* for small screens */}
            <div className='lg:hidden'>
                <Swiper
                    slidesPerView={1} spaceBetween={5} pagination={{ clickable: true }} loop={true} navigation={true}
                    modules={[Pagination, Navigation, Autoplay]} autoplay={{ delay: 2500, disableOnInteraction: false, }}>
                    {slideItems.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className='relative md:h-[calc(100vh-64px)]'>
                                <img className='md:h-[calc(100vh-64px)] w-full object-fill' src={item.image} alt={item.title} />

                                {/* Black overlay */}
                                <div className="absolute inset-0 bg-black/60"></div>

                                <div className='absolute inset-0 text-center flex flex-col justify-center items-center gap-1'>
                                    <div className='flex gap-1 items-center'>
                                        {[...Array(item.rating)].map((_, index) => (
                                            <FaStar key={index} className='text-[#f89223]' />
                                        ))}
                                    </div>
                                    <h1 className='text-white font-bold text-xl md:text-4xl'>{item.title}</h1>
                                    <p className='text-white max-w-xs md:max-w-xl mx-auto px-2 text-xs md:text-lg'>{item.description}</p>
                                    <Link to={'/recipe-details/:id'}><button className='btn btn-sm md:btn-md bg-[#f89223] text-white mt-2'>View Details</button></Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>

        </div>

    );
};

export default Hero;