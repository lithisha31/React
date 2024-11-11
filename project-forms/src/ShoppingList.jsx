import { useState } from "react";
import ShoppingListForm from "./ShoppingListForm";

export default function ShoppingList(){
    const[item,setItem] = useState([
        {product:"Bananas",quantity:2},
        {product:"Apple",quantity:10}
    ])

    const addItem = (item) =>{
        setItem((currItem)=>{
            return [...currItem,
                {...item}
            ]
        })
    }

    return(
        <div>
            <h1>Shoppping List</h1>
            <ul>
            {item.map((i)=>{
                return <li>
                     {i.product}-{i.quantity}
                    </li>;
            })}
            </ul>
            <ShoppingListForm addItem={addItem}/>
        </div>
    )
}