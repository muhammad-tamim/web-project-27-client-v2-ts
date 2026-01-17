export const navItems = [
    { id: 1, to: "/", label: "Home" },
    { id: 2, to: "/all-recipes", label: "All Recipes" },

    {
        id: 3,
        label: "Categories",
        children: [
            { id: "c1", to: "/recipe-category/appetizers", label: "Appetizers" },
            { id: "c2", to: "/recipe-category/beef", label: "Beef" },
            { id: "c3", to: "/recipe-category/baked", label: "Baked" },
            { id: "c4", to: "/recipe-category/vegetables", label: "Vegetables" },
            { id: "c5", to: "/recipe-category/desserts", label: "Desserts" },
        ],
    },

    { id: 4, to: "/my-recipes", label: "My Recipes" },
    { id: 5, to: "/add-recipes", label: "Add Recipes" },
];
