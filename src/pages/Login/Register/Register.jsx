import React, { useContext, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { AuthContext } from "../../../providers/AuthProvider";

const Register = () => {
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const [success,setSuccess]=useState('');
  const [accepted,setAccepted]=useState(false);

  const { createUser } = useContext(AuthContext);

  const handleRegister = (event) => {
    setError("");
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password, name, photo);
    if (password.length < 8) {
      setError("Password must be at least eight character..");
      return;
    }
    if (!/(?=.*[A-Z])/.test(password)) {
      setError("add at least one UpperCase character..");
      return;
    }
    if(!/(?=.*[!@#$%^&*])/.test(password))
    {
      setError('Add at least one special character..');
      return;
    }
    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
setSuccess("Successfully Logged In")
        form.reset();
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleAccepted=(event)=>{
    setAccepted(event.target.checked)

  }


  return (
    <Container className="w-50 mx-auto ">
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo Url</Form.Label>
          <Form.Control
            type="text"
            name="photo"
            placeholder="Enter Photo Url"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type={show ? "password" : "text"}
            name="password"
            placeholder="Password"
            required
          />
          <p onClick={() => setShow(!show)}>
            <small>
              {show ? (
                <span>
                  {" "}
                  <AiFillEyeInvisible
                    style={{ fontSize: "2rem" }}
                  ></AiFillEyeInvisible>{" "}
                </span>
              ) : (
                <span>
                  {" "}
                  <AiFillEye style={{ fontSize: "2rem" }}></AiFillEye>{" "}
                </span>
              )}
            </small>
          </p>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            onClick={handleAccepted}
            name="accept"
            label={<>Accept <Link to='/terms'>Terms and conditions</Link></>}
          />
        </Form.Group>

        <Button variant="primary" type="submit" disabled={!accepted}>
          Register
        </Button>
        <br />
        <Form.Text>
          Already have an account?
          <Link className="text-danger" to="/login">
            Login
          </Link>
        </Form.Text>

        <Form.Text className="text-success">{error}</Form.Text>
        <Form.Text className="text-danger">{success}</Form.Text>
      </Form>
    </Container>
  );
};

export default Register;
