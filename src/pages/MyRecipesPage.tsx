import PagesBanner from '../components/ui/PagesBanner'
import Cards from '../components/ui/Cards'
import bg from '../assets/images/Recipes-background1.jpg'
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import LoadingSpinner from '../components/ui/LoadingSpinner'
import { AuthContext } from '../contexts/AuthContext'
import { Link } from 'react-router'
import toast from 'react-hot-toast'


interface Recipe {
    _id: string
    title: string
    image: string
    instructions: string
    email: string
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

    const handleDelete = (id: string) => {
        axios.delete(`http://localhost:3000/recipe/${id}`)
            .then(res => {
                if (res.data.deletedCount) {
                    toast.success("Recipe Deleted")

                    const remainingRecipes = recipes.filter(
                        recipe => recipe._id !== id
                    )
                    setRecipes(remainingRecipes)
                }
            })
    }


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
                            <Cards key={recipe._id} handleDelete={handleDelete} recipe={recipe}></Cards>
                        )}

                    </div >

                </div >
            </div>
        </div>
    );
};

export default MyRecipesPage;