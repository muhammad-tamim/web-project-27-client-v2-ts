import { Link } from "react-router";

import indian from '../../../assets/images/indian-flag.avif'
import mexican from '../../../assets/images/Mexican-flag.png'
import italian from '../../../assets/images/italian-flag.avif'
import chinese from '../../../assets/images/chaines-flag.webp'
import korean from '../../../assets/images/korian-flag.webp'
import japanese from '../../../assets/images/japanese-flag.jpg'

const Cuisines = () => {
    return (
        <div className='bg-gray-50 py-10'>
            <div className='max-w-7xl mx-auto'>
                <h2 className='text-3xl md:text-5xl text-center font-semibold mb-20'>Cuisine</h2>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10 justify-items-center'>
                    <Link to={'/recipe-cuisine/Indian'}>
                        <img src={indian} alt="image" className='rounded-full object-cover size-48 hover:rotate-12 transition-transform duration-500' />
                        <p className='text-center text-lg font-medium mt-5'>Indian</p>
                    </Link>
                    <Link to={'/recipe-cuisine/Mexican'}>
                        <img src={mexican} alt="image" className='rounded-full object-cover size-48 hover:rotate-12 transition-transform duration-500' />
                        <p className='text-center text-lg font-medium mt-5'>Mexican</p>
                    </Link>
                    <Link to={'/recipe-cuisine/Italian'}>
                        <img src={italian} alt="image" className='rounded-full object-cover size-48 hover:rotate-12 transition-transform duration-500' />
                        <p className='text-center text-lg font-medium mt-5'>Italian</p>
                    </Link>
                    <Link to={'/recipe-cuisine/Chinese'}>
                        <img src={chinese} alt="image" className='rounded-full object-cover size-48 hover:rotate-12 transition-transform duration-500' />
                        <p className='text-center text-lg font-medium mt-5'>Chinese</p>
                    </Link>
                    <Link to={'/recipe-cuisine/Korean'}>
                        <img src={korean} alt="image" className='rounded-full object-cover size-48 hover:rotate-12 transition-transform duration-500' />
                        <p className='text-center text-lg font-medium mt-5'>Korean</p>
                    </Link>
                    <Link to={'/recipe-cuisine/Japanese'}>
                        <img src={japanese} alt="image" className='rounded-full object-cover size-48 hover:rotate-12 transition-transform duration-500' />
                        <p className='text-center text-lg font-medium mt-5'>Japanese</p>
                    </Link>
                </div >
            </div >
        </div>
    );
};

export default Cuisines;