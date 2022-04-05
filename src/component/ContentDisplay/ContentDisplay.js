import './ContentDisplay.css'
import { Badge } from "@material-ui/core";
import {  unavailable } from "../../Config/config";
const  ContentDisplay = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
  return (
    // <ContentModal media_type={media_type} id={id}>

   
 
    <div className='ternDataDisplay'>
    
      
      <div className='displayCard'>
      <Badge className='badge'
    badgeContent={vote_average}
    color={vote_average > 6 ? "primary" : "secondary"}
  />
      <img className='poster' src={poster ?`https://image.tmdb.org/t/p/w300${poster}`:unavailable}/>
      <div className='displayContent'>
        <p className='title'>{title}</p>
        <p className='date'>{date? date:<h5>Not Avail</h5>}</p>
        </div>
        <span className='subTittle'>
        {media_type === "tv" ? "TV Series" : "Movie"}
        </span>

      </div>
      </div>
  
  );
};


export default ContentDisplay;