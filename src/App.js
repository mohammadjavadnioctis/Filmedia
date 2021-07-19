
import './App.css';

import 'swiper/swiper-bundle.css'
import MovieSlider from './components/movie-slider/movie-slider-com.js'
import Title from './components/Title/title.js'
import Spacer from './components/spacer/spacer.js'


function RApp() {
  return (
    <div className='RApp'>
      <Title text= 'EN POPÜLER'/>
      <Spacer />
    <MovieSlider passedProp={'this is my prop'} 
                  MOVIEAPIURL ={
                  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"}
                  
                  IMGPATH = {"https://image.tmdb.org/t/p/w400"}
  />
    
    <Title text= 'SON ÇIKANLAR'/>
      <Spacer />

    <MovieSlider passedProp={'this is my prop'} 
                  MOVIEAPIURL ={
                        "https://api.themoviedb.org/3/discover/movie?api_key=d276eb8be224c2d53d79d8d75e53f44c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&primary_release_date.gte=2020-01-01&page=2"
                  }                  
                  IMGPATH = {"https://image.tmdb.org/t/p/w400"}
  />
    
    
    <Title text= 'TREND'/>
      <Spacer />

    <MovieSlider passedProp={'this is my prop'} 
                  MOVIEAPIURL ={
                  "https://api.themoviedb.org/3/trending/movie/day?api_key=d276eb8be224c2d53d79d8d75e53f44c"}
                  
                  IMGPATH = {"https://image.tmdb.org/t/p/w400"}
  />
    
{/*     
    <Title text= '2010-2020 EN IYILERI'/>
      <Spacer />

    <MovieSlider passedProp={'this is my prop'} 
                  MOVIEAPIURL ={
                    "https://api.themoviedb.org/3/discover/movie?api_key=d276eb8be224c2d53d79d8d75e53f44c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&primary_release_date.gte=2010-01-01&primary_release_date.lte=2020-01-01"}
                  
                  IMGPATH = {"https://image.tmdb.org/t/p/w400"}
  />
    
    
    <Title text= 'TARRİHİN EN İYİLERİ'/>
      <Spacer />

    <MovieSlider passedProp={'this is my prop'} 
                  MOVIEAPIURL ={
                    "https://api.themoviedb.org/3/discover/movie?api_key=d276eb8be224c2d53d79d8d75e53f44c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&primary_release_date.gte=1970-01-01&primary_release_date.lte=2010-01-01"}
                  
                  IMGPATH = {"https://image.tmdb.org/t/p/w400"}
  />
    <Spacer /> */}
    </div>
      
   
  );
}

export default RApp;
