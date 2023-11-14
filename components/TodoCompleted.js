'use client'

const { Fragment } = require("react");
import {Container} from 'react-bootstrap' 
import { useSelector } from 'react-redux';
import './TodoList.css'

const TodoCompleted=()=>{ 
   
    const item=useSelector((state)=>state.todos.todoItems)
    const completedItem=item.filter((obj)=>obj.completed===false)
    console.log(item)
    return(
        <Fragment>
            <Container>
               <h2>Added Todo List</h2>
                {completedItem.map((item)=><Container className='rounded border  shadow-lg'>
                <label className="container-label mt-2">
                     <h3>Todo:- {item.todoname}</h3>
                     <h3>Description:- {item.description}</h3>
                <input type="checkbox"  />
                 <span className="checkmark"></span>
               </label>
                    
                    </Container>)}
            </Container>
        </Fragment>
    );
}

export default TodoCompleted