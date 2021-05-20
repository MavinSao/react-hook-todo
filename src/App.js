import Form_Todo from "./components/Form_Todo";
import Nav_Bar from "./components/Nav_Bar";
import Todos from "./components/Todos";
import { useState } from 'react'
function App() {

  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "Exam",
      status: 'pending'
    },
    {
      id: 2,
      title: "Homework",
      status: 'pending'
    }, {
      id: 3,
      title: "Practice",
      status: 'pending'
    }
  ])

  const [display, setDisplay] = useState('pending')

  const onAdd = (text) => {
    let lenght = todo.length
    let newTodo = { id: ++lenght, title: text, status: 'pending' }
    let allTodo = [...todo, newTodo]
    setTodo(allTodo)
  }

  const onChangeStatus = (id) => {
    let allTodo = [...todo]
    let index = allTodo.findIndex(todo => todo.id === id)
    allTodo[index].status = allTodo[index].status === 'pending' ? 'complete' : 'pending'
    setTodo(allTodo)
  }

  const onChangeDisplay = (disType) => {
    setDisplay(disType)
  }

  return (
    <div >
      <Nav_Bar />
      <Form_Todo onAdd={onAdd} onChangeDisplay={onChangeDisplay} display={display} />
      <Todos todos={todo} display={display} onChangeStatus={onChangeStatus} />
    </div>
  );
}

export default App;
