"use client"

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ItemList from "./item-list"
import NewItem from "./new-item"
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function Page(){

    const { user } = useUserAuth();
    const[items, setItems] = useState([]);
    const[selectedItemName, setSelectedItemName] = useState("");

    const loadItems = async () => {
        if (user){
            const fetched = await getItems(user.uid);
            setItems(fetched);
        }
    }

    useEffect(() => {
        loadItems();
    },[user])

    const handleAddItem = async (newItem) => {
        const itemId = await addItem(user.uid, newItem);
        const newItemWithId = {id: itemId, ...newItem}
        setItems((prevData) => [...prevData, newItemWithId]);
        loadItems();
    }

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
