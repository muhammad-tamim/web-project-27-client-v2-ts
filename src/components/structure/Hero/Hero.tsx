import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';

import image1 from '../../../assets/images/baked-chicken-breast.jpg'
import image2 from '../../../assets/images/chicken-tikka-masala.jpg'
import image3 from '../../../assets/images/burger.jpg'
import image4 from '../../../assets/images/raspberry.jpg'
import { FaStar } from 'react-icons/fa';

const slideItems = [
    { id: 1, title: 'Baked Chicken Breast', image: image1, rating: 4, description: 'A handful of simple ingredients typify the fresh, vibrant flavors of Greek cooking Lorem ipsum dolor sit amet..' },
    { id: 2, title: 'Chicken Tikka Masala', image: image2, rating: 5, description: 'A handful of simple ingredients typify the fresh, vibrant Lorem ipsum dolor sit amet. flavors of Greek cooking.' },
    { id: 3, title: 'Ultimate Cheese Burger', image: image3, rating: 4, description: 'A handful of simple ingredients Lorem ipsum dolor sit amet. typify the fresh, vibrant flavors of Greek cooking.' },
    { id: 4, title: 'Raspberry Tartlet', image: image4, rating: 3, description: 'A handful Lorem ipsum dolor sit amet. of simple ingredients typify the fresh, vibrant flavors of Greek cooking.' },
]

const Hero = () => {
    return (
        <div>
            <div className='hidden lg:flex'>
                <Swiper
                    slidesPerView={2} spaceBetween={30} pagination={{ clickable: true }} loop={true} navigation={true}
                    modules={[Pagination, Navigation, Autoplay]} autoplay={{ delay: 2500, disableOnInteraction: false, }}>
                    {slideItems.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className='relative h-[calc(100vh-262px)]'>
                                <img className='h-full w-full object-cover' src={item.image} alt={item.title} />

                                {/* Black overlay */}
                                <div className="absolute inset-0 bg-black/60"></div>

                                <div className='absolute inset-0 text-center flex flex-col justify-center items-center gap-5'>
                                    <div className='flex gap-1 items-center'>
                                        {[...Array(item.rating)].map((_, index) => (
                                            <FaStar key={index} className='text-[#f89223]' />
                                        ))}
                                    </div>
                                    <h1 className='text-white font-bold text-5xl'>{item.title}</h1>
                                    <p className='text-white max-w-md'>{item.description}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>

            {/* for small screen */}
            <div className='lg:hidden'>
                <Swiper
                    slidesPerView={1} spaceBetween={30} pagination={{ clickable: true }} loop={true}
                    modules={[Pagination, Autoplay]} autoplay={{ delay: 2500, disableOnInteraction: false, }}>
                    {slideItems.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className='relative h-[calc(100vh-180px)] md:h-[calc(100vh-200px)]'>
                                <img className='h-full w-full object-center' src={item.image} alt={item.title} />

                                {/* Black overlay */}
                                <div className="absolute inset-0 bg-black/60"></div>

                                <div className='absolute inset-0 text-center flex flex-col justify-center items-center gap-1'>
                                    <div className='flex gap-1 items-center'>
                                        {[...Array(item.rating)].map((_, index) => (
                                            <FaStar key={index} className='text-[#f89223]' />
                                        ))}
                                    </div>
                                    <h1 className='text-white font-bold'>{item.title}</h1>
                                    <p className='text-white text-xs px-4'>{item.description}</p>
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