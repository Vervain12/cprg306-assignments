"use client"

import { useState } from "react";

export default function newItem(){

    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        if (quantity < 20) setQuantity(quantity + 1);
    }
    const decrement = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    }

    return (
        <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md w-48">
            <div className="bg-sky-300 w-full p-4 rounded-lg mb-4">
                <p className="text-lg font-semibold text-gray-800 text-center">Quantity: {quantity}</p>
            </div>
            <div className="flex space-x-2 m1-4">
                <button onClick = {increment}
                    className={`rounded-lg w-6 text-center ${quantity == 20? 'bg-gray-300' : 'bg-green-500'}`}>➕</button>
                <button onClick = {decrement} 
                    className={`rounded-lg bg-red-500 w-6 text-center ${quantity == 1 ? 'bg-gray-300' : 'bg-red-500'}`}>➖</button>
            </div>
        </div>
    );
};