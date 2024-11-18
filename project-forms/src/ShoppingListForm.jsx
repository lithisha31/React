import { useState } from "react"

export default function ShoppingListForm({addItem}){
    const[formData,setFormData] = useState({product:"",quantity:0});
    const changeItem = (e) => {
        setFormData((oldItem)=>{
            return {...oldItem,
                [e.target.name]:e.target.value,
            }
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        addItem(formData);
        setFormData({product:"",quantity:0})
    }


    return(
        <form style={{placeContent:"center",height: "100vh"}}>
            <label for="Product">Product</label>
            <input type="text" id="Product" value={formData.product} name="product" onChange={changeItem}></input>
            <label for="Quantity">Quantity</label>
            <input type="number" id="Quantity" value={formData.quantity} name="quantity" onChange={changeItem}></input>
            <button onClick={handleSubmit}>Submit</button>
        </form>
    )
}