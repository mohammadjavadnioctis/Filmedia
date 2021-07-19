 // const SEARCHAPI = 
        // "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query="
        //  const IMGPATH = "https://image.tmdb.org/t/p/w1280";
        let movieList = [];
        let queryString = '';
        const resultsList = document.getElementById('results')
        const USearchParams = new URLSearchParams(window.location.search)
       
       const RName = USearchParams.get('name')
       console.log(RName)
       getRequestedQuery(SEARCHAPI+RName)
       



       async function getRequestedQuery (url){
            const resp = await fetch(url);
    
            const respData = await resp.json();
            
            console.log(respData);

            showMovies(respData.results);

       }


    function showMovies(movies) {
    // clear main
    main.innerHTML = "";

    movies.forEach((movie) => {
        const { poster_path, title, vote_average, overview,id } = movie;

        const movieEl = document.createElement("div");
        movieEl.classList.add("movie");
        movieEl.setAttribute('data-id', id)

        movieEl.onclick = ()=>{
            // webLink = `https://www.google.com/search?q=${selectData}`;
            // webLink =  receiverPage + 'movieid=' + movieID;
            const receiverPage =  '../Movie Information Page/receiver.html?'
           
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
            <div class="overview">
                <h3>Overview:</h3>
                ${overview}
            </div>
        `;

        main.appendChild(movieEl);
    });
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






form.addEventListener("submit", (e) => {
    e.preventDefault();

    const searchTerm = search.value;

    if (searchTerm) {
        getRequestedQuery(SEARCHAPI + searchTerm);

        search.value = "";
    }
});







  