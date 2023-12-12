import {   USERS_DATA_FAILURE, USERS_DATA_PENDIND, USERS_DATA_SUCCESS } from "../type/type"
import axios from 'axios'

const getUsersDataSuccess = (data) => {
    return{
        type : USERS_DATA_SUCCESS,
        payload : data
    }
}

const addUsersDataSuccess = (data) => {
    return{
        type : USERS_DATA_SUCCESS,
        payload : data
    }
}

const deleteUsersDataSuccess = (userId) => {
    return{
        type : USERS_DATA_SUCCESS,
        payload : userId,
    }
}

const updateUsersDataSuccess = (data) => {
    return{
        type : USERS_DATA_SUCCESS,
        payload : data,
    }
}

const usersDataPending = () => {
        return{
            type : USERS_DATA_PENDIND,
        }
    }
    const usersDataFailure = (errMsg) => {
        return{
            type : USERS_DATA_FAILURE,
            payload : errMsg
        }
    }

export const getUsersDataAction = () => {
    return(dispatch)=>{
        dispatch(usersDataPending())
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            console.log("response...",res)
            dispatch(getUsersDataSuccess(res.data))
        })
        .catch((err)=>{
            console.log("error...",err)
            dispatch(usersDataFailure("Somthing went wrong"))
        })
    }
}

export const addUsersDataAction=()=>{
    let u={
        "name":"r",
        "username":"rj",
        "email":"rj.com"
    }
    return(dispatch)=>{
        dispatch(usersDataPending())
        axios.post("https://jsonplaceholder.typicode.com/users",u)
        .then((response)=>{
            console.log("response....",response)
            dispatch(addUsersDataSuccess(response.json()))
        })
        .catch((error)=>{
            console.log("error....",error)
            dispatch(usersDataFailure("Something went wrong"))
        })
    }
}

export const deleteUsersDataAction=(id)=>{
    return(dispatch)=>{
        dispatch(usersDataPending())
        axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response)=>{
            console.log("response....",response)
            dispatch(deleteUsersDataSuccess(response.json()))
        })
        .catch((error)=>{
            console.log("error....",error)
            dispatch(usersDataFailure("Something went wrong"))
        })
    }
}

export const updateUsersDataAction=(id)=>{
    return(dispatch) => {
        let u = {
            "name" : "rutuja",
            "username" : "rutujadhav",
            "email" : "rutuja@gmail.com"
        }
        dispatch(usersDataPending())
        axios.put(`https://jsonplaceholder.typicode.com/users/${id}`,u)
        .then((response)=>{
            console.log("response....",response)
            dispatch(updateUsersDataSuccess(response.json()))
        })
        .catch((error)=>{
            console.log("error....",error)
            dispatch(usersDataFailure("Something went wrong"))
        })
    }
}