"use client"

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ItemList from "./item-list"
import NewItem from "./new-item"
import itemsData from "./items.json"
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";

export default function Page(){

    const[items, setItems] = useState(itemsData);
    const[selectedItemName, setSelectedItemName] = useState("");
    const router = useRouter();
    const { user } = useUserAuth();

    const handleAddItem = (newItem) => {
        setItems((prevData) => [...prevData, newItem]);
    }

    useEffect(() => {
        if (!user) {
            router.push("localhost:3000");
        }
    }, [user, router])
    

    function cleanItemName() {
        let newItemName = selectedItemName.split(",")[0];
        newItemName = newItemName.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
        return newItemName;
    }

    return(
        <main>
            {!user ? (
                <p className="p-2 text-2xl text-pink-400">
                    You must be signed in to access this page. 
                </p>
            ) : (
            <div>
                <h1 className="text-pink-500 m-4 text-3xl font-bold">Shopping List</h1>
                <div className="flex flex-row">
                    <div>
                        <NewItem onAddItem = {handleAddItem}/>
                        <ItemList items={items} setSelectedItem={setSelectedItemName}/>                    
                    </div>
                    <MealIdeas ingredient={cleanItemName()}/>
                </div>
            </div>
            )}
        </main>
    )
}