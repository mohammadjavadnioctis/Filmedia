
import React, { useRef, useState,useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"

import styles from "./movie-slider.module.css";


// import Swiper core and required modules
import SwiperCore, {
  Pagination,
  Navigation,
  Autoplay
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination,Autoplay,Navigation]);




// const MOVIEAPIURL =
//     "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
// const IMGPATH = "https://image.tmdb.org/t/p/w1280";
// const SEARCHAPI =
//     "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";




let slides = [];

 function MovieSlider(props) {
   let {MOVIEAPIURL, IMGPATH} = props;
  
  
  const [movieArray, setMovieArray] = useState([]);
  

  useEffect(() => {
    fetch( MOVIEAPIURL)
    .then( res => res.json() )
    .then( data =>{
    //  console.log(data)
      // slides = data.results
     console.log(data)
      setMovieArray( data.results )
      
    } )
  
    
  },[])

  function voteColor (vote_average) {
    if(vote_average >= 8 ){
      return 'green'
  }
    if(vote_average >=5 ){
      return 'orange'
  }else{
    return 'red'
  }
}






  return (
    
<div className='movieSliderContainer'>
    
  <Swiper className={`mySwiper swiper-container-h ${styles.swiperContainer}`}
   slidesPerView = {4}
  //  autoplay={
  //    {"delay": 2500,"disableOnInteraction": true}
  //   } 
   navigation
   spaceBetween={50}
   pagination={
     {"clickable": true}
     }>
    {

          movieArray.map(movie => {
          const { poster_path, title, vote_average, overview, release_date, id } = movie;
          let release_year;
          if(release_date){
            release_year = release_date.substr(0, 4);
          }else{
            release_year = release_date;
          }
          
          
          return(
            
                 
                                <SwiperSlide className={styles.swiperSlide} key={Math.random()} >
                                    <Swiper className={`mySwiper2 swiper-container-v ${styles.swiperContainer}`}  direction={'vertical'} spaceBetween={50} pagination={{
                                    "clickable": true
                                      }}>
                                        <SwiperSlide className={styles.swiperSlide} >
                                          <div className={"movie"} data-id={id}>
                                              <img
                                              src={`${IMGPATH + poster_path}`}
                                              alt={`${title}`}
                                              />
                                              <div className="movie-info">
                                                  <h3>{title}<br/>{release_year}</h3>
                                                  <span className={`${voteColor(vote_average)}`}>{vote_average}</span>
                                              </div>
                                              <div className="overview">
                                                  <h3>Overview:</h3>
                                                  {overview}
                                              </div>
                                              </div>
                                            </SwiperSlide>
                                    <SwiperSlide className={styles.swiperSlide} >Vertical Slide 2</SwiperSlide>
                                    <SwiperSlide className={styles.swiperSlide} >Vertical Slide 3</SwiperSlide>
                                    <SwiperSlide className={styles.swiperSlide} >Vertical Slide 4</SwiperSlide>
                                    <SwiperSlide className={styles.swiperSlide} >Vertical Slide 5</SwiperSlide>
                                  </Swiper> 
                                </SwiperSlide>
                

    )
    
  }
  )
}


  
  </Swiper>

{/* <button onClick={increment}>this is th {number}</button> */}
</div>
)


}



export default MovieSlider;