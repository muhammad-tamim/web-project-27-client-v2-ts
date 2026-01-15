import Hero from "../components/structure/Hero/Hero";
import Categories from "../components/structure/Categories";
import Recipes from "../components/structure/Recipes";

const HomePage = () => {
    return (
        <div>
            <Hero></Hero>
            <div className="space-y-20 mt-20 mb-20">
                <Categories></Categories>
                <div className="px-5"><Recipes></Recipes></div>
            </div>
        </div>
    );
};

export default HomePage;