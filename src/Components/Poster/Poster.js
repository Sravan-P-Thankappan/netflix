
import React from 'react'
import './Poster.css'
import { useEffect, useState } from 'react'
import axios from '../../Axios'
import {  imageUrl,API_KEY } from '../../Constants/Constants'

import Youtube from 'react-youtube'



function Poster(props) {

    let [movies, setMovies] = useState([])

    let [trailer,setTrailer] = useState('')

    useEffect(() => {
        axios.get(props.url).then((response) => {

            // console.log(response.data);
            setMovies(response.data.results)

        }).catch((err) => {
            console.log(err);
        })
    })
   
    let movieTrailer = (id)=>{
           
       axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
           
            console.log(response.data.results[0].key);

            setTrailer(response.data.results[0].key)
             

       }).catch((err)=>{

        console.log(err);
       })  
    }

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          autoplay: 1,
        },
      };

    return (
        <div className='row'>
            <h2>{props.title}</h2>

            <div className='posters'>

                {
                    movies.map((movie) => 
                        <img onClick={()=>movieTrailer(movie.id)} className={props.isSmall?'smallposter':'poster'} src={`${imageUrl+movie.backdrop_path}`} alt="poster" />
                    )
                }

            </div>
        {/* { trailer!=''? <Youtube videoId={trailer} opts={opts} /> :<></> } */}
        
        {trailer&&<Youtube videoId={trailer} opts={opts} /> }
          
        </div>
    )
}

export default Poster