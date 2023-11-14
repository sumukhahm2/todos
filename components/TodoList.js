'use client'

const { Fragment } = require("react");
import {Container} from 'react-bootstrap' 
import { useSelector,useDispatch } from 'react-redux';
import { todoActions } from './reduxstore/todoListSlice';
import './TodoList.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
const TodoList=()=>{ 
   const dispatch=useDispatch()
    const isCheckedHandler=(id)=>{
    
         dispatch(todoActions.completeTodo(id))
       
    }
    const item=useSelector((state)=>state.todos.todoItems)
    const todoItems=item.filter((obj)=> obj.completed===false)
    return(
        <Fragment>
            <Container>
               <h2>Added Todo List</h2>
                {todoItems.map((item)=><Container className='rounded border  shadow-sm'>
                <label className="container-label mt-2">
                <input type="checkbox" onChange={isCheckedHandler.bind(null,item.id)} />
                 <span className="checkmark"></span>
               </label>
               <div className='details'>
                <h2 className='text-center'>Todo Information</h2>
               <h3 className='todoname'>Todo: {item.todoname}</h3>
                     <h5 className='todo-description'>Description: {item.description}</h5>
                     <button className='delete-btn'><FontAwesomeIcon icon={faTrash} style={{color: "#e60a0a",}} className="highlight"/></button>
                     </div>
                    
                    </Container>)}
            </Container>
        </Fragment>
    );
}

export default TodoList