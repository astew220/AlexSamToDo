import {useState} from 'react';

function ToDoList(){

const [list, setList] = useState(['wipe butt', 'wipe sam\'s butt', 'clean kitchen']);
const [newItem, setNewItem] = useState('');

const handleAddItem = () => {
     setList(prevList => [...prevList, newItem])
};

const handleItemChange = ({target}) => {
    setNewItem(n => n = target.value)
}

const handleDelete = (index) => {
    const remover = list.filter((item, ind) => index !== ind)
    setList(prevList => prevList = [...remover])
    
}

const handleUp = (index) => {
    if(index > 0){
    const updatedTasks = [...list];
    [updatedTasks[index], updatedTasks[index-1]] =
    [updatedTasks[index-1], updatedTasks[index]]
    setList(prevList => prevList = updatedTasks)
    }
}

const handleDown = (index) => {
if(index < list.length-1){
    const updatedTasks = [...list];
    [updatedTasks[index], updatedTasks[index+1]] =
    [updatedTasks[index+1], updatedTasks[index]]
    setList(prevList => prevList = updatedTasks)
    }
}

const handleCheck = (currentId) => {
   const currentEl = document.getElementById(currentId);
   currentEl.classList.toggle('strike-through')
}
return (
    <div>
       <h1>Do Doo List</h1>
       <input onChange={handleItemChange} type="text" value={newItem} placeHolder="add some shit..."/>
       <button onClick={handleAddItem}>Add</button>
       <ol>
        {list.map((item, index)=> 
             <li className={`list-${index}`} id={`list-${index}`} key={index}>{item}
             <button onClick={()=>handleDelete(index)}>Delete</button>
             <button onClick={() => handleUp(index)}>☝️</button>
             <button onClick={() => handleDown(index)}>👇</button>
             <button className="mark-as-done" onClick={() => handleCheck(`list-${index}`)}> ✅</button>
             </li>
        )}
       </ol>
    </div>
)


}

export default ToDoList 