import './App.css';
import SimpleBottomNavigation from './component/bottonNav/BottomNav';
import Header from './component/header/Header';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Trending from './Pages/Trending/Trending'
import Movies from './Pages/Movies/Movies';
import Search from './Pages/Search/Search';
import TvSeries from './Pages/TVSeries/TvSeries';


function App() {
  return (
  
   <BrowserRouter>
    <Header />
    <div className="app">
      <Routes>
        <Route path='/' element={<Trending/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/tvseries' element={<TvSeries/>}/>
        <Route path='/search' element={<Search/>}/>
      </Routes>
     </div>
     <div>
     <SimpleBottomNavigation />
     </div>
      </BrowserRouter>
  
      
   
    

  );
}

export default App;
