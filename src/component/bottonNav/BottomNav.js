import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import './BottomNav.css'
import { Movie, Whatshot, Tv, Search } from '@mui/icons-material';
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const navigate=useNavigate();


  useEffect(()=>{
    if(value===0) navigate('/')
    else if(value===1) navigate('/movies')
    else if(value===2) navigate('/tvseries')
    else if(value===3) navigate('/search')
},[value, navigate])

  return (
    <Box className='navBar'>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction style={{backgroundColor:"rgb(239, 47, 14)", color:"white"}} label="Trending" icon={<Whatshot />} />
        <BottomNavigationAction style={{backgroundColor:"rgb(239, 47, 14)", color:"white"}} label="Movies" icon={<Movie />} />
        <BottomNavigationAction style={{backgroundColor:"rgb(239, 47, 14)", color:"white"}} label="TV Series" icon={<Tv />} />
        <BottomNavigationAction style={{backgroundColor:"rgb(239, 47, 14)", color:"white"}} label="Search" icon={<Search />} />
      </BottomNavigation>
    </Box>
  );
}