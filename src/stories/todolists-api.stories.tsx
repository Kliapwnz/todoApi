import React, {useEffect, useState} from 'react'
import axios from "axios";

export default {
   title: 'API',
}
const settings = {
   withCredentials: true,
   headers: {
      "API-KEY": "2c5c7262-9052-4477-a377-17e2197193ef"
   }
}

export const GetTodolists = () => {
   const [state, setState] = useState<any>(null)
   useEffect(() => {
      // здесь мы будем делать запрос и ответ закидывать в стейт.
      // который в виде строки будем отображать в div-ке
      axios.get("https://social-network.samuraijs.com/api/1.1/todo-lists", settings)
         .then((res) => {
            setState(res.data)

         })

   }, [])
   return <div>{JSON.stringify(state)}</div>
}

export const CreateTodolist = () => {
   const [state, setState] = useState<any>(null)
   useEffect(() => {
      axios.post("https://social-network.samuraijs.com/api/1.1/todo-lists", {title: "KLIApwnz"}, settings)
         .then((res) => {
            setState(res.data)
         })
   }, [])


   return <div>{JSON.stringify(state)}</div>
}

export const DeleteTodolist = () => {
   const [state, setState] = useState<any>(null)
   useEffect(() => {
      axios.post("https://social-network.samuraijs.com/api/1.1/todo-lists/c80e7753-ad13-474e-bc3a-ab6dcd76aaa7", settings)
         .then((res) => {
            setState(res.data)
         })
   }, [])

   return <div>{JSON.stringify(state)}</div>
}

export const UpdateTodolistTitle = () => {
   const [state, setState] = useState<any>(null)
   useEffect(() => {
   }, [])

   return <div>{JSON.stringify(state)}</div>
}