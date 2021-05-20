import React from "react";
import {Container, ListGroup} from 'react-bootstrap';
function Todos({todos,display,onChangeStatus}) {
    const displayTodo = todos.filter((todo)=>todo.status === display);
    const allTodos = displayTodo.map((todo)=>
                    <ListGroup.Item 
                        as="li" 
                        key={todo.id} 
                        onClick={()=>
                            onChangeStatus(todo.id)
                        }
                        >
                        {todo.title}
                    </ListGroup.Item>)
  return (
    <Container>
      <ListGroup as="ul">
        <ListGroup.Item as="li" className={display==='pending'? 'bg-danger text-white':'bg-success text-white'}>
          Todo List
        </ListGroup.Item>
        {allTodos}
      </ListGroup>
    </Container>
  );
}

export default Todos;
