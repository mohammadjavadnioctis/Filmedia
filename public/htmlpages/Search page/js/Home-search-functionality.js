// getting all required elements
const SEARCHAPI = 
        "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query="

const IMGPATH = "https://image.tmdb.org/t/p/w300";        
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");

let webLink;

// if user press any key and release
inputBox.onkeyup = async function (e) {
    let userData = e.target.value; //user enetered data
    let emptyArray = [];
    if(userData){
    let suggestions = await getRequestedQuery(SEARCHAPI+userData);
    console.log('these are Suggestions ',suggestions)

        icon.onclick = ()=>{
           
            const receiverPage =  './htmlpages/Search page/apiAnswer.html?'
            const movieNameFromSearchBox = inputBox.value
            window.location.href = receiverPage+'name='+movieNameFromSearchBox
            
        }
        // emptyArray = suggestions.filter((data)=>{
        //     //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
        //     return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        // });
        i=0;
        suggestions = suggestions.map((data)=>{
            const { id } = data; 
            i++;
            if (i <= 8){
            // passing return data inside li tag
            return data = `
            <div class=s-box data-id=${id}>
            <img
            src=${IMGPATH+data.poster_path}
            class='s-img'
            />
            <h3>${data.original_title}</h3>
            </div>
            <div class="spacer"></div>
            `;
            }   
            if(i > 8 ){
               
                return
            }
            
            
        });
        searchWrapper.classList.add("active"); //show autocomplete box
        showSuggestions(suggestions);
        let allList = suggBox.querySelectorAll("div");
        for (let i = 0; i < allList.length; i++) {
            //adding onclick attribute in all li tag
            allList[i].setAttribute("onclick", "select(this)");
        }
    }else{
        searchWrapper.classList.remove("active"); //hide autocomplete box
    }
}

function select(element){
    let selectData = element.innerText;
    inputBox.value = selectData;
    let movieID = element.dataset.id
    const receiverPage =  './htmlpages/Movie Information Page/receiver.html?'
    window.location.href = receiverPage + 'movieid=' + movieID
    icon.onclick = ()=>{
        // webLink = `https://www.google.com/search?q=${selectData}`;
        // webLink =  receiverPage + 'movieid=' + movieID;
        const receiverPage =  './htmlpages/Movie Information Page/receiver.html?'
       
        window.location.href = `${receiverPage} + 'movieid=' + ${movieID}`
        // linkTag.setAttribute("href", webLink);
        // linkTag.click();
    }
    searchWrapper.classList.remove("active");
}

function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = `<li>${userValue}</li>`;
    }else{
      listData = list.join('');
    }
    suggBox.innerHTML = listData;
}





async function getRequestedQuery (url){
    const resp = await fetch(url);

    const respData = await resp.json();
    
    console.log(respData);
    return (respData.results)

    // showMovies(respData.results);

}










