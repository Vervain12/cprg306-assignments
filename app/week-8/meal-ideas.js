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

const fetchMealIngredients = async (mealId) => {
    const apiUrl = `https://themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    const ingredients = [];

    try {
        const reply = await fetch(apiUrl)
        const data = await reply.json();
        const meal = data.meals[0];

        for (let i = 1; i <= 20; i++) {
            const ingredient = meal[`strIngredient${i}`]
            ingredients.push(ingredient);
        }
        return ingredients;
    }
    catch (e) {
        console.error("Error: " + e)
    }
}

export default function MealIdeas( {ingredient} ) {
    const [meals, setMeals] = useState([]);
    const [ingredients, setIngredients] = useState([]);
    const [selectedMealId, setSelectedMealId] = useState(null);

    useEffect(() => {
        const loadMeals = async () => {
            if (ingredient){
                const mealList = await fetchMealIdeas(ingredient);
                setMeals(mealList || []);
            }
        }
        loadMeals();
    }, [ingredient]);

    useEffect(() => {
        const loadIngredients = async () => {
            if (selectedMealId) {
                const mealIngredients = await fetchMealIngredients(selectedMealId);
                setIngredients(mealIngredients || []);                
            }
        }
        loadIngredients();
    }, [selectedMealId]);
    
    return (
        <div>
            <div className="text-pink-500 m-4 text-2xl font-bold">Meals:</div>
            <ol>
                { meals.length > 0 ? (
                    meals.map(item => (
                        <li key={item.idMeal} className="flex flex-col text-pink-400 font-bold bg-black m-4 p-2 max-w-sm" onClick={() => setSelectedMealId(item.idMeal)}>
                            {item.strMeal}
                                {item.idMeal === selectedMealId && (
                                    <ol>
                                        {ingredients.map((ingredient, index) => (
                                            <li key={index}>
                                                {ingredient}
                                            </li>
                                        ))}
                                    </ol>
                                )}
                            </li>))) : 
                        (<li className="flex flex-col text-pink-400 font-bold bg-black m-4 p-2 max-w-sm">No meal ideas found for {ingredient}</li>)}
            </ol>
        </div>
    )
}