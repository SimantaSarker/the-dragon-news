import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <Container className='w-50 mx-auto '>
    <Form>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Name</Form.Label>
        <Form.Control type="text" name='text'  placeholder="Enter Your Name" required />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Photo Url</Form.Label>
        <Form.Control type="text" name='photo'  placeholder="Enter Photo Url" required />
      </Form.Group>



      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email'  placeholder="Enter email" required />
      </Form.Group>




      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" required/>
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" name='accept'  label="Accept terms and conditions" />
      </Form.Group>


      <Button variant="primary" type="submit">
      Register
      </Button>
      <br />
     <Form.Text>Already have an account?
     <Link className='text-danger' to='/login'>Login</Link>
     </Form.Text>

      <Form.Text className="text-success">
         
        </Form.Text>
      <Form.Text className="text-danger">
          
        </Form.Text>
    </Form>
    </Container>
  );
};

export default Register;