const USearchParams = new URLSearchParams(window.location.search)
const body = document.querySelector('body')
const contentContainer = document.querySelector('.container')
const MovieId = USearchParams.get('movieid')
const iframe = document.querySelector('iframe')
const apiKey = 'api_key=04c35731a5ee918f014970082a0088b1'
const similarSection = document.querySelector('#similar-section')
const queryString = `https://api.themoviedb.org/3/movie/${MovieId}?api_key=d276eb8be224c2d53d79d8d75e53f44c&append_to_response=videos,credits,similar`
const TQueryString = `https://api.themoviedb.org/3/movie/${MovieId}?api_key=d276eb8be224c2d53d79d8d75e53f44c&language=tr`
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const LowResIMGPATH = "https://image.tmdb.org/t/p/w200";

const heroSection = document.querySelector('.heroimg')

// const body = document.querySelector('body')






getRequestedQuery(queryString)
TgetRequestedQuery(TQueryString)






async function TgetRequestedQuery (url){
    const resp = await fetch(url);

    const respData = await resp.json();
     const {poster_path} = respData
   
   
    titlePlacer(respData.title)
    // similarMoviesPlacer(respData.similar.results)
    genrePlacer(respData.genres)
    overviewPlacer(respData.overview)
    return (respData.results)
   
   


}




async function getRequestedQuery (url){
    const resp = await fetch(url);

    const respData = await resp.json();
     const {poster_path} = respData
    console.log(respData)
    backgroundMaker(poster_path)
    trailerPlacer(respData)
    // titlePlacer(respData.original_title)
    similarMoviesPlacer(respData.similar.results)
    releaseDatePlacer(respData.release_date)
    setTimeout(
        () => {

        productionCompaniesIcons(respData)
    }
    ,1000)
    // productionCompaniesIcons(respData.production_companies)
    return (respData.results)
   
   


}








function backgroundMaker (poster_path) {
    
    const background = IMGPATH + poster_path;
   
    contentContainer.style.backgroundImage = `url(${background})`;
} 

function trailerPlacer(data){
    const videos = data.videos.results
    const videoKey = videos[0].key
    const youTubeLink = `https://www.youtube.com/embed/${videoKey}?&autoplay=1`
    iframe.src = youTubeLink;
  
}

function releaseDatePlacer(date) {
   const RDate =  document.querySelector('#subtitle')

   RDate.innerText = date.substr(0,4)
}

function getClassByRate(vote) {
    if (vote >= 8) {
        return "green";
    } else if (vote >= 5) {
        return "orange";
    } else {
        return "red";
    }
}

function similarMoviesPlacer(movieData){

    movieData.forEach((movie) => {
        const { poster_path, title, vote_average, overview,id } = movie;

        const movieEl = document.createElement("div");
        movieEl.classList.add("movie");
        movieEl.setAttribute('data-id', id)

        movieEl.onclick = ()=>{
            // webLink = `https://www.google.com/search?q=${selectData}`;
            // webLink =  receiverPage + 'movieid=' + movieID;
            const receiverPage =  './receiver.html?'
           
            window.location.href = receiverPage+'movieid='+id
            // linkTag.setAttribute("href", webLink);
            // linkTag.click();
        }
        movieEl.innerHTML = `
            <img
                src="${IMGPATH + poster_path}"
                alt="${title}"
            />
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(
                    vote_average
                )}">${vote_average}</span>
            </div>
           
        `;

        similarSection.appendChild(movieEl);
    });
}

function productionCompaniesIcons(companiesList){
    console.log('this is companies list', companiesList.production_companies)
    const productinIcons = document.createElement('div')
    productinIcons.classList.add('p-icons')

    companiesList.production_companies.forEach(company => {
        if(company.logo_path){
             iconpath = IMGPATH+company.logo_path
            console.log('this is logo path', iconpath)
            const Picon = document.createElement('img')
            Picon.classList.add('picon')
            Picon.setAttribute('src', LowResIMGPATH+company.logo_path)
    
            productinIcons.appendChild(Picon)
        }
        
    })


    const overviewChild2 = document.querySelector('.overview-child2')
    overviewChild2.appendChild(productinIcons)
}



function genrePlacer(genreArray){
   const genresConEl = document.querySelector('.overview-child2')
    genreList=[]

   genreArray.forEach(genre => {
       genreList.push(genre.name)
    const genreSpan = document.createElement('span')
    genreSpan.innerText = genre.name
    
      

     genresConEl.appendChild(genreSpan)

   })
   
}


function overviewPlacer(overViewText){
    const movieSummary = document.querySelector('.movie-summary-p')

    movieSummary.innerText = overViewText
}

function titlePlacer(titleIN){
    const title = document.querySelector('#title')

    title.innerText = titleIN

}

