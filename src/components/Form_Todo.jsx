import React,{useState} from 'react'
import { Button, Container, Form, ButtonGroup } from "react-bootstrap";

function Form_Todo({display,onChangeDisplay,onAdd}) {

  const [types] = useState(['pending','complete'])

  const [todoText, setTodoText] = useState('')

  return (
    <Container>
        <div className="display-3 my-3 text-center">Todos</div>
        <Form className="d-flex justify-content-center">
          <Form.Control 
          type="text" 
          placeholder="Normal text" 
          value={todoText} 
          onChange={(e)=>setTodoText(e.target.value)}
          className="mx-2" />
          <Button
            onClick={()=>onAdd(todoText)}
          >ADD</Button>
        </Form>
        <ButtonGroup aria-label="type" className="my-4 pl-1">
          {
              types.map((type,idx)=>
              <Button 
              key={idx} variant="secondary"
              onClick={()=>
                onChangeDisplay(type)
              } 
              active={type===display}>
                  {type}
                  </Button>)
          }
        </ButtonGroup>
      </Container>
  )
}

export default Form_Todo
