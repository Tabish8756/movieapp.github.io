import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import ContentDisplay from '../../component/ContentDisplay/ContentDisplay';
function TvSeries() {
    const [content, setContent] = useState([]);
    function seriesDetails() {
        axios.get("https://api.themoviedb.org/3/discover/tv?api_key=342677444efa824846219af24c96180b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate")
            .then((response) => {
                console.log(response);
                setContent(response.data.results);
            })

    }

    useEffect(() => {
        seriesDetails();
    },[])
    console.log(content)
    return (
        <div>
            <div className='PageTitle'>Tv Series</div>
            <div className='Trending'>
            {content && content.map((trenData)=>{
               return <ContentDisplay key={trenData.id} 
               id={trenData.id} 
               poster={trenData.poster_path} 
               date={trenData.release_date || trenData.first_air_date} 
               title={trenData.orignal_name || trenData.name}
               media_type="tv"
               vote_average={trenData.vote_average} />
            })}
        </div>
        </div>
    )
}
export default TvSeries;