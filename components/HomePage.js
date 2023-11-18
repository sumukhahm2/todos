'use client'

import { Fragment,useEffect } from "react"
import { useDispatch } from "react-redux"
import { todoActions } from "./reduxstore/todoListSlice"

const HomePage=()=>{
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
    return(
        <Fragment>
            <p>Home Page</p>
        </Fragment>
    )
}

export default HomePage