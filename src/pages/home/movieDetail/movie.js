import React,{useEffect,useState} from "react"
import "./movie.css"
import { useParams } from "react-router-dom"

const Movie=()=>{
    const [currentMovieDetail,setDetail]=useState()
    const {id}=useParams()

    useEffect(()=>{
        getData()
        window.scrollTo(0,0)
    })

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res => res.json())
        .then(data => setDetail(data.results))
    }

    return(
        <h1>Movie Detail Page</h1>
    )

}

export default Movie






