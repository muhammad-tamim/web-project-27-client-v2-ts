import PagesBanner from '../components/ui/PagesBanner'
import { useParams } from 'react-router'
import { FaHeart } from 'react-icons/fa'
import { MdAccessTime } from 'react-icons/md'
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import LoadingSpinner from '../components/ui/LoadingSpinner'
import toast from 'react-hot-toast'
import { AuthContext } from '../contexts/AuthContext'

interface Recipe {
    _id: string
    title: string
    image: string
    instructions: string
    likes: number
    likedBy?: string[] // emails of users who liked
    cuisine: string
    category: string
    difficulty: string
    prepTime: number
    cookTime: number
    totalTime: number
    ingredients: string
    email: string
}

const RecipeDetailsPage = () => {

    const { id } = useParams<{ id: string }>()
    const [recipe, setRecipe] = useState<Recipe | null>(null)
    const [pending, setPending] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [likes, setLikes] = useState(0)

    const authContext = useContext(AuthContext);
    const user = authContext?.user ?? null;

    // Fetch recipe details
    useEffect(() => {
        if (!id) return
        axios.get(`http://localhost:3000/recipe-details/${id}`)
            .then(res => {
                setRecipe(res.data)
                setLikes(res.data.likes)
                setPending(false)
            })
            .catch(err => {
                console.error(err)
                setError('Failed to load recipe')
                setPending(false)
            })
    }, [id])

    const updateLikes = () => {
        if (!user) return toast.error("Login to like!");
        if (!recipe || !id) return;

        // Prevent liking own recipe
        if (user.email === recipe.email) {
            return toast.error("You can't like your own recipe!");
        }

        if (!user.email) return;

        // Prevent multiple likes        
        if (recipe.likedBy?.includes(user.email)) {
            return toast.error("You already liked this recipe!");
        }

        // Like it
        axios.patch(`http://localhost:3000/recipe/like/${id}`)
            .then(res => {
                if (res.data.modifiedCount) {
                    setLikes(prev => prev + 1);
                    setRecipe(prev => prev ? {
                        ...prev,
                        likedBy: [...(prev.likedBy ?? []), user.email!]
                    } : prev);
                    toast.success("Liked the recipe!");
                }
            })
            .catch(err => {
                console.error(err);
                toast.error("Something went wrong");
            });
    }

    if (pending) return <LoadingSpinner minHScreen="min-h-screen" />
    if (error) return <p className="text-center text-red-500 mt-10">{error}</p>
    if (!recipe) return <p className="text-center mt-10">Recipe not found</p>

    const ingredientsArray = recipe.ingredients.split(",")

    return (
        <div>
            <PagesBanner title={recipe.title ?? "Recipe Details"} bg={recipe.image}></PagesBanner>
            <div className='py-10 lg:py-20 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 px-5 lg:px-10 xl:px-0'>

                {/* left side */}
                <div className="lg:col-span-8 space-y-5">
                    <div className="bg-[#f4f3f0] rounded-md px-8 py-4 flex justify-between items-center">
                        <div className="space-y-1">
                            <h3 className="font-medium text-sm">Category</h3>
                            <p className="text-gray-600 text-lg">{recipe.category}</p>
                        </div>
                        <div className="space-y-1">
                            <h3 className="font-medium text-sm">Cuisine</h3>
                            <p className="text-gray-600 text-lg">{recipe.cuisine}</p>
                        </div>
                        <div className="space-y-1">
                            <h3 className="font-medium text-sm">Difficulty</h3>
                            <p className="text-gray-600 text-lg">{recipe.difficulty}</p>
                        </div>
                    </div>

                    <div>
                        {/* Image */}
                        <figure className="relative aspect-4/3 overflow-hidden">
                            <img
                                src={recipe.image}
                                alt={recipe.title}
                                className="w-full h-full object-cover"
                            />

                            {/* Like overlay */}
                            <div onClick={updateLikes} className="cursor-pointer absolute top-3 right-3 flex items-center gap-1 bg-white/80 backdrop-blur px-2 py-1 rounded-full text-sm shadow">
                                <FaHeart className="text-red-500" />
                                <span className="text-gray-700">
                                    {likes}
                                </span>
                            </div>
                        </figure>
                    </div>

                    <div className='bg-[#f4f3f0] rounded-md px-8 py-4 flex flex-wrap justify-between items-center'>
                        <div className="flex items-center gap-3">
                            <MdAccessTime className="size-14 text-gray-400" />
                            <div className="space-y-1">
                                <h3 className="font-medium text-sm">Prep Time</h3>
                                <p className="text-gray-600 text-lg">{recipe.prepTime} mins</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <MdAccessTime className="size-14 text-gray-400" />
                            <div className="space-y-1">
                                <h3 className="font-medium text-sm">Cook Time</h3>
                                <p className="text-gray-600 text-lg">{recipe.cookTime} mins</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <MdAccessTime className="size-14 text-gray-400" />
                            <div className="space-y-1">
                                <h3 className="font-medium text-sm">Total Time</h3>
                                <p className="text-gray-600 text-lg">{recipe.totalTime} mins</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-full border p-4">
                            <legend className="fieldset-legend text-3xl font-medium">Ingredients</legend>

                            {ingredientsArray.map((ingredient, index) => (
                                <label key={index} className="label cursor-pointer flex gap-3">
                                    <input type="checkbox" className="checkbox peer" />
                                    <span className="peer-checked:line-through peer-checked:text-gray-400">
                                        {ingredient}
                                    </span>
                                </label>
                            ))}
                        </fieldset>
                    </div>

                    <div>
                        <h3 className="text-3xl font-medium">Instructions</h3>
                        <p className="text-gray-600 border-l-2 border-l-[#f89223] pl-5 mt-3">{recipe.instructions}</p>
                    </div>
                </div>

                {/* right side */}
                <div className="lg:col-span-4 ">
                    <div className="border border-gray-300 px-5 py-4 space-y-3 text-gray-700 bg-[#f9f9f9] rounded-md">
                        <h3 className="text-4xl font-bold text-center">Nutrition Facts</h3>
                        <hr className="border-black border-2 my-2" />

                        <p className="text-xs mb-2">* The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet. 2,000 calories a day is used for general nutrition advice.</p>

                        <div className="flex justify-between font-bold border-b border-gray-400 pb-1">
                            <span>Serving Size</span>
                            <span>1 serving</span>
                        </div>

                        <div className="flex justify-between font-bold border-b border-gray-400 pb-1 mt-2">
                            <span>Calories</span>
                            <span>430</span>
                        </div>

                        <div className="flex justify-between border-b border-gray-200 pb-1 mt-2">
                            <span>Total Fat</span>
                            <span>20g <span className="text-sm font-bold">25%</span></span>
                        </div>

                        <div className="pl-4 border-b border-gray-200 pb-1">
                            <div className="flex justify-between">
                                <span>Saturated Fat</span>
                                <span>5g <span className="text-sm font-bold">25%</span></span>
                            </div>
                            <div className="flex justify-between">
                                <span>Trans Fat</span>
                                <span>0g</span>
                            </div>
                        </div>

                        <div className="flex justify-between border-b border-gray-200 pb-1 mt-2">
                            <span>Cholesterol</span>
                            <span>55mg <span className="text-sm font-bold">18%</span></span>
                        </div>

                        <div className="flex justify-between border-b border-gray-200 pb-1 mt-2">
                            <span>Sodium</span>
                            <span>700mg <span className="text-sm font-bold">30%</span></span>
                        </div>

                        <div className="flex justify-between border-b border-gray-200 pb-1 mt-2">
                            <span>Total Carbohydrate</span>
                            <span>45g <span className="text-sm font-bold">16%</span></span>
                        </div>

                        <div className="pl-4 border-b border-gray-200 pb-1">
                            <div className="flex justify-between">
                                <span>Dietary Fiber</span>
                                <span>5g <span className="text-sm font-bold">18%</span></span>
                            </div>
                            <div className="flex justify-between">
                                <span>Total Sugars</span>
                                <span>8g</span>
                            </div>
                        </div>

                        <div className="flex justify-between border-b border-gray-200 pb-1 mt-2">
                            <span>Protein</span>
                            <span>30g</span>
                        </div>

                        <p className="text-xs mt-3">
                            Vitamin D 2mcg • Calcium 150mg • Iron 3mg • Potassium 400mg
                        </p>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default RecipeDetailsPage;