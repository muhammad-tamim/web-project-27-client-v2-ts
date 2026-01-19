import image1 from '../../../assets/images/baked-chicken-breast.jpg'
import image2 from '../../../assets/images/chicken-tikka-masala.jpg'
import image3 from '../../../assets/images/burger.jpg'
import image4 from '../../../assets/images/raspberry.jpg'
import { Link } from 'react-router';
import Cards from '../../ui/Cards';

const slideItems = [
    { id: 1, title: 'Baked Chicken Breast', image: image1, rating: 4, description: 'A handful of simple ingredients typify the fresh, vibrant flavors of Greek cooking Lorem ipsum dolor sit amet..', author: 'Md. Tamim', authorImage: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" },
    { id: 2, title: 'Chicken Tikka Masala', image: image2, rating: 5, description: 'A handful of simple ingredients typify the fresh, vibrant Lorem ipsum dolor sit amet. flavors of Greek cooking.', author: 'Md. Tamim', authorImage: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" },
    { id: 3, title: 'Ultimate Cheese Burger', image: image3, rating: 4, description: 'A handful of simple ingredients Lorem ipsum dolor sit amet. typify the fresh, vibrant flavors of Greek cooking.', author: 'Md. Tamim', authorImage: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" },
    { id: 4, title: 'Raspberry Tartlet', image: image4, rating: 3, description: 'A handful Lorem ipsum dolor sit amet. of simple ingredients typify the fresh, vibrant flavors of Greek cooking.', author: 'Md. Tamim', authorImage: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" },
    { id: 5, title: 'Ultimate Cheese Burger', image: image3, rating: 4, description: 'A handful of simple ingredients Lorem ipsum dolor sit amet. typify the fresh, vibrant flavors of Greek cooking.', author: 'Md. Tamim', authorImage: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" },
    { id: 6, title: 'Raspberry Tartlet', image: image4, rating: 3, description: 'A handful Lorem ipsum dolor sit amet. of simple ingredients typify the fresh, vibrant flavors of Greek cooking.', author: 'Md. Tamim', authorImage: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" },
]

const MostLikedRecipes = () => {
    return (
        <div className='bg-gray-50 py-10'>
            <div className='max-w-7xl mx-auto'>
                <h2 className='text-3xl md:text-5xl text-center font-semibold mb-20'>Top Recipes</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10 px-5 xl:px-0'>

                    {slideItems.map((item) =>
                        <Cards key={item.id} item={item}></Cards>
                    )}

                </div >

                <Link to={'/all-recipes'}><button className='mx-auto flex btn btn-lg text-white bg-[#f89223] mt-20'>All Recipes</button></Link>
            </div >
        </div>
    );
};

export default MostLikedRecipes;