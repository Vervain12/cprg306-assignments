import React from "react";

export default function Item({id, name, quantity, category}){
    return(
        <li key={id} className="flex flex-col text-pink-300 bg-black m-4 p-2 max-w-sm" >
            <h2 className="text-pink-400 font-bold">{name}</h2>
            <p>Category: {category}</p>
            <p>Quantity: {quantity}</p>
        </li>
    );
};