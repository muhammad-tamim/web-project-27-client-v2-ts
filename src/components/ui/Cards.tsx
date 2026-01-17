import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router';

interface Recipe {
    image: string;
    author: string;
}

interface CardsProps {
    item: Recipe;
}

const Cards = ({ item }: CardsProps) => {
    return (
        <div className="card bg-base-100 shadow-sm">
            <figure>
                <img
                    src={item.image}
                    alt="Shoes" />
            </figure>
            <div className="card-body gap-5">
                <h2 className="text-center font-semibold text-2xl">
                    Tart Pecan Pie
                </h2>

                <p>A handful of simple ingredients typify the fresh, vibrant flavors of Greek cooking.</p>

                <div className='flex justify-between'>
                    <div className='flex gap-2 items-center'>
                        <div>
                            <div className="avatar">
                                <div className="w-6 rounded-full">
                                    <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                                </div>
                            </div>
                        </div>

                        <p>By {item.author}</p>
                    </div>
                    <div className='flex gap-1 items-center'>
                        <span><FaHeart className='text-red-500'></FaHeart></span>
                        <span>13 likes</span>
                    </div>
                </div>

                <Link to={'/recipe-details/:id'}><button className='w-full btn text-white bg-[#f89223]'>View Details</button></Link>
            </div>
        </div>
    );
};

export default Cards;