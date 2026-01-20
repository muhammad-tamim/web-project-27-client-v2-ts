export const navItems = [
    { id: 1, to: "/", label: "Home" },

    { id: 2, to: "/all-recipes", label: "All Recipes" },

    {
        id: 3,
        label: "Categories",
        children: [
            { id: "cat1", to: "/recipe-category/Appetizers", label: "Appetizers" },
            { id: "cat2", to: "/recipe-category/Beef", label: "Beef" },
            { id: "cat3", to: "/recipe-category/Chicken", label: "Baked" },
            { id: "cat4", to: "/recipe-category/Vegetarian", label: "Vegetables" },
            { id: "cat5", to: "/recipe-category/Desserts", label: "Desserts" },
        ],
    },

    {
        id: 4,
        label: "Cuisines",
        children: [
            { id: "cu1", to: "/recipe-cuisine/Indian", label: "Indian" },
            { id: "cu2", to: "/recipe-cuisine/Mexican", label: "Mexican" },
            { id: "cu3", to: "/recipe-cuisine/Italian", label: "Italian" },
            { id: "cu4", to: "/recipe-cuisine/Chinese", label: "Chinese" },
            { id: "cu5", to: "/recipe-cuisine/Korean", label: "Korean" },
            { id: "cu6", to: "/recipe-cuisine/Japanese", label: "Japanese" },
        ],
    },

    { id: 5, to: "/my-recipes", label: "My Recipes" },
    { id: 6, to: "/add-recipes", label: "Add Recipes" },
];
