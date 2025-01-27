import ItemList from "./item-list"

export default function Page(){
    return(
        <main>
            <h1 className="text-pink-500 p-2 m-4 text-2xl font-bold max-w-sm">Shopping List</h1>

            <ItemList />
        </main>
    )
}