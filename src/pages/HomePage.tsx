import Categories from "../components/structure/Home/Categories";
import ContactUs from "../components/structure/Home/ContactUs";
import Hero from "../components/structure/Home/Hero/Hero";
import MostLikedRecipes from "../components/structure/Home/MostLikedRecipes";
import OurChefs from "../components/structure/OurChefs";

const HomePage = () => {
    return (
        <div>
            <div className="space-y-20 mb-20">
                <Hero></Hero>
                <Categories></Categories>
                <MostLikedRecipes></MostLikedRecipes>
                <OurChefs></OurChefs>
                <ContactUs></ContactUs>
            </div>
        </div>
    );
};

export default HomePage;