import { FaHeart } from 'react-icons/fa'
import { Link } from 'react-router'

interface Recipe {
    _id?: string
    image: string
    title: string
    instructions: string
    likes?: number
    cuisine: string
    category: string
    difficulty: string
}

interface CardsProps {
    recipe: Recipe
}

const Cards = ({ recipe }: CardsProps) => {
    return (
        <div className="card bg-base-100 shadow-md hover:shadow-xl transition-shadow duration-300">

            {/* Image */}
            <figure className="relative aspect-4/3 overflow-hidden">

                <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-full object-cover"
                />

                {/* Like overlay */}
                <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/80 backdrop-blur px-2 py-1 rounded-full text-sm shadow">
                    <FaHeart className="text-red-500" />
                    <span className="text-gray-700">
                        {recipe.likes ?? 0}
                    </span>
                </div>

            </figure>

            <div className="card-body gap-4">

                {/* Title */}
                <h2 className="text-xl font-semibold text-neutral-800 text-center line-clamp-2">
                    {recipe.title}
                </h2>

                {/* Meta info */}
                <div className="flex flex-wrap justify-center gap-2 text-sm">

                    <span className="badge badge-outline badge-info">
                        {recipe.cuisine}
                    </span>

                    <span className="badge badge-outline badge-info">
                        {recipe.category}
                    </span>

                    <span className="badge badge-outline badge-info">
                        {recipe.difficulty}
                    </span>

                </div>

                {/* Button */}
                <Link to={`/recipe-details/${recipe._id}`} className="mt-2">
                    <button className="btn bg-[#f89223] btn-block text-white">
                        View Details
                    </button>
                </Link>

            </div>
        </div>
    )
}

export default Cards
