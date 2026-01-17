export const navItems = [
    { id: 1, to: "/", label: "Home" },

    { id: 2, to: "/all-recipes", label: "All Recipes" },

    {
        id: 3,
        label: "Categories",
        children: [
            { id: "cat1", to: "/recipe-category/appetizers", label: "Appetizers" },
            { id: "cat2", to: "/recipe-category/beef", label: "Beef" },
            { id: "cat3", to: "/recipe-category/baked", label: "Baked" },
            { id: "cat4", to: "/recipe-category/vegetables", label: "Vegetables" },
            { id: "cat5", to: "/recipe-category/desserts", label: "Desserts" },
        ],
    },

    {
        id: 4,
        label: "Cuisines",
        children: [
            { id: "cu1", to: "/recipe-cuisine/indian", label: "Indian" },
            { id: "cu2", to: "/recipe-cuisine/mexican", label: "Mexican" },
            { id: "cu3", to: "/recipe-cuisine/italian", label: "Italian" },
            { id: "cu4", to: "/recipe-cuisine/chinese", label: "Chinese" },
            { id: "cu5", to: "/recipe-cuisine/korean", label: "Korean" },
            { id: "cu6", to: "/recipe-cuisine/japanese", label: "Japanese" },
        ],
    },

    { id: 5, to: "/my-recipes", label: "My Recipes" },
    { id: 6, to: "/add-recipes", label: "Add Recipes" },
];
