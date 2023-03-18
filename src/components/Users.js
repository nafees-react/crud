import Table from 'react-bootstrap/Table';
import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import { Link, NavLink } from 'react-router-dom';
import { MdDelete, MdAdd, MdModeEdit } from "react-icons/md";
import Alert from 'react-bootstrap/Alert';
import Swal from 'sweetalert2';
import http from './http';


export default function Users() {

  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState('');
  const[loading, SetLoading] = useState(true);

  const fetchAPI = async() =>{
    http.get('users').then(response=>{
      setUsers(response.data);
      SetLoading(false);
    })
    }
  
  useEffect(() =>{
    fetchAPI();
  },[])

  const isDeleting = (id) =>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteUser(id);
      }
    })
  }

  const deleteUser = async(id) => {

  http.post('user/delete', { "id": id }).then((res=>{
    setMessage('User deleted successfully');
    fetchAPI();
  }))
  }

  if(loading){
    return (
      <div style={{textAlign:'center'}}>Loading..</div>
    );
  }

  const setEditData = (id) =>
  {
    //console.log(id);
    const navigate = useNavigate();
    navigate('/edit',{state:{user_id:id}});
  }

  return (
    <>
    {!message?message:
    <Alert variant="success">{message}</Alert>}
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Mobile</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
      
      {!users.length ? <tr><td colSpan="6" style={{textAlign:'center', color:'red'}}>No data found</td></tr> 
      : users.map((row, index) => 
      <tr key={row.id}>
          <td>{++index}</td>
          <td>{row.fname}</td>
          <td>{row.lname}</td>
          <td>{row.mobile}</td>
          <td>{row.email}</td>
          <td>
          
            {/* <NavLink to="/create"><MdAdd /></NavLink> */}
            <Link to={"/edit"} state={{id:row.id, name:'Nafees'} }><MdModeEdit /></Link>
            <NavLink onClick={() => isDeleting(row.id)}>
            <MdDelete style={{color:'red'}}/></NavLink>  
          </td>
        </tr>
      )}
      </tbody>
    </Table>
    </>
  );
}