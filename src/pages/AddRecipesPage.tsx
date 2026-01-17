import PagesBanner from '../components/ui/PagesBanner';

const AddRecipesPage = () => {
    return (
        <div>
            <PagesBanner title={"Submit Recipe"}></PagesBanner>
            <div className='py-10 lg:py-20 px-5 lg:px-0'>
                <div className='max-w-4xl mx-auto space-y-5'>

                    <h2 className='text-2xl font-medium'>Title</h2>
                    <input type="text" className='input w-full bg-[#f4f3f0] border-none outline-[#f89223]' placeholder='Add your recipe title here...' />
                    <hr className='text-gray-200' />

                    <h2 className='text-2xl font-medium'>Image</h2>
                    <input className="input w-full bg-[#f4f3f0] border-none outline-[#f89223]" placeholder="Add your recipe image URL here..."></input>
                    <hr className='text-gray-200' />

                    <h2 className='text-2xl font-medium'>Ingredients</h2>
                    <textarea className="textarea w-full bg-[#f4f3f0] border-none outline-[#f89223]" placeholder="Bio"></textarea>
                    <hr className='text-gray-200' />

                    <h2 className='text-2xl font-medium'>Instructions</h2>
                    <textarea className="textarea w-full bg-[#f4f3f0] border-none outline-[#f89223]" placeholder="Bio"></textarea>
                    <hr className='text-gray-200' />

                    <h2 className='text-2xl font-medium'>Category</h2>
                    <select defaultValue="Pick a Category" className="select w-full bg-[#f4f3f0] border-none outline-[#f89223]">
                        <option disabled={true}>Pick a Category</option>
                        <option>Appetizers</option>
                        <option>Beef</option>
                        <option>Chicken</option>
                        <option>Desserts</option>
                        <option>Vegetarian</option>
                    </select>
                    <hr className='text-gray-200' />

                    <h2 className='text-2xl font-medium'>Cuisine</h2>
                    <select defaultValue="Pick a Category" className="select w-full bg-[#f4f3f0] border-none outline-[#f89223]">
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
                    <select className="select w-full bg-[#f4f3f0] border-none outline-[#f89223]">
                        <option disabled selected>Pick difficulty</option>
                        <option>Easy</option>
                        <option>Medium</option>
                        <option>Hard</option>
                    </select>
                    <hr className='text-gray-200' />

                    <h2 className='text-2xl font-medium'>Prep Time</h2>
                    <input type="number" className='input w-full bg-[#f4f3f0] border-none outline-[#f89223]' placeholder='minutes' />
                    <hr className='text-gray-200' />

                    <h2 className='text-2xl font-medium'>Cook Time</h2>
                    <input type="number" className='input w-full bg-[#f4f3f0] border-none outline-[#f89223]' placeholder='minutes' />
                    <hr className='text-gray-200' />

                    <h2 className='text-2xl font-medium'>Total Time</h2>
                    <input type="number" className='input w-full bg-[#f4f3f0] border-none outline-[#f89223]' placeholder='minutes' />
                    <hr className='text-gray-200' />



                    <button className='btn text-white bg-[#f89223] btn-lg'>Submit</button>
                </div >
            </div>
        </div>
    );
};

export default AddRecipesPage;