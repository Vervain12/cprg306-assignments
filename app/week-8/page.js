"use client"

import { useState } from "react";
import ItemList from "./item-list"
import NewItem from "./new-item"
import itemsData from "./items.json"
import MealIdeas from "./meal-ideas";

export default function Page(){

    const[items, setItems] = useState(itemsData);
    const[selectedItemName, setSelectedItemName] = useState("");

    const handleAddItem = (newItem) => {
        setItems((prevData) => [...prevData, newItem]);
    }

    function cleanItemName() {
        let newItemName = selectedItemName.split(",")[0];
        newItemName = newItemName.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
        return newItemName;
    }

    return(
        <main>
            <h1 className="text-pink-500 m-4 text-3xl font-bold">Shopping List</h1>
            <div className="flex flex-row">
                <div>
                    <NewItem onAddItem = {handleAddItem}/>
                    <ItemList items={items} setSelectedItem={setSelectedItemName}/>                    
                </div>
                <MealIdeas ingredient={cleanItemName()}/>
            </div>
        </main>
    )
}