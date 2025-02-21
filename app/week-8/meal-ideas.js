"use client"

import { useState, useEffect } from "react";

const fetchMealIdeas = async (ingredient) => {
    const apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
    
    try {
        const reply = await fetch(apiUrl)
        const data = await reply.json();
        return data.meals;
    }
    catch (e) {
        console.error("Error: " + e)
    }
}

export default function MealIdeas( {ingredient} ) {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const loadMeals = async () => {
            if (ingredient){
                const mealList = await fetchMealIdeas(ingredient);
                setMeals(mealList || []);
            }
            else {
                setMeals([]);
            }
        }
        loadMeals();
    }, [ingredient]);

    return (
        <div>
            <div className="text-pink-500 m-4 text-2xl font-bold">Meals:</div>
            <ol>
                { meals.length > 0 ? (
                    meals.map(item => (
                        <li key={item.idMeal} className="flex flex-col text-pink-400 font-bold bg-black m-4 p-2 max-w-sm">{item.strMeal}</li>))) : 
                        (<li className="flex flex-col text-pink-400 font-bold bg-black m-4 p-2 max-w-sm">No meal ideas found for {ingredient}</li>)}

            </ol>
        </div>
    )
}