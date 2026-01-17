import PagesBanner from "../components/ui/PagesBanner";
import bg from '../assets/images/baked-chicken-breast.jpg'
import { useParams } from "react-router";
import { FaHeart } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";

const RecipeDetailsPage = () => {
    const { title } = useParams()
    return (
        <div>
            <PagesBanner title={title ?? "Recipe Details"} bg={bg}></PagesBanner>
            <div className='py-10 lg:py-20 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 px-5 lg:px-10 xl:px-0'>

                {/* left side */}
                <div className="lg:col-span-8 space-y-5">
                    <div className="bg-[#f4f3f0] rounded-md px-8 py-4 flex justify-between items-center">
                        <div className="space-y-1">
                            <h3 className="font-medium text-sm">Category</h3>
                            <p className="text-gray-600 text-lg">Chicken</p>
                        </div>
                        <div className="space-y-1">
                            <h3 className="font-medium text-sm">Cuisine</h3>
                            <p className="text-gray-600 text-lg">Indian</p>
                        </div>
                        <div className="space-y-1">
                            <h3 className="font-medium text-sm">Difficulty</h3>
                            <p className="text-gray-600 text-lg">Easy</p>
                        </div>
                    </div>

                    <div className='mb-0 bg-[#f4f3f0]  rounded-t-md px-8 py-4 flex justify-between items-center'>
                        <div className='flex gap-2 items-center'>
                            <div>
                                <div className="avatar">
                                    <div className="w-6 rounded-full">
                                        <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                                    </div>
                                </div>
                            </div>

                            <p className="text-gray-600">By Muhammd Tamim</p>
                        </div>
                        <div className='flex gap-1 items-center'>
                            <span><FaHeart className='text-red-500 cursor-pointer'></FaHeart></span>
                            <span className="text-gray-600">13 likes</span>
                        </div>
                    </div>
                    <div>
                        <img src={bg} className="rounded-b-md" alt="" />
                    </div>

                    <div className='bg-[#f4f3f0] rounded-md px-8 py-4 flex flex-wrap justify-between items-center'>
                        <div className="flex items-center gap-3">
                            <div>
                                <MdAccessTime className="size-16 text-gray-400" />
                            </div>
                            <div className="space-y-1">
                                <h3 className="font-medium text-sm">Prep Time</h3>
                                <p className="text-gray-600 text-lg">30 mins</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div>
                                <MdAccessTime className="size-16 text-gray-400" />
                            </div>
                            <div className="space-y-1">
                                <h3 className="font-medium text-sm">Cook Time</h3>
                                <p className="text-gray-600 text-lg">50 mins</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div>
                                <MdAccessTime className="size-16 text-gray-400" />
                            </div>
                            <div className="space-y-1">
                                <h3 className="font-medium text-sm">Total Time</h3>
                                <p className="text-gray-600 text-lg">1 hr 20 mins</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-full border p-4">
                            <legend className="fieldset-legend text-3xl font-medium">Ingredients</legend>

                            <label className="label cursor-pointer flex gap-3">
                                <input type="checkbox" className="checkbox peer" />
                                <span className="peer-checked:line-through peer-checked:text-gray-400">
                                    1 lb ground beef
                                </span>
                            </label>

                            <label className="label cursor-pointer flex gap-3">
                                <input type="checkbox" className="checkbox peer" />
                                <span className="peer-checked:line-through peer-checked:text-gray-400">
                                    1 egg
                                </span>
                            </label>

                            <label className="label cursor-pointer flex gap-3">
                                <input type="checkbox" className="checkbox peer" />
                                <span className="peer-checked:line-through peer-checked:text-gray-400">
                                    2 cups water
                                </span>
                            </label>

                            <label className="label cursor-pointer flex gap-3">
                                <input type="checkbox" className="checkbox peer" />
                                <span className="peer-checked:line-through peer-checked:text-gray-400">
                                    4 cloves of garlic
                                </span>
                            </label>
                        </fieldset>
                    </div>
                    <div>
                        <h3 className="text-3xl font-medium">Instructions</h3>
                        <p className="text-gray-600 border-l-2 border-l-[#f89223] pl-5 mt-3">
                            A handful of simple ingredients typify the fresh, vibrant flavors of Greek cooking. Lorem ipsum dolor sit amet.
                        </p>
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