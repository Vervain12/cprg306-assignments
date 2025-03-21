import React from "react";

export default function Item({ id, name, quantity, category, itemSelect }){
    return(
        <li className="flex flex-col text-pink-300 bg-black m-4 p-2 max-w-sm" 
            onClick={() => itemSelect()}>
            <h2 className="text-pink-400 font-bold">{name}</h2>
            <p>Category: {category}</p>
            <p>Quantity: {quantity}</p>
        </li>
    );
};

// Call delete in a button here