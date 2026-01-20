import { useParams } from "react-router";
import PagesBanner from "../components/ui/PagesBanner";
import Cards from "../components/ui/Cards";
import bg from '../assets/images/raspberry.jpg'
import { useEffect, useState } from "react";
import axios from "axios";
import LoadingSpinner from "../components/ui/LoadingSpinner";


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


const RecipeCategoryPage = () => {

    const { category } = useParams();


    const [recipes, setRecipes] = useState<Recipe[]>([])
    const [pending, setPending] = useState(true)
    useEffect(() => {
        axios.get(`http://localhost:3000/recipe-category/${category}`)
            .then(res => {
                setRecipes(res.data)
                setPending(false)
            })
    }, [category])

    if (pending) return <LoadingSpinner minHScreen="min-h-screen" />


    return (
        <div>
            <PagesBanner title={category!} bg={bg}></PagesBanner>
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

export default RecipeCategoryPage;