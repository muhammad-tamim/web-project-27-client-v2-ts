import Categories from "../components/structure/Home/Categories";
import Hero from "../components/structure/Home/Hero/Hero";
import MostLikedRecipes from "../components/structure/Home/MostLikedRecipes";

const HomePage = () => {
    return (
        <div>
            <div className="space-y-20 mb-20">
                <Hero></Hero>
                <Categories></Categories>
                <MostLikedRecipes></MostLikedRecipes>
            </div>
        </div>
    );
};

export default HomePage;