import { useState } from "react";



function App() {

  const [items, setItems] = useState([])

   function handleAddItems(item){
    setItems(items => [...items, item])
  }

  function handleDeleteItem(id){
    setItems(items => items.filter(item => item.id !== id))
    
  }

  function handleToggleItem(id){
    setItems(items => items.map(item => item.id === id ? {...item, packed: !item.packed} : item ))
  }

  return <div className="app">

  <Logo  />
  <Form onAddItems={handleAddItems} />
  <PackingList items={items} onDeleteItem={handleDeleteItem} onHandleToggleItem={handleToggleItem} />
  <Stats  />
  
  </div>

}


function Logo(){
  return <h1>🌴 Far Away 👜</h1>
}

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
function PackingList({items, onDeleteItem, onHandleToggleItem}){
  return <div  className="list">
    <ul>
{
  items.map(item => <Item onHandleToggleItem={onHandleToggleItem} item={item} key={item.id} onDeleteItem={onDeleteItem} />)
} 

  </ul>
  </div>
}

function Item({item, onDeleteItem, onHandleToggleItem}){
  return <li>
    <input type="checkbox" value={item.packed} onChange={() => onHandleToggleItem(item.id) } />
    <span style={item.packed ? {textDecoration: "line-through"} : {}}>{item.quantity} {item.description}</span>
    <button onClick={() => onDeleteItem(item.id)}>❌</button>
   
  </li>
}

function Stats(){
  return <footer className="stats">
    <em>
    You have X items  on your list, and you already packed X (X%)
    </em>
  </footer>
}

export default App;
