import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default  function ModalCard (props){
    return (
        <Modal show={props.show} onHide={props.handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>{props.movieData.title}||{props.movieData.title}</Modal.Title>
        </Modal.Header>
        <img src ={`https://image.tmdb.org/t/p/w500/${props.movieData.poster_path}`} alt = {props.movieData.title}/>
        <Modal.Body>{props.movieData.overview}</Modal.Body>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>add a comment</Form.Label>
        <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={props.handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    )
}