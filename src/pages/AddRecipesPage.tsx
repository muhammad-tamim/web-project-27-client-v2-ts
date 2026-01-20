import PagesBanner from '../components/ui/PagesBanner';

import bg from '../assets/images/Recipes-background1.jpg'
import axios from 'axios';
import toast from 'react-hot-toast';
import { useContext, type FormEvent } from 'react';
import { AuthContext } from '../contexts/AuthContext';


interface Recipe {
    _id?: string;
    title: string;
    image: string;
    ingredients: string;
    instructions: string;
    category: string;
    cuisine: string;
    difficulty: string;
    prepTime: number;
    cookTime: number;
    totalTime: number;
    likes: number;
    email: string
}


const AddRecipesPage = () => {

    const authContext = useContext(AuthContext);
    if (!authContext) return null;

    const { user } = authContext;

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget; // ✅ store reference early
        const formData = new FormData(form);

        const newRecipe: Recipe = {
            title: formData.get('title') as string,
            image: formData.get('image') as string,
            ingredients: formData.get('ingredients') as string,
            instructions: formData.get('instructions') as string,
            category: formData.get('category') as string,
            cuisine: formData.get('cuisine') as string,
            difficulty: formData.get('difficulty') as string,
            prepTime: Number(formData.get('prepTime')),
            cookTime: Number(formData.get('cookTime')),
            totalTime: Number(formData.get('totalTime')),
            likes: 0,
            email: user?.email || ''
        };

        axios.post('http://localhost:3000/recipes', newRecipe)
            .then(res => {
                if (res.data.insertedId) {
                    toast.success('Recipe submitted successfully!');
                    form.reset();
                }
            });
    };

    return (
        <div>
            <PagesBanner title={"Submit Recipe"} bg={bg}></PagesBanner>
            <div className='py-10 lg:py-20 px-5 lg:px-0'>
                <form onSubmit={handleSubmit}>
                    <div className='max-w-4xl mx-auto space-y-5'>

                        <h2 className='text-2xl font-medium'>Title</h2>
                        <input type="text" name='title' className='input w-full bg-[#f4f3f0] border-none outline-[#f89223]' placeholder='Add your recipe title here...' />
                        <hr className='text-gray-200' />

                        <h2 className='text-2xl font-medium'>Image</h2>
                        <input type='text' name='image' className="input w-full bg-[#f4f3f0] border-none outline-[#f89223]" placeholder="Add your recipe image URL here..."></input>
                        <hr className='text-gray-200' />

                        <h2 className='text-2xl font-medium'>Ingredients</h2>
                        <textarea name='ingredients' className="textarea w-full bg-[#f4f3f0] border-none outline-[#f89223]" placeholder="Bio"></textarea>
                        <hr className='text-gray-200' />

                        <h2 className='text-2xl font-medium'>Instructions</h2>
                        <textarea name='instructions' className="textarea w-full bg-[#f4f3f0] border-none outline-[#f89223]" placeholder="Bio"></textarea>
                        <hr className='text-gray-200' />

                        <h2 className='text-2xl font-medium'>Category</h2>
                        <select name='category' defaultValue="Pick a Category" className="select w-full bg-[#f4f3f0] border-none outline-[#f89223]">
                            <option disabled={true}>Pick a Category</option>
                            <option>Appetizers</option>
                            <option>Beef</option>
                            <option>Chicken</option>
                            <option>Desserts</option>
                            <option>Vegetarian</option>
                        </select>
                        <hr className='text-gray-200' />

                        <h2 className='text-2xl font-medium'>Cuisine</h2>
                        <select name='cuisine' defaultValue="Pick a Category" className="select w-full bg-[#f4f3f0] border-none outline-[#f89223]">
                            <option disabled={true}>Pick a Cuisine</option>
                            <option>Indian</option>
                            <option>Mexican</option>
                            <option>Italian</option>
                            <option>Chinese</option>
                            <option>Korean</option>
                            <option>Japanese</option>
                        </select>
                        <hr className='text-gray-200' />

                        <h2 className='text-2xl font-medium'>Difficulty</h2>
                        <select name='difficulty' defaultValue="Pick difficulty" className="select w-full bg-[#f4f3f0] border-none outline-[#f89223]">
                            <option disabled={true}>Pick difficulty</option>
                            <option>Easy</option>
                            <option>Medium</option>
                            <option>Hard</option>
                        </select>
                        <hr className='text-gray-200' />

                        <h2 className='text-2xl font-medium'>Prep Time</h2>
                        <input name='prepTime' type="number" className='input w-full bg-[#f4f3f0] border-none outline-[#f89223]' placeholder='minutes' />
                        <hr className='text-gray-200' />

                        <h2 className='text-2xl font-medium'>Cook Time</h2>
                        <input name='cookTime' type="number" className='input w-full bg-[#f4f3f0] border-none outline-[#f89223]' placeholder='minutes' />
                        <hr className='text-gray-200' />

                        <h2 className='text-2xl font-medium'>Total Time</h2>
                        <input name='totalTime' type="number" className='input w-full bg-[#f4f3f0] border-none outline-[#f89223]' placeholder='minutes' />
                        <hr className='text-gray-200' />

                        <button className='btn text-white bg-[#f89223] btn-lg'>Submit</button>
                    </div >
                </form>
            </div>
        </div>
    );
};

export default AddRecipesPage;