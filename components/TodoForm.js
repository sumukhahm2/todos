

import { Fragment,useRef} from "react"
import { todoActions } from "./reduxstore/todoListSlice"
import {Form,Row,Col,Button} from 'react-bootstrap'
import { useDispatch } from "react-redux"
const TodoForm=()=>{
    const dispatch=useDispatch()
   const todoInputRef=useRef()
   const todoDescriptionRef=useRef()
    const todoFormSubmitHandler=async(event)=>{
      event.preventDefault()
      console.log('todos')
       const todos={
        id:Math.random().toString(),
         todoname:todoInputRef.current.value,
         description:todoDescriptionRef.current.value,
         completed:false
       }
       console.log(todos)
       const response=await fetch('/api/post',{
        method:'POST',
        body:JSON.stringify(todos),
        headers:{
          "Content-Type": "application/json", 
        }
     })
     const data=await response.json()
     console.log(data)
      dispatch(todoActions.addTodos(todos))
      
    }
    return(
        <Fragment>
            <Row>
             <Col>
             </Col>
             <Col className="col-8">
              <Form className="mt-2 border border-secondary p-2 shadow-sm" onSubmit={todoFormSubmitHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Todos</Form.Label>
                <Form.Control type="text" placeholder="Enter todos" ref={todoInputRef} />
                </Form.Group>

               <Form.Group className="mb-3" controlId="formBasicPassword">
               <Form.Label>Description</Form.Label>
               <Form.Control type="text" placeholder="Description" ref={todoDescriptionRef}/>
               </Form.Group>
               <Button className='btn-warning' type="submit">+Add</Button>
              </Form>
             </Col>
             <Col>
             </Col>
         </Row>
        </Fragment>
    )
}

export default TodoForm