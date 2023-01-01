import React,{useState,useEffect} from 'react';
import instance from '../baseUrl';
import "./Banner.css";


function Banner({fetchUrl}) {
    //movie state
    const [movie,setMovies]=useState([])
    async function fetchData(){
        const result=await instance.get(fetchUrl)
        console.log(result.data.results);
        setMovies(result.data.results[
          Math.floor(Math.random()*result.data.results.length-1)  
        ])
       }
       useEffect(()=>{
           fetchData()
       },[])
       const base_url="https://image.tmdb.org/t/p/original/";
       console.log(movie);
       function truncate(str,n){
        n=100;
        return str?.length>n ? str.substr(0,n-1)+"...":str;

       }
  return (
    <div className='banner' style={
        {
            backgroundImage:`url(${base_url}${movie.backdrop_path})`,
            // backgroundSize:"Cover",
            // backgroundPosition:"center" 
                     backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
           
        }

    }>
        
        <div className='banner_content'>
            <h1 className='title'>{movie.name}</h1>
            <div className='banner_button'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            <h3 className='description'>{truncate(movie.overview)}</h3>
        </div>
         <div className='fade_bottom'></div>
       
    </div>
  )
}
 
export default Banner