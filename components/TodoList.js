'use client'

const { Fragment,useEffect } = require("react");
import {Container} from 'react-bootstrap' 

import { useSelector,useDispatch } from 'react-redux';
import { todoActions } from './reduxstore/todoListSlice';
import './TodoList.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


const TodoList=()=>{ 
    const item=useSelector((state)=>state.todos.todoItems)
    const dispatch=useDispatch()
    
    useEffect(()=>{
        async function fetchData(){
          const res=await fetch('api/get')
          const data=await res.json()
          console.log(data.result)
          dispatch(todoActions.addTodo(data.result))
        }
         fetchData()
    },[])
    const isCheckedHandler=async(item)=>{
          
         dispatch(todoActions.completeTodo(item._id))
         const response=await fetch('/api/put',{
            method:'PUT',
            body:JSON.stringify(item),
            headers:{
              "Content-Type": "application/json", 
            }
         })
         
    }
    const deleteTodoHandler=async(id)=>{
        dispatch(todoActions.deleteTodo(id))
        const response=await fetch('/api/delete',{
          method:'DELETE',
            body:JSON.stringify(id),
            headers:{
              'Content-Type':'application/json'
            }

        })
        const data=await response.json()
        console.log(data)

    }

    
    
    const todoItems=item.filter((obj)=> obj.completed===false)
    console.log(todoItems)
    return(
        <Fragment>
            <Container>
               <h2>Added Todo List</h2>
                {todoItems.map((item)=><Container key={item._id} className='rounded border  shadow-sm'>
                <label className="container-label mt-2">
                <input type="checkbox" onChange={isCheckedHandler.bind(null,item)} />
                 <span className="checkmark"></span>
               </label>
               <div className='details'>
                <h2 className='text-center'>Todo Information</h2>
               <h3 className='todoname'>Todo: {item.todoname}</h3>
                     <h5 className='todo-description'>Description: {item.description}</h5>
                     <button className='delete-btn' onClick={deleteTodoHandler.bind(null,item._id)}><FontAwesomeIcon icon={faTrash} style={{color: "#e60a0a",}} className="highlight"/></button>
                     </div>
                    
                    </Container>)}
            </Container>
        </Fragment>
    );
}

export default TodoList