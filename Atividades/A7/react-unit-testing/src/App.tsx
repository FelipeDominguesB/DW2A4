import { useState } from "react"

function App() {

  const [newItem, setNewItem] = useState('');
  const [list, setList] = useState(['Diego', 'Rodz', 'Mayk'])
  
  function addToList()
  {
    setList(state => [...state, 'Novo'])
  }
  function removeFromList(item: string)
  {
    setList(state => state.filter(element=> element!=item ))
  }
  return (
    <>
    <input placeholder="Novo item" value={newItem} onChange={e => setNewItem(e.target.value)}></input>
    <button onClick={addToList}>Adicionar</button>
      <ul>
        {list.map(item => 
          <li key={item}>{item}
          <button onClick={() => removeFromList(item)}></button>
          </li>)
        
        }
      </ul>
    </>
  )
}

export default App
