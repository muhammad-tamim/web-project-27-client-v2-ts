import PagesBanner from "../components/ui/PagesBanner";
import bg from '../assets/images/Recipes-background1.jpg'
import axios from "axios";
import { useContext, useEffect, useState, type FormEvent } from "react";
import { useParams } from "react-router";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import toast from "react-hot-toast";
import { AuthContext } from "../contexts/AuthContext";


type UpdateRecipe = Omit<Recipe, "_id" | "likes" | "likedBy">

interface Recipe {
    _id: string;
    title: string;
    image: string;
    instructions: string;
    likes: number;
    likedBy?: string[];
    cuisine: string;
    category: string;
    difficulty: string;
    prepTime: number;
    cookTime: number;
    totalTime: number;
    ingredients: string;
    email: string;
}

const RecipeUpdatePage = () => {

    const { user } = useContext(AuthContext) ?? {};
    const { id } = useParams<{ id: string }>();

    const [recipe, setRecipe] = useState<Recipe | null>(null);
    const [pending, setPending] = useState(true);

    useEffect(() => {
        if (!id) return
        axios.get(`http://localhost:3000/recipe-details/${id}`)
            .then(res => {
                setRecipe(res.data)
                setPending(false)
            })
    }, [id])


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!user?.email) {
            toast.error("You must be logged in to update a recipe");
            return;
        }
        const formData = new FormData(e.currentTarget);

        const updatedRecipe: UpdateRecipe = {
            title: formData.get("title") as string,
            image: formData.get("image") as string,
            ingredients: formData.get("ingredients") as string,
            instructions: formData.get("instructions") as string,
            category: formData.get("category") as string,
            cuisine: formData.get("cuisine") as string,
            difficulty: formData.get("difficulty") as string,
            prepTime: Number(formData.get("prepTime")),
            cookTime: Number(formData.get("cookTime")),
            totalTime: Number(formData.get("totalTime")),
            email: user?.email,
        };


        axios.patch(`http://localhost:3000/recipe/${id}`, updatedRecipe)
            .then(res => {
                if (res.data.modifiedCount) {
                    toast.success('Recipe Updated successfully!');

                    setRecipe((prev) =>
                        prev ? { ...prev, ...updatedRecipe } : prev
                    );

                }
            });
    };


    if (pending) return <LoadingSpinner minHScreen="min-h-screen" />

    return (
        <div>
            <PagesBanner title={`Update ${recipe?.title}`} bg={bg}></PagesBanner>
            <div className='py-10 lg:py-20 px-5 lg:px-0'>
                <form onSubmit={handleSubmit}>
                    <div className='max-w-4xl mx-auto space-y-5'>

                        <h2 className='text-2xl font-medium'>Title</h2>
                        <input
                            type="text"
                            name='title'
                            defaultValue={recipe?.title}
                            className='input w-full bg-[#f4f3f0] border-none outline-[#f89223]'
                        />
                        <hr className='text-gray-200' />

                        <h2 className='text-2xl font-medium'>Image</h2>
                        <input
                            type='text'
                            name='image'
                            defaultValue={recipe?.image}
                            className="input w-full bg-[#f4f3f0] border-none outline-[#f89223]"
                        />
                        <hr className='text-gray-200' />

                        <h2 className='text-2xl font-medium'>Ingredients</h2>
                        <textarea
                            name='ingredients'
                            defaultValue={recipe?.ingredients}
                            className="textarea w-full bg-[#f4f3f0] border-none outline-[#f89223]"
                        ></textarea>
                        <hr className='text-gray-200' />

                        <h2 className='text-2xl font-medium'>Instructions</h2>
                        <textarea
                            name='instructions'
                            defaultValue={recipe?.instructions}
                            className="textarea w-full bg-[#f4f3f0] border-none outline-[#f89223]"
                        ></textarea>
                        <hr className='text-gray-200' />

                        <h2 className='text-2xl font-medium'>Category</h2>
                        <select
                            name='category'
                            defaultValue={recipe?.category}
                            className="select w-full bg-[#f4f3f0] border-none outline-[#f89223]"
                        >
                            <option disabled>Pick a Category</option>
                            <option>Appetizers</option>
                            <option>Beef</option>
                            <option>Chicken</option>
                            <option>Desserts</option>
                            <option>Vegetarian</option>
                        </select>
                        <hr className='text-gray-200' />

                        <h2 className='text-2xl font-medium'>Cuisine</h2>
                        <select
                            name='cuisine'
                            defaultValue={recipe?.cuisine}
                            className="select w-full bg-[#f4f3f0] border-none outline-[#f89223]"
                        >
                            <option disabled>Pick a Cuisine</option>
                            <option>Indian</option>
                            <option>Mexican</option>
                            <option>Italian</option>
                            <option>Chinese</option>
                            <option>Korean</option>
                            <option>Japanese</option>
                        </select>
                        <hr className='text-gray-200' />

                        <h2 className='text-2xl font-medium'>Difficulty</h2>
                        <select
                            name='difficulty'
                            defaultValue={recipe?.difficulty}
                            className="select w-full bg-[#f4f3f0] border-none outline-[#f89223]"
                        >
                            <option disabled>Pick difficulty</option>
                            <option>Easy</option>
                            <option>Medium</option>
                            <option>Hard</option>
                        </select>
                        <hr className='text-gray-200' />

                        <h2 className='text-2xl font-medium'>Prep Time</h2>
                        <input
                            name='prepTime'
                            type="number"
                            defaultValue={recipe?.prepTime}
                            className='input w-full bg-[#f4f3f0] border-none outline-[#f89223]'
                        />
                        <hr className='text-gray-200' />

                        <h2 className='text-2xl font-medium'>Cook Time</h2>
                        <input
                            name='cookTime'
                            type="number"
                            defaultValue={recipe?.cookTime}
                            className='input w-full bg-[#f4f3f0] border-none outline-[#f89223]'
                        />
                        <hr className='text-gray-200' />

                        <h2 className='text-2xl font-medium'>Total Time</h2>
                        <input
                            name='totalTime'
                            type="number"
                            defaultValue={recipe?.totalTime}
                            className='input w-full bg-[#f4f3f0] border-none outline-[#f89223]'
                        />
                        <hr className='text-gray-200' />

                        <button className='btn text-white bg-[#f89223] btn-lg'>Update</button>
                    </div >
                </form>
            </div>
        </div>
    );
};

export default RecipeUpdatePage;