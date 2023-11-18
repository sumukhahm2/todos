import { createSlice,current} from "@reduxjs/toolkit";

const defaultTodos={
    todoItems:[],
}

const todoSlice=createSlice({
    name:'todos',
    initialState:defaultTodos,
    reducers:{
        addTodos(state,action){

       state.todoItems=[action.payload].concat(state.todoItems)
           console.log(state.todoItems)
        },
        completeTodo(state,action)
        {
           
            const index=state.todoItems.findIndex((obj)=>obj._id===action.payload)
            //console.log(index)
            state.todoItems[index]={...state.todoItems[index],completed:true}   
            state.todoItems=state.todoItems.filter((obj)=>obj._id!==action.payload)
            
        },
        addTodo(state,action){
            state.todoItems=[]
           state.todoItems=state.todoItems.concat(action.payload)
           console.log(action.payload)
           
        },
        deleteTodo(state,action){
        state.todoItems=state.todoItems.filter((obj)=>obj._id!==action.payload)
        }
    }
})

export const todoActions=todoSlice.actions

export default todoSlice.reducer