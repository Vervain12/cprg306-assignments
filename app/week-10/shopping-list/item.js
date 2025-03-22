import React from "react";
import { deleteItem } from "../_services/shopping-list-service";
import { useUserAuth } from "../_utils/auth-context";

export default function Item({ id, name, quantity, category, itemSelect }){
    const { user } = useUserAuth();

    const handleDelete = () => {
        deleteItem(user.uid, id)
    }

    return(
        <li className="flex flex-col text-pink-300 bg-black m-4 p-2 max-w-sm" 
            onClick={() => itemSelect()}>
            <h2 className="text-pink-400 font-bold">{name}</h2>
            <p>Category: {category}</p>
            <p>Quantity: {quantity}</p>
            <p onClick={() => handleDelete()}>[Delete]</p>
        </li>
    );
};

