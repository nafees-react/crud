import { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate, useLocation } from "react-router-dom";
import http from './http';

export default function EditUser() {
  const[userID, setuserID] = useState();
  //const[success, setSuccess] = useState(false);
  const[btnText, SetBtnText] = useState('Submit');
  const [userData, setUserData] = useState([]);
  const [inputs, setInputs] = useState({});



const location = useLocation();
const user_id = location.state.id;
const redirect = useNavigate();

    const getUser = async() =>{
      http.get("user/"+user_id).then((response)=>{
        setInputs({
          fname: response.data.fname,
          lname: response.data.lname,
          mobile: response.data.mobile,
        })
      })
      setuserID(user_id);
    }
    useEffect(() =>{
      getUser();
    },[])

    const handleCHange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values,[name]:value}));
      
    }

  const updateUser = async (event) => {
    event.preventDefault();
    SetBtnText("Updating..");
    http.post('user/updateUser/'+user_id, inputs).then((res=>{
      redirect('/Users');
    }))
  }

  return (
    <>
    <div className='px-2'>
    <p><Link to='/Users' className='btn btn-primary float-end'>Back</Link></p>
    <h2>Update User</h2>
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

      <Button variant="primary" type="submit" onClick={updateUser}>
        {btnText}
      </Button>
    </Form>
    </div>
    </>
  );
}