"use client"

import React, { useState } from "react";
import Item from "./item";
import items from "./items.json";

export default function ItemList (){

    const [sortBy, setSortBy] = useState("name");

    const sortByName = () => {
        setSortBy("name")
    }
    const sortByCategory = () => {
        setSortBy("category")
    }

    const sortedItems =[...items].sort((a, b) => {
        if (sortBy === "name") {
            return a.name.localeCompare(b.name);
        }
        else if (sortBy === "category") {
            return a.category.localeCompare(b.category);
        }
    });

    let itemList = sortedItems.map(item => 
        <Item
            key={item.id}
            id={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
        />);

    return (
        <div>
            <div className="flex items-center gap-4 m-4 max-w-sm">
                <text className="text-pink-300">Sort By:</text>
                <button onClick={sortByName} type="button"
                    className={`px-4 py-1 text-black text-sm font-semibold transition-colors ${sortBy === "name" ? 'bg-pink-300' : 'bg-gray-300'}`}>Name</button>
                <button onClick={sortByCategory} type="button"
                    className={`px-4 py-1 text-black text-sm font-semibold transition-colors ${sortBy === "category" ? 'bg-pink-300' : 'bg-gray-300'}`}>Category</button>
            </div>
            <ol>
                {itemList}
            </ol>
        </div>
    )
}