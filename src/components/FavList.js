import {useEffect, useState} from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


export default function FavList(){

    const [favMovies,setFavMovies ] = useState([]);


    async function getFavMovies(){
        let url =`${process.env.REACT_APP_SERVER_URL}/favorite`;

        let response = await fetch(url,{
            method: 'GET',
        })
         console.log(1111, response)

        let recivedData = await response.json();
        setFavMovies(recivedData)
        console.log(1111, recivedData)

       
    }

    async function handleDelete(id){
        let url =`${process.env.REACT_APP_SERVER_URL}/deleteFavList/${id}`;

        let response = await fetch(url,{

            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
        })
  

        if(response.status === 204){
            getFavMovies();

        }
    }

    useEffect(()=>{
        getFavMovies();

    },[])



    return(
        <>
        <h2>Welcome to Favorite Movie List Page</h2>

        {
            favMovies && favMovies.map(movie=>{
                return(
                    <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                    <Card.Body>
                      <Card.Title>{movie.title}</Card.Title>
                      <Card.Text>{movie.overview.substring(0,200)}</Card.Text>
                      <Button variant="primary" onClick={()=>handleDelete(movie.id)}> Delete </Button>
                    </Card.Body>
                  </Card>
                )


            })
        }
        </>
    )
}