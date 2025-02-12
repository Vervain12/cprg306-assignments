"use client"

import { useState } from "react";
import ItemList from "./item-list"
import NewItem from "./new-item"
import itemsData from "./items.json"

export default function Page(){

    const[items, setItems] = useState(itemsData);
    const handleAddItem = (newItem) => {
        setItems((prevData) => [...prevData, newItem]);
    }

    return(
        <main>
            <h1 className="text-pink-500 m-4 text-2xl font-bold">Shopping List</h1>
            <NewItem onAddItem = {handleAddItem}/>
            <ItemList items={items}/>
        </main>
    )
}