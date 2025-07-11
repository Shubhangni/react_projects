
import './App.css'
import AddTodo from './components/addTodo'
import TodoItems from './components/todoItems'
import { useState } from 'react';
function App() {
  const todoItems = [{
    name: 'Buy Milk',
    dueDate: '12/12/2020',
  }, {
    name: 'Goto College',
    dueDate: '05/04/1004',
  }, {
    name: 'Make Break fast',
    dueDate: '09/12/4044',
  }];

  let [newTodoList, setNewTodoList] = useState(todoItems)
  const handleNewItem = (newItem, newDate) => {
    let newTodoItem = { name: newItem, dueDate: newDate, }
    setNewTodoList((todoItems) => [...todoItems, newTodoItem]);
  }

  return (
    <>
      <center className='todo-container'>
        <h1 className='kg-heading'>TODO App</h1>

        <AddTodo addNewItem={handleNewItem}></AddTodo>

        <TodoItems todoItems={newTodoList}></TodoItems>

      </center>
    </>
  )
}

export default App
