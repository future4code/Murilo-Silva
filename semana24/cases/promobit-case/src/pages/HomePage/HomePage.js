import React, { useState, useEffect } from "react";
// import { goToDetailsPage } from "../../routes/coordinator"
// import { MainContainer } from "./Home.styles"
// import { LANGUAGE } from "../../constants/language";
// import { BASE_URL } from "../../constants/urls"
// import { useHistory } from "react-router";
// import MovieCard from "../../components/MovieCard/MovieCard";
// import axios from "axios"


const Home = () => {
    // const [data, setData] = useState([])
    // const history = useHistory()

   
    // const getMovies = () => {
        
    //     axios.get(`${BASE_URL}/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&${LANGUAGE}&page=1`)                    
    //         .then((res) => {
    //             setData(res.data.results)
                
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         })
    // }

    // const onClickCard = (id) => {
    //     goToDetailsPage(history, id)
    //   }


    // useEffect(() => {
        
    //     getMovies()
    // }, [])

    // const cardMovies = data &&
    // data.map((movie) => {
    //     return (
    //       <MovieCard
    //         cardInfo={movie}
    //         key={movie.id}
    //         onClick={() => onClickCard(movie.id)}
    //       />
    //     )
    //   })

    return (
           <div>
             <h1>Home Page</h1>
           </div>
    )
}

export default Home
