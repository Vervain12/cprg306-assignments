"use client"

import { useState } from "react";

export default function newItem(){

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const handleSubmit = (event) => {
        if (name.trim() != ""){
            event.preventDefault();
            const newItem = { name, quantity, category };
            console.log( newItem );
            alert(`Name: ${name}\nQuantity: ${quantity}\nCategory: ${category}`)
    
            setName("");
            setQuantity(1);
            setCategory("produce");
        }
        else {
            alert("Please fill out all fields.")
        }
    }

    const increment = () => {
        if (quantity < 20) setQuantity(quantity + 1);
    }
    const decrement = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    }

    return (
        <form className="max-w-sm p-4 bg-white rounded-lg shadow-md">
            <div className="space-y-4">
                {/*Name Input*/}
                <input 
                    type="text" 
                    placeholder="Item Name" 
                    value={name} 
                    onChange={(event) => setName(event.target.value)} 
                    className="w-full px-3 py-2 border rounded-lg text-black"
                />
                {/*Category Selection*/}
                <select 
                    id="category" 
                    name="category" 
                    placeholder={category} 
                    onChange={(event) => setCategory(event.target.value)}
                    className="w-full px-3 py-2 border rounded-lg text-black">

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
                    <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md w-48">
                        <div className="bg-sky-200 w-full p-4 rounded-lg mb-4">
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
                
                {/*Quantity Box*/}
                <button 
                    onClick = {handleSubmit}
                    className="w-full px-3 py-2 border rounded-lg bg-sky-300 text-black"
                    > Add Item </button>
            </div>
        </form>

    );
};