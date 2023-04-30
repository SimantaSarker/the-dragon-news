import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { GoogleAuthProvider, signInWithPopup,GithubAuthProvider } from "firebase/auth";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import QZone from "../Qzone/QZone";
import bg from "../../../assets/bg.png";
const googleProvider = new GoogleAuthProvider();
const githubProvider=new GithubAuthProvider();
import { getAuth } from "firebase/auth";
import app from "../../../firebase/firebase.config";
import { AuthContext } from "../../../providers/AuthProvider";
const auth=getAuth(app)

const RightNav = () => {
  const {user}=useContext(AuthContext);
 

const handleGoogle=()=>{
  signInWithPopup(auth,googleProvider)
  .then((result)=>{
    const loggedUser=result.user;
    console.log(loggedUser);
    


  })
  .catch((error)=>{
    console.log(error.message)

  })


}


const handleGithub=()=>{
  signInWithPopup(auth,githubProvider)
  .then((result)=>{
    const githubUser=result.user;
    console.log(githubUser);
    
  })
  .catch((error)=>{
    console.log(error)
  })
}

  return (
    <div>
      <h2>Login with </h2>
      <Button variant="outline-primary" className="w-75" onClick={handleGoogle}>
        <FaGoogle /> Login with Google
      </Button>
      <Button variant="outline-secondary" className="w-75 mt-3" onClick={handleGithub} >
        <FaGithub/> Login with Github
      </Button>
      <div className="mt-4">
        <h2>Find us On..</h2>
        <ListGroup>
          <ListGroup.Item>
            {" "}
            <FaFacebook className="bg-secondary border rounded" /> Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            {" "}
            <FaTwitter /> Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            {" "}
            <FaInstagram /> Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
      <div>
        <img src={bg} alt="" className="w-100" />
      </div>
    </div>
  );
};

export default RightNav;
