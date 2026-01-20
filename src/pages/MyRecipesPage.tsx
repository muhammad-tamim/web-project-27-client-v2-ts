

import image1 from '../assets/images/baked-chicken-breast.jpg'
import image2 from '../assets/images/chicken-tikka-masala.jpg'
import image3 from '../assets/images/burger.jpg'
import image4 from '../assets/images/raspberry.jpg'
import PagesBanner from '../components/ui/PagesBanner'
import Cards from '../components/ui/Cards'

import bg from '../assets/images/chicken-tikka-masala.jpg'
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import LoadingSpinner from '../components/ui/LoadingSpinner'
import { AuthContext } from '../contexts/AuthContext'
import { Link } from 'react-router'

const slideItems = [
    { id: 1, title: 'Baked Chicken Breast', image: image1, rating: 4, description: 'A handful of simple ingredients typify the fresh, vibrant flavors of Greek cooking Lorem ipsum dolor sit amet..', author: 'Md. Tamim', authorImage: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" },
    { id: 2, title: 'Chicken Tikka Masala', image: image2, rating: 5, description: 'A handful of simple ingredients typify the fresh, vibrant Lorem ipsum dolor sit amet. flavors of Greek cooking.', author: 'Md. Tamim', authorImage: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" },
    { id: 3, title: 'Ultimate Cheese Burger', image: image3, rating: 4, description: 'A handful of simple ingredients Lorem ipsum dolor sit amet. typify the fresh, vibrant flavors of Greek cooking.', author: 'Md. Tamim', authorImage: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" },
    { id: 4, title: 'Raspberry Tartlet', image: image4, rating: 3, description: 'A handful Lorem ipsum dolor sit amet. of simple ingredients typify the fresh, vibrant flavors of Greek cooking.', author: 'Md. Tamim', authorImage: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" },
    { id: 5, title: 'Ultimate Cheese Burger', image: image3, rating: 4, description: 'A handful of simple ingredients Lorem ipsum dolor sit amet. typify the fresh, vibrant flavors of Greek cooking.', author: 'Md. Tamim', authorImage: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" },
    { id: 6, title: 'Raspberry Tartlet', image: image4, rating: 3, description: 'A handful Lorem ipsum dolor sit amet. of simple ingredients typify the fresh, vibrant flavors of Greek cooking.', author: 'Md. Tamim', authorImage: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" },
]

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

const MyRecipesPage = () => {

    const authContext = useContext(AuthContext);
    const user = authContext?.user ?? null;

    const [recipes, setRecipes] = useState<Recipe[]>([])
    const [pending, setPending] = useState(true)

    useEffect(() => {
        axios.get(`http://localhost:3000/recipes/${user?.email}`)
            .then(res => {
                setRecipes(res.data)
                setPending(false)
            })
    }, [user?.email])

    if (pending) return <LoadingSpinner minHScreen="min-h-screen" />

    return (
        <div>
            <PagesBanner title={"My Recipes"} bg={bg}></PagesBanner>

            {recipes.length === 0 && <>
                <p className='Text-center text-red-500'>You don't have any recipe yet.</p>
                <Link to={'/add-recipes'}><button className='btn bg-amber-500'>Submit A Recipe</button></Link>
            </>}

            <div className='py-10 lg:py-20'>
                <div className='max-w-7xl mx-auto'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10 px-5 xl:px-0'>

                        {recipes.map((recipe) =>
                            <Cards key={recipe._id} recipe={recipe}></Cards>
                        )}

                    </div >

                </div >
            </div>
        </div>
    );
};

export default MyRecipesPage;