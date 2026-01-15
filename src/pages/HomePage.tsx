import Categories from "../components/structure/Categories";
import Hero from "../components/structure/Hero/Hero";

const HomePage = () => {
    return (
        <div>
            <Hero></Hero>
            <div className="space-y-20 mt-20 mb-20">
                <Categories></Categories>
            </div>
        </div>
    );
};

export default HomePage;