import { useState } from "react";
function Form({onAddItems}){

  const [description, setDescription] = useState("")
  const [quantity, setQuantity] = useState(1)
  

 

  function handleSubmit(e){

    e.preventDefault();

    if(!description.trim()) return

    const newItem = {description, quantity, packed: false, id: Date.now()}

    onAddItems(newItem)

    setDescription('')
    setQuantity(1)
  
  }


  return <form className="add-form" onSubmit={handleSubmit}>
    <h3>What do you need for your trip? </h3>
    <select onChange={(e) => setQuantity(Number(e.target.value))} value={quantity}>
      { 
      Array.from({length: 20}, (_, i) => i + 1)
      .map(num => <option key={num} value={num}>{num}</option>)
      }
    </select>

    <input type="text" onChange={(e) => setDescription(e.target.value)} value={description} placeholder="item..." />

    <button>Add</button>

  </form>
}

export default Form