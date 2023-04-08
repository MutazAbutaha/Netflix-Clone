import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ModalMovie from "./ModalMovie";
import {useState} from 'react';


export default function Movie(props) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <div >
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.movieData.poster_path} alt = {props.movieData.title} />
        <Card.Body>
          <Card.Title>{props.movieData.title}</Card.Title>
          <Button variant="success" onClick={handleShow}>show details</Button>
        </Card.Body>
      </Card>
      <br></br>
    </div>
    <ModalMovie show={show}  handleClose={handleClose} movieData = {props.movieData}/>
    </>
  );
}