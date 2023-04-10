import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useRef } from 'react';




export default  function ModalCard (props){
  const commentRef = useRef();

  function submitHandler(e){
    e.preventDefault();
    let userComment = commentRef.current.value;
    let newMovie={...props.movieData, userComment}
    props.commentHandler(newMovie,newMovie.id);
  }

 async function addToFavHandler(e,movie){
  e.preventDefault();

  let url =`${process.env.REACT_APP_SERVER_URL}/addMovie`;
  
  let data={
    title: props.movieData.title,
    release_date: props.movieData.release_date,
    overview : props.movieData.overview,
    poster_path :`https://image.tmdb.org/t/p/w500/${props.movieData.poster_path}`,
    comments : props.movieData.comments
  }
  const response = await fetch (url,{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })

}
    return (
      <>
      <Modal show={props.show} onHide={props.handleClose} >
      <Modal.Header closeButton>
      <Modal.Title>{props.movieData.title}</Modal.Title>
      </Modal.Header>
      <img src ={`https://image.tmdb.org/t/p/w500/${props.movieData.poster_path}`} alt = {props.movieData.title}/>
      <Modal.Body>{props.movieData.overview}</Modal.Body>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      {props.movieData.comments? props.movieData.comments: "No comment Added "}
      <br></br>
      <Form.Label>add a comment</Form.Label>
      <br></br>
      <Form.Control id="textarea" ref={commentRef} as="textarea" rows={1} placeholder="Enter your comment "/>
      </Form.Group>
      <Modal.Footer>
        <Button variant="primary" onClick={(e)=>submitHandler(e)}>
        Submit
        </Button>
        <Button variant="primary" onClick={(e)=>addToFavHandler(e)}>
        add to favorite 
        </Button>
        <Button variant="secondary" onClick={props.handleClose}>
        Close
      </Button>
      </Modal.Footer>
    </Modal>
      </>
    )
}