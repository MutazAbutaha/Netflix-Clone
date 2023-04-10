import { useEffect, useState, useRef } from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./FavList.css";




export default function FavList(props) {

    const commentRef = useRef();
    const [favMovies, setFavMovies] = useState([]);


    async function getFavMovies() {
        let url = `${process.env.REACT_APP_SERVER_URL}/getMovies`;

        let response = await fetch(url, {
            method: 'GET',
        })

        let recivedData = await response.json();
        setFavMovies(recivedData);
    }

    async function handleDelete(id) {
        let url = `${process.env.REACT_APP_SERVER_URL}/DELETE/${id}`;

        let response = await fetch(url, {

            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })


        if (response.status === 204) {
            getFavMovies();
            

        }
    }
    
    
    async function handleUpdate(id) {
        let url = `${process.env.REACT_APP_SERVER_URL}/UPDATE/${id}`;
        let userComment = commentRef.current.value;
        let response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({comments: userComment}),
        })

        getFavMovies();
    }

    useEffect(() => {
        getFavMovies();
        

    }, [])



    return (
        <>
            <h2>Welcome to Favorite Movie List Page</h2>
            <div id='cards'>

                {
                    favMovies && favMovies.map(movie => {
                        return (
                            <div id='card'>
                                <Card id='incard'>
                                    <Card.Img id="img" variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                                    <Card.Body>
                                        <Card.Title>{movie.title}</Card.Title>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                            {movie.comments ? movie.comments : "No comment Added "}
                                            <br></br>
                                            <Form.Control id="textarea" ref={commentRef} as="textarea" rows={1} placeholder="Update your comment" />
                                        </Form.Group>
                                        <Button variant="danger" onClick={() => handleDelete(movie.id)}>
                                            Delete </Button>
                                        <Button variant="info" onClick={() => handleUpdate(movie.id)}>
                                            UPDATE </Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        )


                    })
                }
            </div>
        </>
    )
}