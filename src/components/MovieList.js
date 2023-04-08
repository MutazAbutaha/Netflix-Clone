import Movie from './Movie'
export default function MovieList(props){

    return(
        <>
        {
            props.movies.map(movie =>{
                return(
                    <Movie movieData={movie}/>
                )
            })
        }
        </>
    )

}