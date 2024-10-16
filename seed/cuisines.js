const db = require('../db')
const Cuisine = require('../models/cuisine')
const Recipe = require('../models/recipe')
const Directions = require('../models/directions')


db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const Cuisines = [
        {
            name: "Butter Chicken",
            description: "Butter Chicken (Murgh Makhani) is one of the most popular curries in the world and yet happens to be one of the easiest! No hunting down hard to find ingredients, this chef recipe that makes the most incredible curry sauce. ",
            image: "https://www.recipetineats.com/tachyon/2015/07/Butter-Chicken_5.jpg?resize=900%2C1260&zoom=1",
            origin: "India",
            isHalal: true,
            isGlutenFree: true,
            calories: 438
        },
        {
            name: "French Toast",
            description: "Fluffy and tender on the inside and perfectly golden-brown on the outside, you'll always get the perfect French Toast with this recipe. You can make our quick and easy French Toast recipe with any hearty bread including sourdough, challah, or brioche. This French Toast recipe is fuss-free, making it the perfect breakfast for busy mornings.",
            image: "https://www.mccormick.com/-/media/project/oneweb/mccormick-us/mccormick/recipe-images/quick_and_easy_french_toast_new_2000x1125.webp?rev=8fa764c7ed9d4f5e84be61a218fa5313&vd=20240606T181338Z&extension=webp&hash=C8AAA4658C7EE4F7AA6044EAC96AAF88",
            origin: "Rome",
            isHalal: true,
            isGlutenFree: false,
            calories: 149
        },
        {
            name: "Barbecue Ribs",
            description: "To-die-for Pork Ribs recipe with fall apart meat slathered in a sticky homemade barbecue sauce! These oven Pork Ribs are rubbed with a spice mix, slow cooked until fall-apart-tender then basted generously with the tangy, sweet sauce. Can’t-stop-eating it, finger-licking’ good!",
            image: "https://www.recipetineats.com/tachyon/2016/01/Oven-Pork-Ribs-with-Barbecue-Sauce_4.jpg?resize=900%2C1260&zoom=1",
            origin: "Caribbean",
            isHalal: false,
            isGlutenFree: true,
            calories: 1100
        },
    ]
    const butterChicken = await Cuisine.find({ name: 'Butter Chicken' })
    const frenchToast = await Cuisine.find({ name: 'French Toast' })
    const barbecueRibs = await Cuisine.find({name: "Barbecue Ribs"})
    const Recipes = [
        {
            ingredients: ["1/2 cup plain yoghurt", "1 tbsp lemon juice", '1 tsp tumeric powder', '2 tsp garam masala', '1/2 tsp chilli powder or cayenne pepper powder',  '1 tsp ground cumin', '1 tbsp ginger, freshly grated','2 cloves garlic, crushed', '1.5 lb / 750 g chicken thigh fillets, cut into bite size pieces', '2 tbsp (30 g) ghee or butter, OR 1 tbsp vegetable oil', '1 cup tomato passata (aka tomato puree)', '1 cup heavy / thickened cream' , '1 tbsp sugar', '1 1/4 tsp salt '],
            prepTime: 10,
            cookTime: 25,
            difficulty: 3,
            recipeFor: butterChicken[0]._id
        },
        {
            ingredients: ['1 egg', '1 tsp Vanilla Extract', '1/2 tsp Cinnamon', '1/4 cup Milk', '4 slices of bread'],
            prepTime: 5,
            cookTime: 5,
            difficulty: 1,
            recipeFor: frenchToast[0]._id
        },
        {
            ingredients: ['2.5 tsp paprika powder','1/2 cup apple cider vinegar', '1 1/2 cups tomato ketchup', '1/2 cup water' ,'1 1/2 tbsp molasses', '1/3 cup brown sugar', '2 tsp mustard powder', '1 1/2 tsp garlic powder', '2 tsp Worcestershire sauce', '1 tsp salt', '1 tsp black pepper','1 tsp Tabasco or cayenne pepper'],
            prepTime: 15,
            cookTime: 135,
            difficulty: 6,
            recipeFor: barbecueRibs[0]._id
        }
    ]
    const Recipe1 = await Recipe.find({recipeFor: butterChicken[0]._id})
    const Recipe2 = await Recipe.find({recipeFor: frenchToast[0]._id})
    const Recipe3 = await Recipe.find({recipeFor: barbecueRibs[0]._id})
    const directions = [
        {
            preparation: 'Marinade: Combine the Marinade ingredients with the chicken in a bowl. Cover and refrigerate overnight, or up to 24 hours (minimum 3 hrs).',
            cooking: `Cook chicken: Heat the ghee (butter or oil) over high heat in a large fry pan. Take the chicken out of the Marinade but do not wipe or shake off the marinade from the chicken (but don’t pour the Marinade left in the bowl into the fry pan). 
Place chicken in the fry pan and cook for around 3 minutes, or until the chicken is white all over (it doesn’t really brown because of the Marinade).
Sauce: Add the tomato passata, cream, sugar and salt. Also add any remaining marinade left in the bowl. Turn down to low and simmer for 20 minutes. Do a taste test to see if it needs more salt.
Garnish with coriander/cilantro leaves if using. Serve with rice.`,
            directionsFor: Recipe1[0]._id
        },
        {
            preparation: `Whisk egg, vanilla and cinnamon in shallow dish. Stir in milk. Dip bread slices in egg mixture, turning to coat evenly on both sides.`,
            cooking: `Cook bread slices on lightly greased nonstick griddle or skillet on medium heat until cooked through and browned on both sides.  `,
            directionsFor: Recipe2[0]._id
        },
        {
            preparation: `Combine the Rub ingredients and rub onto both sides of the ribs (most on meaty side). Set aside to marinate for 20 minutes (or overnight).
Preheat oven to 160°C/320°F (all oven types).`,
            cooking: `lace ribs on a tray in a single layer. Pour apple cider underneath the ribs, cover with foil then bake for 1 hour 30 minutes or until the meat is pretty tender (Note 5).
Remove from oven, turn up to 180°C/350°F. Remove foil, drizzle with olive oil, then return ribs to oven for 15 minutes or until rub becomes nice and crusty.
Line a new tray with foil then baking / parchment paper (you'll thank me later).
Remove ribs from oven, transfer to lined tray. Pour any juices from tray over the ribs.
Flip ribs so the bonier side is up. Slather with Barbecue Sauce, then bake 10 minutes.
Remove from oven, then turn ribs over so the meaty side is up. Slather with Barbecue Sauce, bake 5 minutes. Repeat 2 or 3 more times until you've got a thick glaze on the ribs.
Cut ribs into individual or multiple rib portions and serve with remaining Barbcue Sauce!`,
            directionsFor: Recipe3[0]._id
        }
    ]

   
   
   
   
   
   
   
   
   
    await Cuisine.insertMany(Cuisines)
    await Recipe.insertMany(Recipes)
    await Directions.insertMany(directions)
    console.log("Created meals")
}
const run = async () => {
    await main()
    db.close()
}

run()