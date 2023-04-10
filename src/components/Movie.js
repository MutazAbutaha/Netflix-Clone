import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ModalMovie from "./ModalMovie";
import {useState} from 'react';
import "./Movie.css"


export default function Movie(props) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <div id="card">
      <Card id="incard">
        <Card.Img id="img" variant="top" src={`https://image.tmdb.org/t/p/w500/${props.movieData.poster_path}`} alt = {props.movieData.title} />
        <Card.Body >
          <Card.Title>{props.movieData.title}</Card.Title>
          <Card.Text>{props.movieData.release_date}</Card.Text>
          <Button variant="success" onClick={handleShow}>Show details</Button>
        </Card.Body>
      </Card>
      <br></br>
    </div>
    <ModalMovie show={show}  handleClose={handleClose} movieData = {props.movieData} commentHandler={props.commentHandler}/>
    </>
  );
}