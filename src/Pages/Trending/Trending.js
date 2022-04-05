import { ClassNames } from '@emotion/react';
import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react';
import ContentDisplay from '../../component/ContentDisplay/ContentDisplay';
import './Trending.css'
function Trending() {
    const [content, setContent] = useState([]);
    const [page, setPage]=useState(1);
    function trendDetails() {
        axios.get("https://api.themoviedb.org/3/trending/all/day?api_key=342677444efa824846219af24c96180b")
            .then((response) => {
                setContent(response.data.results);
                //    console.log(response.data.results);

            })
    }
    useEffect(() => {
        trendDetails();
    }, [])
    return (
        <div>
            <div className='PageTitle'>Today's Trending</div>
            <div className='Trending'>
                {content && content.map((trenData) =>
               <ContentDisplay key={trenData.id} 
                    id={trenData.id} 
                    poster={trenData.poster_path} 
                    date={trenData.release_date || trenData.first_air_date} 
                    title={trenData.title || trenData.name}
                    media_type={trenData.media_type}
                    vote_average={trenData.vote_average} />
                )}
    
        </div>
         </div>
        
      

    )
}

export default Trending;