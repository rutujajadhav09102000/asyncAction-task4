import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BsFillTrashFill, BsFillPencilFill } from 'react-icons/bs'
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Table from 'react-bootstrap/Table';

import { addUsersDataAction, deleteUsersDataAction, getUsersDataAction, updateUsersDataAction } from '../action/usersAction';
const UsersData = () => {

    const dispatch = useDispatch();
    const usersReducerData = useSelector(state=>state.usersReducer)
    console.log("usersreducerdata...",usersReducerData)
    useEffect (()=>{
        dispatch(getUsersDataAction());
    },[])
    const handleAddUser = () => {
        dispatch(addUsersDataAction());
    }
    const handleDeleteUser = (id) => {
        dispatch(deleteUsersDataAction(id));
    }
    const handleUpdateUser = (id) => {
        dispatch(updateUsersDataAction(id));
    }
    return(
        <>
        <h2>UsersData</h2>
        
        { usersReducerData.loading ?
        <h3><Spinner
        animation="border"
      />Loading...</h3> : null
    }

        <Table  striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>USERNAME</th>
                    <th>EMAIL</th>
                    <th>PHONE</th>
                    <th>WEBSITE</th>
                    <th>DELETE</th>
                    <th>UPDATE</th>
                </tr>
            </thead>
            <tbody>
            {usersReducerData.userData && usersReducerData.userData.map((user,i)=>
                (
            <tr key={i}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.website}</td>
                    <td>
                        <Button variant="outline-danger" onClick={()=>handleDeleteUser(user.id)}><BsFillTrashFill/></Button>
                    </td>
                    <td>
                        <Button variant="outline-secondary" onClick={()=>handleUpdateUser(user.id)}><BsFillPencilFill/></Button>
                    </td>
                </tr>
                    ))}
            </tbody>
        </Table>
        
    <Button variant="primary" size="lg" onClick={handleAddUser}>Add</Button>

        </>
    )
}
export default UsersData