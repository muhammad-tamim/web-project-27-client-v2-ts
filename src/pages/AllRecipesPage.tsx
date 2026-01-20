import bg from '../assets/images/Recipes-background1.jpg'

import PagesBanner from '../components/ui/PagesBanner';
import Cards from '../components/ui/Cards';
import { useEffect, useState } from 'react'
import axios from 'axios'
import LoadingSpinner from '../components/ui/LoadingSpinner';


const AllRecipesPage = () => {

    const [recipes, setRecipes] = useState([])
    const [pending, setPending] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:3000/recipes')
            .then(res => {
                setRecipes(res.data)
                setPending(false)
            })
    }, [])

    if (pending) {
        return <LoadingSpinner minHScreen={'min-h-screen'}></LoadingSpinner>
    }


    return (
        <div>
            <PagesBanner title={"All Recipes"} bg={bg}></PagesBanner>
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

export default AllRecipesPage;