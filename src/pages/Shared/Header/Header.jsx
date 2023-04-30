import React, { useContext } from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import {FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";
const Header = () => {
  const {user,logOut}=useContext(AuthContext);
  
  const handleLogOut=()=>{
    logOut().then((result)=>{
      console.log("successfully logOut")
    }).catch(()=>{

    })
  }
  
  return (
    <Container>
    
      <div className="text-center">
        <img src={logo} alt="" className="img-fluid" />
        <p className="fw-semibold text-secondary">
          Journalism Without Fear or Favour
        </p>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
      <div className="d-flex align-items-center gap-1 justify-content-between c mx-auto bg-secondary border-primary w-75 p-2 text-white border rounded">
        <Button variant="danger">Latest</Button>
        <Marquee speed={50} direction="right" pauseOnHover="true">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Marquee>
      </div>


      {/* ---------------navbar--------------------*/}



      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="mt-4 mb-4">
      <Container>
       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#features">
              <Link to='/category/0' className="text-decoration-none">Home</Link>
            </Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Career</Nav.Link>
          
          </Nav>
          <Nav className="d-flex align-items-center">
           {user &&  <Nav.Link href="#deets">{<FaUserCircle style={{fontSize:'2rem'}}></FaUserCircle>}</Nav.Link>}
      
           
           {user ? 
           <>
              <span className="span-style">
              {user.email} <button onClick={handleLogOut}>Log Out</button>
            </span>
  
            </>:
             <Link to='/login'><Button variant="secondary">Login</Button></Link> }
         
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    {/* {user && (
          <span className="span-style">
            {user.email} <button onClick={handleLogOut}>Log Out</button>{" "}
          </span>
        )} */}






    </Container>
  );
};

export default Header;
