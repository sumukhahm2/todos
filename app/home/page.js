'use client'

const { Fragment } = require("react")
import TodoList from "@/components/TodoList"
import { useEffect } from "react"


const TodoHome=()=>{
    useEffect(()=>{
        console.log('hello')
    },[])
    
    return( 
        <Fragment>
            <TodoList/>
        </Fragment>
    )
}

export default TodoHome