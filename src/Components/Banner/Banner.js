
import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../Axios'
import { API_KEY, imageUrl } from '../../Constants/Constants'

function Banner() {

    const [movie, setMovie] = useState()

    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {

            console.log(response.data.results);
            let index = Math.trunc(Math.random() * response.data.results.length) + 1;
            setMovie(response.data.results[index])

        })

    }, [])

    return (
        
        <div style={{ backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ''})` }}

            className='banner'>

            <div className='content'>
               

                <h1 className='title'>{movie ? movie.title : ''}</h1>
                <h1 className='title'>{movie ? movie.name : ''}</h1>

                <div className='banner-button'>
                    <button className='button'>Play</button>
                    <button className='button'>My list</button>
                </div>

                <h1 className='description'>{movie ? movie.overview : ''}
                </h1>
            </div>

            <div className="fade"></div>
        </div>
    )
}


export default Banner 