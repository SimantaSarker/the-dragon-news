import React from "react";
import { Button } from "react-bootstrap";
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

const RightNav = () => {
  return (
    <div>
      <h2>Login with..</h2>
      <Button variant="outline-primary" className="w-75">
        <FaGoogle /> Login with Google
      </Button>
      <Button variant="outline-secondary" className="w-75 mt-3">
        <FaGithub /> Login with Github
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
