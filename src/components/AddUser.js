import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useNavigate, Link } from "react-router-dom";
import http from './http';

export default function AddUser() {
  const [message, setMessage] = useState('');
  const[btnText, SetBtnText] = useState('Submit');
  const [inputs, setInputs] = useState({});

  const handleCHange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values,[name]:value}));
  }
  const redirect = useNavigate();
  const createNewUser = async (event) => {

    event.preventDefault();
    SetBtnText("Saving..");
    http.post('user/add', inputs).then((res=>{
      setMessage('User added successfully');
      redirect('/Users');
    }))
  }

  return (
    <>
    <div className='px-2'>
    <p><Link to='/Users' className='btn btn-primary float-end'>Back</Link></p>
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" name='fname' value={inputs.fname || ''} onChange={handleCHange} placeholder="Enter First Name" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" name='lname' value={inputs.lname || ''} onChange={handleCHange} placeholder="Enter Last Name" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Mobile</Form.Label>
        <Form.Control type="number" name='mobile' value={inputs.mobile || ''} onChange={handleCHange} placeholder="Enter Mobile Number" />
    </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' value={inputs.email || ''} onChange={handleCHange} placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' value={inputs.password || ''} onChange={handleCHange} placeholder="Password" />
      </Form.Group>
      
      <Button variant="primary" type="submit" onClick={createNewUser}>
        {btnText}
      </Button>
    </Form>
    </div>
    </>
  );
}