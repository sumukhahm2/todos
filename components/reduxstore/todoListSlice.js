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
            const index=state.todoItems.findIndex((obj)=>obj.id===action.payload)
            
            state.todoItems[index]={...state.todoItems[index],completed:true}
            
            
            
        }
    }
})

export const todoActions=todoSlice.actions

export default todoSlice.reducer