import React, { useState } from 'react';
import Navbar from './Components/Navbar';

const App = () => {
  const [todo, setTodo] = useState(''); 
  const [todos, setTodos] = useState([]);
  const[showFinished, setShowFinished] = useState(false);

  // Handle adding a new todo
  const handleAdd = () => {
    if (todo.trim().length<4) {
      alert("Please enter more than 4 or 4 characters.");
      return;
    }
    
    setTodos([...todos, { todo, isComplete: false }]);
    setTodo(''); // Clear input after adding
    
  };

  // Handle editing a todo
  const handleEdit = (index) => {
    const newTodos = [...todos];
    const editedTodo = prompt('Edit your todo', newTodos[index].todo);
    if (editedTodo !== null && editedTodo.trim()) {
      newTodos[index].todo = editedTodo;
      setTodos(newTodos);
    }
  };

  const toggleFinished = () => {
    
  }
  
  // Handle deleting a todo
  const handleDelete = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  // Handle toggling complete/incomplete status
  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].isComplete = !newTodos[index].isComplete;
    setTodos(newTodos);
    const anyCompleted = newTodos.some(todo => todo.isComplete);
    setShowFinished(anyCompleted); // Set showFinished to true if any todo is complete

  };

  // Handle input change for the new todo
  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <> 
      <Navbar />
      <div className = 'Container mx-auto my-5 rounded-md p-4 bg-green-500'>
        <div className='addaTodo '>
        <h2 className='relative text-lg font-bold text-amber-400 transition-all group'>
        <span className='hover:text-amber-500 font-large '>Add a Todo</span>
      </h2>
          
          <input
            className='w-1/4'
            type="text"
            value={todo}
            onChange={handleChange}
          />
          <button
            className='bg-violet-950 hover:bg-yellow-300 px-3 text-white font-bold rounded-md mx-4'
           onClick={handleAdd}
          >
            Save
          </button>
        </div>
        <br />
        <input type="checkbox" checked={showFinished} onChange={()=>setShowFinished(!showFinished)}/> Show Finished.
        <h1 className="text-xl font-bold text-white">Your Todos</h1>
        <div className='todos'>
        {todos.map((item, index) => (
  <div key={index} className='todo flex w-full justify-between'>
    <input 
      type="checkbox" 
      checked={item.isComplete} 
      onChange={() => toggleComplete(index)} 
    />
    <div className={item.isComplete ? "line-through" : ""}>{item.todo}</div>
    <div className='buttons'>
      <button onClick={() => handleEdit(index)} className='bg-violet-800 hover:bg-voilet-950 p-2 py-1 text-sm font-bold text-white rounded-md'>Edit</button>
      <button onClick={() => handleDelete(index)} className='bg-violet-800 hover:bg-voilet-950 p-2 py-1 text-sm font-bold text-white rounded-md'>Delete</button> 
    </div>
  </div>
))}
        </div>          
    </div>
</>
  );
};

export default App;
