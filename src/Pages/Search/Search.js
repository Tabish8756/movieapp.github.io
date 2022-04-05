import { useEffect, useState } from "react";
import axios from 'axios';
import ContentDisplay from '../../component/ContentDisplay/ContentDisplay';
import './Search.css'

function Search(){
    const [search, setSearch]=useState("");
    const [content, setContent]=useState([]);
function searcDetails(e){
  axios.get(`https://api.themoviedb.org/3/search/multi?api_key=342677444efa824846219af24c96180b&language=en-US&query=${search}&page=1&include_adult=false`)
  .then((searcData)=>{
      console.log(searcData);
      setContent(searcData.data.results)

  })
  
  

}
    return(
        <div>
        <div className="searchBar">
    <input type="text" placeholder="Enter the movie name" value={search} onChange={(e)=>setSearch(e.target.value)}/>
    <button className="btnSearch" onClick={searcDetails}>Submit</button>
    </div>
    <div className="dispay">
    <span className='PageTitle'></span>
            <div className='Trending'>
    {content && content.map((trenData)=>{
        return <ContentDisplay key={trenData.id} 
        id={trenData.id} 
        poster={trenData.poster_path} 
        date={trenData.release_date || trenData.first_air_date} 
        title={trenData.title || trenData.name}
        media_type={trenData.media_type}
        vote_average={trenData.vote_average} />
    })}
    </div>
    </div>
    </div>
    )
}
export default Search;