import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Login = () => {
const location=useLocation();

 const from = location.state?.from?.pathname || "/category/0";


  const navigate=useNavigate();
  const {signIn}=useContext(AuthContext);
  const[error,setError]=useState('')
  const [success,setSuccess]=useState('');


  const handleLoginIn=(event)=>{
    event.preventDefault();
    const form=event.target;
    const email=form.email.value;
    const password=form.password.value;

    signIn(email,password)
    .then((result)=>{
      const user=result.user;
      form.reset();
      navigate(from,{ replace: true })

    })
    .catch((error)=>{
      console.log(error.message)
      setError(error.message)
    })
  }







  return (
    <Container className='w-50 mx-auto '>
    <Form onSubmit={handleLoginIn}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email'  placeholder="Enter email" required />
      
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" required/>
      </Form.Group>
 
      <Button variant="primary" type="submit">
      Login
      </Button>
      <br />
     <Form.Text>Don't have an account?
     <Link className='text-danger' to='/register'>Register</Link>
     </Form.Text>

      <Form.Text className="text-success">
         {success}
        </Form.Text>
      <Form.Text className="text-danger">
          {error}
        </Form.Text>
    </Form>
    </Container>
  );
};

export default Login;