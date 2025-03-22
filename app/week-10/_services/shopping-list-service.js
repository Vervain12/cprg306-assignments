import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, deleteDoc, query, doc } from "firebase/firestore";

export const getItems = async (userId) => {
    const items = [];
    const itemQuery = query(
        collection(db, "users", userId, "items")
    )
    const snapshot = await getDocs(itemQuery);
    snapshot.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data() });
    });
    return items;
};

export const addItem = async (userId, item) => {
    const docRef = await addDoc(collection(db, "users", userId, "items"), item);
    return docRef.id;
};

export const deleteItem = async (userId, itemId) => {
    await deleteDoc(doc(db, "users", userId, "items", itemId))
}
