
import { Link } from 'react-router';
import Cards from '../../ui/Cards';
import { useEffect, useState } from 'react';
import axios from 'axios';
import LoadingSpinner from '../../ui/LoadingSpinner';

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

const MostLikedRecipes = () => {
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
        <div className='bg-gray-50 py-10'>
            <div className='max-w-7xl mx-auto'>
                <h2 className='text-3xl md:text-5xl text-center font-semibold mb-20'>Top Recipes</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10 px-5 xl:px-0'>

                    {recipes.map((recipe) =>
                        <Cards key={recipe._id} recipe={recipe} />
                    )}

                </div >

                <Link to={'/all-recipes'}><button className='mx-auto flex btn btn-lg text-white bg-[#f89223] mt-20'>All Recipes</button></Link>
            </div >
        </div>
    );
};

export default MostLikedRecipes;