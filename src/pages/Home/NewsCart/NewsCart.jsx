import moment from "moment";
import React from "react";
import { Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { FaBookmark, FaRegStar, FaStar } from "react-icons/fa";
import { MdRemoveRedEye } from "react-icons/md";
import { HiShare } from "react-icons/hi2";
import Rating from "react-rating";
const NewsCart = ({ news }) => {
  const { title, details, _id, image_url, author, total_view, rating } = news;
  return (
    <Card className=" mb-4">
      <Card.Header className="d-flex gap-2 align-items-center">
        <Image src={author?.img} roundedCircle style={{ height: "45px" }} />
        <div className="flex-grow-1">
          <p className="mb-0">{author?.name}</p>
          <p>
            <small>
              {moment(author?.published_date).format("Y-MM-D")}
            </small>
          </p>
        </div>
        <div>
          <FaBookmark />
          <HiShare />
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length < 250 ? (
            <>{details}</>
          ) : (
            <>
              {details.slice(0, 250)}..
              <Link to={`/news/${_id}`}>Read More</Link>
            </>
          )}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="text-muted d-flex">
        <div className="flex-grow-1">
          <Rating
           placeholderRating={rating.number}
           readonly
            emptySymbol={<FaRegStar></FaRegStar>}
          
           placeholderSymbol={<FaRegStar className="text-warning"></FaRegStar>}
        
           fullSymbol={<FaStar></FaStar>}
         
          >
          </Rating>
          <span>{rating?.number}</span>
        </div>
        <div>
          <MdRemoveRedEye/>
          {total_view}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCart;
