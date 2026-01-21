import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import LoadingSpinner from '../../../ui/LoadingSpinner';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import { FaHeart } from 'react-icons/fa';

interface Recipe {
    _id: string
    title: string
    image: string
    instructions: string
    likes: number
    cuisine: string
    category: string
    difficulty: string
    prepTime: number
    cookTime: number
    totalTime: number
}

const Hero = () => {

    const [recipes, setRecipes] = useState<Recipe[]>([])
    const [pending, setPending] = useState(true)

    useEffect(() => {
        axios.get('https://web-project-27-server-v1-monolithic.onrender.com/top-recipes')
            .then(res => {
                setRecipes(res.data)
                setPending(false)
            })
    }, [])

    if (pending) return <LoadingSpinner />

    return (
        <div>

            {/* for larger screens */}
            <div className='hidden lg:flex'>
                <Swiper
                    slidesPerView={2} spaceBetween={5} pagination={{ clickable: true }} loop={true} navigation={true}
                    modules={[Pagination, Navigation, Autoplay]} autoplay={{ delay: 2500, disableOnInteraction: false, }}>
                    {recipes.map((recipe) => (
                        <SwiperSlide key={recipe._id}>
                            <div className='relative min-h-[calc(100vh-64px)]'>
                                <img className='h-[calc(100vh-64px)] w-full object-fill relative' src={recipe.image} alt={recipe.title} />

                                <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/80 backdrop-blur px-2 py-1 rounded-full text-sm shadow">
                                    <FaHeart className="text-red-500" />
                                    <span className="text-gray-700">
                                        {recipe.likes ?? 0}
                                    </span>
                                </div>

                                {/* Black overlay */}
                                <div className="absolute inset-0 bg-black/60"></div>

                                <div className='absolute inset-0 text-center flex flex-col justify-center items-center gap-5'>
                                    <h1 className='text-white font-bold text-5xl'>{recipe.title}</h1>
                                    <div className="flex flex-wrap justify-center gap-2 text-sm">

                                        <span className="badge badge-outline badge-warning">
                                            {recipe.cuisine}
                                        </span>

                                        <span className="badge badge-outline badge-warning">
                                            {recipe.category}
                                        </span>

                                        <span className="badge badge-outline badge-warning">
                                            {recipe.difficulty}
                                        </span>

                                    </div>
                                    <Link to={`/recipe-details/${recipe._id}`}><button className='btn bg-[#f89223] text-white'>View Details</button></Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>

            {/* for small screens */}
            <div className='lg:hidden -mb-20'>
                <Swiper
                    slidesPerView={1} spaceBetween={5} pagination={{ clickable: true }} loop={true} navigation={true}
                    modules={[Pagination, Navigation, Autoplay]} autoplay={{ delay: 2500, disableOnInteraction: false, }}>
                    {recipes.map((recipe) => (
                        <SwiperSlide key={recipe._id}>
                            <div className='relative md:h-[calc(100vh-64px)]'>
                                <img className='md:h-[calc(100vh-64px)] w-full object-fill relative' src={recipe.image} alt={recipe.title} />

                                <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/80 backdrop-blur px-2 py-1 rounded-full text-sm shadow">
                                    <FaHeart className="text-red-500" />
                                    <span className="text-gray-700">
                                        {recipe.likes ?? 0}
                                    </span>
                                </div>

                                {/* Black overlay */}
                                <div className="absolute inset-0 bg-black/60"></div>

                                <div className='absolute inset-0 text-center flex flex-col justify-center items-center gap-1'>
                                    <h1 className='text-white font-bold text-xl md:text-4xl'>{recipe.title}</h1>
                                    <div className="flex flex-wrap justify-center gap-2 text-sm">

                                        <span className="badge badge-outline badge-warning">
                                            {recipe.cuisine}
                                        </span>

                                        <span className="badge badge-outline badge-warning">
                                            {recipe.category}
                                        </span>

                                        <span className="badge badge-outline badge-warning">
                                            {recipe.difficulty}
                                        </span>

                                    </div>
                                    <Link to={`/recipe-details/:${recipe._id}`}><button className='btn btn-sm md:btn-md bg-[#f89223] text-white mt-2'>View Details</button></Link>
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