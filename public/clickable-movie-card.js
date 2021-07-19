








window.addEventListener('load', () => {
    
    setTimeout(()=>{

        console.log('BBBBBBBBBaaaaaaaaaayby')

  
    
    const movieCards = document.querySelectorAll('.movie')
    const receiverPage = './htmlpages/Movie Information Page/receiver.html?'
    movieCards.forEach((movieCard)=>{

        movieCard.addEventListener('click',() => {
            let movieID = movieCard.dataset.id
            window.location.href = receiverPage + 'movieid=' + movieID


        })
    })
    // console.log(clickables)

    



    },1000)

    




  }, false);