'use client'

const { Fragment,useEffect } = require("react");
import {Container} from 'react-bootstrap' 
import { useSelector,useDispatch } from 'react-redux';
import { todoActions } from './reduxstore/todoListSlice';
import './TodoList.css'

const TodoCompleted=()=>{ 
    const dispatch=useDispatch()

    useEffect(()=>{
        async function fetchData(){
          const res=await fetch('http://localhost:3000/api/get')
          const data=await res.json()
          console.log(data.result)
          dispatch(todoActions.addTodo(data.result))
        }
         fetchData()
    },[])
    const item=useSelector((state)=>state.todos.todoItems)
    const completedItem=item.filter((obj)=>obj.completed===true)
    console.log(item)
    return(
        <Fragment>
            <Container>
               <h2>Completed Todo List</h2>
                {completedItem.map((item)=><Container key={item._id} className='rounded border mb-1 shadow-sm'>
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