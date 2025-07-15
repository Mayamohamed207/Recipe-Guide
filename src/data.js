import React from "react";

export const recipes = [
  {
    id: 1,
    title: "Iced Coffee",
    cardImage: "/Recipe-Guide/images/card_Coffee.jpg",
    detailImage: "/Recipe-Guide/images/detail_Coffee.jpg",
    time: "10 minutes",
    level: "Easy",
    ingredients: [
      "3 tbsp Espresso coffee powder",
      "1 cup off-the-boil water",
      "1 cup milk",
      "Ice cubes"
    ],
    instructions: [
      "Boil some water and let it sit for 1-2 minutes.",
      "Put the coffee grounds into a cafetière and pour in the water.",
      "Let the coffee steep for 5 minutes then press the plunger.",
      "Pour the coffee into a jug, allow to cool, then chill.",
      "Whisk in milk and condensed milk, serve over ice.",
      "Store in the fridge for up to 5 days. Shake before serving."
    ],
    cuisine: "Beverage",
    isFavorite: false,
  },
  {
    id: 2,
    title: "Classic Tiramisu",
    cardImage: "/Recipe-Guide/images/card_Tiramisu.jpg",
    detailImage: "/Recipe-Guide/images/detail_Tiramisu.jpg",
    time: "30 minutes + chilling",
    level: "Medium",
    ingredients: [
      "3 egg yolks",
      "1/2 cup sugar",
      "1 cup mascarpone cheese",
      "1 cup heavy cream",
      "1 cup brewed espresso, cooled",
      "1 package ladyfingers",
      "Cocoa powder, for dusting"
    ],
    instructions: [
      "Whisk egg yolks and sugar over a double boiler until thick.",
      "Mix in mascarpone cheese until smooth.",
      "In another bowl, whip heavy cream until stiff peaks form.",
      "Gently fold whipped cream into the mascarpone mixture.",
      "Dip ladyfingers into espresso and layer them in a dish.",
      "Spread half the mascarpone mixture over the ladyfingers.",
      "Repeat layers, finishing with mascarpone on top.",
      "Dust with cocoa powder and chill for at least 4 hours before serving."
    ],
    cuisine: "Dessert",
    isFavorite: false,
  },
  {
    id: 3,
    title: "Indomie Veggie Stir-Fry",
    cardImage: "/Recipe-Guide/images/card_noodles.jpg",
    detailImage: "/Recipe-Guide/images/detail_noodles.jpg",
    time: "15 minutes",
    level: "Easy",
    ingredients: [
      "1 pack Indomie instant noodles",
      "1 tbsp soy sauce",
      "1/2 tbsp oyster sauce (optional)",
      "1/2 tsp sesame oil",
      "1/2 cup mixed vegetables (carrots, bell peppers, cabbage, etc.)",
      "1 clove garlic, minced",
      "1 tbsp oil",
      "1 egg (optional)",
      "Spring onions for garnish"
    ],
    instructions: [
      "Boil water in a pot and cook Indomie noodles for 2-3 minutes. Drain and set aside.",
      "In a pan, heat oil over medium heat and sauté garlic until fragrant.",
      "Add the mixed vegetables and stir-fry for 2-3 minutes until slightly tender.",
      "Push the vegetables to one side and crack an egg into the pan (if using). Scramble lightly.",
      "Add the cooked noodles, soy sauce, oyster sauce, and sesame oil. Mix well to coat everything evenly.",
      "Cook for another minute while stirring to combine the flavors.",
      "Garnish with chopped spring onions and serve hot."
    ],
    cuisine: "Main Dish",
    isFavorite: false,
  },
  {
    id: 4,
    title: "Fluffy Pancakes",
    cardImage: "/Recipe-Guide/images/card_pancakes.jpg",
    detailImage: "/Recipe-Guide/images/detail_pancakes.jpg",
    time: "20 minutes",
    level: "Easy",
    ingredients: [
      "1 cup all-purpose flour",
      "2 tbsp sugar",
      "1 tsp baking powder",
      "1/2 tsp baking soda",
      "1/4 tsp salt",
      "3/4 cup buttermilk",
      "1 egg",
      "2 tbsp melted butter",
      "1 tsp vanilla extract"
    ],
    instructions: [
      "Mix all dry ingredients in a bowl.",
      "In another bowl, whisk together buttermilk, egg, butter, and vanilla.",
      "Combine the wet and dry ingredients, stirring until just mixed.",
      "Heat a pan over medium heat and lightly grease it.",
      "Pour small amounts of batter and cook until bubbles appear, then flip.",
      "Serve warm with syrup and butter."
    ],
    cuisine: "Breakfast",
    isFavorite: false,
  },
  {
    id: 6,
    title: "Creamy Garlic Chicken",
    cardImage: "/Recipe-Guide/images/card_garlic_chicken.jpg",
    detailImage: "/Recipe-Guide/images/detail_garlic_chicken.jpg",
    time: "30 minutes",
    level: "Medium",
    ingredients: [
      "2 boneless chicken breasts",
      "1 tbsp olive oil",
      "3 cloves garlic, minced",
      "1 cup heavy cream",
      "1/2 cup grated Parmesan cheese",
      "1 tsp Italian seasoning",
      "Salt and pepper to taste",
      "Fresh parsley for garnish"
    ],
    instructions: [
      "Season chicken breasts with salt and pepper.",
      "Heat oil in a pan and cook chicken for 5 minutes per side.",
      "Remove chicken and set aside.",
      "In the same pan, add garlic and cook for 1 minute.",
      "Add cream, Parmesan, and Italian seasoning. Simmer for 3 minutes.",
      "Return chicken to the pan and cook for another 5 minutes.",
      "Garnish with parsley and serve warm."
    ],
    cuisine: "Main Dish",
    isFavorite: false,
  },
  {
    id: 8,
    title: "Crispy Baked Potato Wedges",
    cardImage: "/Recipe-Guide/images/card_potato_wedges.jpg",
    detailImage: "/Recipe-Guide/images/detail_potato_wedges.jpg",
    time: "30 minutes",
    level: "Easy",
    ingredients: [
      "4 large potatoes, cut into wedges",
      "2 tbsp olive oil",
      "1 tsp garlic powder",
      "1 tsp paprika",
      "1/2 tsp salt",
      "1/2 tsp black pepper"
    ],
    instructions: [
      "Preheat oven to 425°F (220°C).",
      "Toss potatoes with oil and seasonings.",
      "Spread on a baking sheet in a single layer.",
      "Bake for 25 minutes, flipping halfway.",
      "Serve hot with ketchup or dipping sauce."
    ],
    cuisine: "Side Dish",
    isFavorite: false,
  },
  {
    id: 9,
    title: "Chocolate Chip Cookies",
    cardImage: "/Recipe-Guide/images/card_chocolate_cookies.jpg",
    detailImage: "/Recipe-Guide/images/detail_chocolate_cookies.jpg",
    time: "25 minutes",
    level: "Easy",
    ingredients: [
      "1 cup butter, softened",
      "1 cup sugar",
      "1 cup brown sugar",
      "2 eggs",
      "2 tsp vanilla extract",
      "3 cups flour",
      "1 tsp baking soda",
      "1/2 tsp salt",
      "2 cups chocolate chips"
    ],
    instructions: [
      "Preheat oven to 350°F (175°C).",
      "Cream butter, sugar, and brown sugar.",
      "Add eggs and vanilla, mix well.",
      "Stir in flour, baking soda, and salt.",
      "Fold in chocolate chips.",
      "Drop dough onto a baking sheet and bake for 10-12 minutes.",
      "Cool before serving."
    ],
    cuisine: "Dessert",
    isFavorite: false,
  },
  {
    id: 11,
    title: "Cheese Garlic Bread",
    cardImage: "/Recipe-Guide/images/card_garlic_bread.jpg",
    detailImage: "/Recipe-Guide/images/detail_garlic_bread.jpg",
    time: "15 minutes",
    level: "Easy",
    ingredients: [
      "1 baguette",
      "3 tbsp butter, melted",
      "3 cloves garlic, minced",
      "1/2 cup shredded mozzarella cheese",
      "1 tsp dried oregano"
    ],
    instructions: [
      "Preheat oven to 375°F (190°C).",
      "Slice baguette but not all the way through.",
      "Mix butter and garlic, then spread on bread.",
      "Sprinkle with cheese and oregano.",
      "Bake for 10 minutes until golden brown."
    ],
    cuisine: "Snack",
    isFavorite: false,
  }
];
