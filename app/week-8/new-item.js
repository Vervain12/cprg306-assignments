"use client"

import { useState } from "react";

export default function NewItem({ onAddItem }){

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    function generateId() {
        let id = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 18; i++){
            id += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return id;
    }

    const handleSubmit = (event) => {
        if (name.trim() != ""){
            event.preventDefault();

            const newItem = {id: generateId(), name, quantity, category };
            onAddItem(newItem);

            setName("");
            setQuantity(1);
            setCategory("produce");
        }
        else {
            alert("Please fill out all fields.")
        }
    }

    const increment = (event) => {
        event.preventDefault();
        if (quantity < 20) setQuantity(quantity + 1);
    }
    const decrement = (event) => {
        event.preventDefault();
        if (quantity > 1) setQuantity(quantity - 1);
    }

    return (
        <form className="max-w-sm p-4 bg-black rounded-lg shadow-md">
            <div className="space-y-4">

                {/*Name Input*/}
                <input 
                    type="text" 
                    placeholder="Item Name" 
                    value={name} 
                    onChange={(event) => setName(event.target.value)} 
                    className="w-full px-3 py-2 border text-black"
                />

                {/*Category Selection*/}
                <select 
                    id="category" 
                    name="category" 
                    value={category}
                    placeholder={category} 
                    onChange={(event) => setCategory(event.target.value)}
                    className="w-full px-3 py-2 border text-black">
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozen">Frozen Foods</option>
                    <option value="canned">Canned Goods</option>
                    <option value="dry">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">Household</option>
                    <option value="other">Other</option>
                </select>

                {/*Quantity Box*/}
                <div className="flex justify-center">
                    <div className="flex flex-col items-center justify-center p-4 bg-white shadow-md w-48">
                        <div className="bg-pink-300 w-full p-4 mb-4">
                            <p className="text-lg font-medium text-gray-800 text-center">Quantity: {quantity}</p>
                        </div>
                        <div className="flex space-x-2 m1-4">
                            <button onClick = {increment} type="button"
                                className={`rounded-lg w-6 text-center ${quantity >= 20 ? 'bg-gray-300' : 'bg-green-500'}`}>➕</button>
                            <button onClick = {decrement} type="button"
                                className={`rounded-lg w-6 text-center ${quantity <= 1 ? 'bg-gray-300' : 'bg-red-500'}`}>➖</button>
                        </div>
                    </div>
                </div>
                
                {/*Submit Button*/}
                <button 
                    onClick = {handleSubmit}
                    className="w-full px-3 py-2 border-2 border-pink-500 bg-pink-300 text-black"
                    > Add Item </button>
            </div>
        </form>

    );
};