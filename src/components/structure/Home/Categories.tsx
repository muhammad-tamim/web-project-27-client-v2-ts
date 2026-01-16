import { Link } from 'react-router';

import category1 from '../../../assets/images/appetizer.jpg'
import category2 from '../../../assets/images/beef.jpg'
import category3 from '../../../assets/images/baked.jpg'
import category4 from '../../../assets/images/vegetables.jpg'
import category5 from '../../../assets/images/desserts.jpg'

const Categories = () => {
    return (
        <div className='bg-gray-50 py-10'>
            <div className='max-w-7xl mx-auto'>
                <h2 className='text-3xl md:text-5xl text-center font-semibold mb-20'>Recipe Categories</h2>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 justify-items-center'>
                    <Link to={'/recipe-category/:id'}>
                        <img src={category1} alt="image" className='rounded-full w-48 hover:rotate-12 transition-transform duration-500' />
                        <p className='text-center text-lg font-medium mt-2'>Appetizers</p>
                    </Link>
                    <Link to={'/recipe-category/:id'}>
                        <img src={category2} alt="image" className='rounded-full w-48 hover:rotate-12 transition-transform duration-500' />
                        <p className='text-center text-lg font-medium mt-5'>Appetizers</p>
                    </Link>
                    <Link to={'/recipe-category/:id'}>
                        <img src={category3} alt="image" className='rounded-full w-48 hover:rotate-12 transition-transform duration-500' />
                        <p className='text-center text-lg font-medium mt-5'>Appetizers</p>
                    </Link>
                    <Link to={'/recipe-category/:id'}>
                        <img src={category4} alt="image" className='rounded-full w-48 hover:rotate-12 transition-transform duration-500' />
                        <p className='text-center text-lg font-medium mt-5'>Appetizers</p>
                    </Link>
                    <Link to={'/recipe-category/:id'}>
                        <img src={category5} alt="image" className='rounded-full w-48 hover:rotate-12 transition-transform duration-500' />
                        <p className='text-center text-lg font-medium mt-5'>Appetizers</p>
                    </Link>
                </div >
            </div >
        </div>
    );
};

export default Categories;