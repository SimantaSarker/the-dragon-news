import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaArrowLeft } from 'react-icons/fa';
import EditorInsights from "../EditorInsightes/EditorInsights";
const News = () => {
  const news = useLoaderData();
  console.log(news)

  const { title, details, _id, image_url,category_id }=news
  return (
    <>
    <h1>Dragon News</h1>
    <Card>
     
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {details}
        </Card.Text>

        <Link to={`/category/${category_id}`}>  <Button variant="danger"> <FaArrowLeft></FaArrowLeft>  ALL News in this category</Button></Link>
      </Card.Body>
    </Card>
    <EditorInsights></EditorInsights>
    </>
  );
};

export default News;
