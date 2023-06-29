// import * as dotenv from 'dotenv';
// dotenv.config(); // Load the environment variables from the .env filelet mealUrl: string;

let mealUrl: string;
let randomMealUrl: string;
if (import.meta.env.MODE == 'development') {
  mealUrl = import.meta.env.VITE_APP_MEAL_URL as string;
  randomMealUrl = import.meta.env.VITE_APP_RANDOM_MEAL_URL as string;
}
else {
  mealUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  randomMealUrl = import.meta.env.VITE_APP_RANDOM_MEAL_URL as string;
}

export { mealUrl, randomMealUrl };