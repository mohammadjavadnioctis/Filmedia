//Header Section Funcionality


var MainMenu = (function() {
  var MainMenu = function(config) {
      config = config || {};
      this.toggleBtn = $(config.toggleBtn);
      this.menu = $(config.menu);
      this.close = $(config.close);

      this.init();
      config = null;
  };
  // public interface
  MainMenu.prototype = {
      constructor: MainMenu,
      init: function() {
          this.eventManager();
      },
      eventManager: function() {
          this.toggleBtn.on('click.openMenu', onButtonClickHandler.bind(this));
          this.close.on('click.closeMenu', onCloseClickHandler.bind(this));
      }
  };
  // private interface
  function onButtonClickHandler(menu, evt) {
      if (!this.menu.hasClass('open')) {
          this.menu.addClass('open');
      };

  }

  function onCloseClickHandler(evt) {
      this.menu.removeClass('open')
  }

  function onDocumentClickHandler(evt) {
      var $target = $(evt.target);

      if (!$target.closest(this.menuForm).length && !$target.closest(this.menuContent).length && this.menu.hasClass('open')) {
          this.menu.removeClass('open')
      }
  }

  return MainMenu;
})();


$(document).ready(function() {
  var mainMenu = new MainMenu({
      menu: '.main-menu',
      toggleBtn: '.main-menu-btn',
      close: '.main-menu-close'
  });
});

































//slider section functionality

// Params
let mainSliderSelector = '.main-slider',
    navSliderSelector = '.nav-slider',
    interleaveOffset = 0.5;

// Main Slider
let mainSliderOptions = {
      loop: true,
      speed:1000,
      autoplay:{
        delay:3000
      },
      loopAdditionalSlides: 10,
      grabCursor: true,
      watchSlidesProgress: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      on: {
        init: function(){
          this.autoplay.stop();
        },
        imagesReady: function(){
          this.el.classList.remove('loading');
          this.autoplay.start();
        },
        slideChangeTransitionEnd: function(){
          let swiper = this,
              captions = swiper.el.querySelectorAll('.caption');
          for (let i = 0; i < captions.length; ++i) {
            captions[i].classList.remove('show');
          }
          swiper.slides[swiper.activeIndex].querySelector('.caption').classList.add('show');
        },
        progress: function(){
          let swiper = this;
          for (let i = 0; i < swiper.slides.length; i++) {
            let slideProgress = swiper.slides[i].progress,
                innerOffset = swiper.width * interleaveOffset,
                innerTranslate = slideProgress * innerOffset;
           
            swiper.slides[i].querySelector(".slide-bgimg").style.transform =
              "translateX(" + innerTranslate + "px)";
          }
        },
        touchStart: function() {
          let swiper = this;
          for (let i = 0; i < swiper.slides.length; i++) {
            swiper.slides[i].style.transition = "";
          }
        },
        setTransition: function(speed) {
          let swiper = this;
          for (let i = 0; i < swiper.slides.length; i++) {
            swiper.slides[i].style.transition = speed + "ms";
            swiper.slides[i].querySelector(".slide-bgimg").style.transition =
              speed + "ms";
          }
        }
      }
    };
let mainSlider = new Swiper(mainSliderSelector, mainSliderOptions);

// Navigation Slider
let navSliderOptions = {
      loop: true,
      loopAdditionalSlides: 10,
      speed:1000,
      spaceBetween: 5,
      slidesPerView: 5,
      centeredSlides : true,
      touchRatio: 0.2,
      slideToClickedSlide: true,
      direction: 'vertical',
      on: {
        imagesReady: function(){
          this.el.classList.remove('loading');
        },
        click: function(){
          mainSlider.autoplay.stop();
        }
      }
    };
let navSlider = new Swiper(navSliderSelector, navSliderOptions);

// Matching sliders
mainSlider.controller.control = navSlider;
navSlider.controller.control = mainSlider;


// window.addEventListener('load', ()=> {
//   const paginations = document.querySelectorAll('.swiper-pagination')
//   paginations.forEach((pagination) => {
//     pagination.style.backgroundColor = 'rgba(137, 44, 220, 0.4)';
//     pagination.style.borderRadius = '30px'

//   })
// })














//image wall functionality start

// const NUM_ROWS = 3;
// const NUM_IMAGES = 3;
// const IMAGES = [
// './assets/Images/Guardians-Galaxy-3.jpg',
// './assets/Images/harley quinn fig.gif',
// './assets/Images/birds-of-prey.jpg', 
// './assets/Images/Terminal_2018-min.jpg',
// './assets/Images/joker glitching.gif',
// './assets/Images/kartoon harley quinn.png',
// './assets/Images/suicide squad 2016.jpg',
// './assets/Images/margarot robbie.jpg',
// './assets/Images/suicide squad 2021.jpg',
// './assets/Images/terminal second wallpaper.jpg',

// './assets/Images/Guardians-Galaxy-3.jpg',
// './assets/Images/Mary Queen of Scots.jpg',
// './assets/Images/birds-of-prey.jpg', 
// './assets/Images/Terminal_2018-min.jpg',
// './assets/Images/suiceide squad skulls gif.gif',
// './assets/Images/kartoon harley quinn.png',
// './assets/Images/suicide squad 2016.jpg',
// './assets/Images/margarot robbie.jpg',
// './assets/Images/suicide squad 2021.jpg',
// './assets/Images/terminal second wallpaper.jpg',

// './assets/Images/Guardians-Galaxy-3.jpg',
// './assets/Images/Mary Queen of Scots.jpg',
// './assets/Images/birds-of-prey.jpg', 
// './assets/Images/Terminal_2018-min.jpg',
// './assets/Images/joker glitching.gif',
// './assets/Images/kartoon harley quinn.png',
// './assets/Images/suicide squad 2016.jpg',
// './assets/Images/margarot robbie.jpg',
// './assets/Images/suicide squad 2021.jpg',
// './assets/Images/terminal second wallpaper.jpg',

// './assets/Images/Guardians-Galaxy-3.jpg',
// './assets/Images/Mary Queen of Scots.jpg',
// './assets/Images/birds-of-prey.jpg', 
// './assets/Images/Terminal_2018-min.jpg',
// './assets/Images/joker glitching.gif',
// './assets/Images/kartoon harley quinn.png',
// './assets/Images/suicide squad 2016.jpg',
// './assets/Images/margarot robbie.jpg',
// './assets/Images/suicide squad 2021.jpg',
// './assets/Images/terminal second wallpaper.jpg',

// './assets/Images/Guardians-Galaxy-3.jpg',
// './assets/Images/Mary Queen of Scots.jpg',
// './assets/Images/birds-of-prey.jpg', 
// './assets/Images/Terminal_2018-min.jpg',
// './assets/Images/joker glitching.gif',
// './assets/Images/kartoon harley quinn.png',
// './assets/Images/suicide squad 2016.jpg',
// './assets/Images/margarot robbie.jpg',
// './assets/Images/suicide squad 2021.jpg',
// './assets/Images/terminal second wallpaper.jpg',

// './assets/Images/Guardians-Galaxy-3.jpg',
// './assets/Images/Mary Queen of Scots.jpg',
// './assets/Images/birds-of-prey.jpg', 
// './assets/Images/Terminal_2018-min.jpg',
// './assets/Images/joker glitching.gif',
// './assets/Images/kartoon harley quinn.png',
// './assets/Images/suicide squad 2016.jpg',
// './assets/Images/margarot robbie.jpg',
// './assets/Images/suicide squad 2021.jpg',
// './assets/Images/terminal second wallpaper.jpg',



// ];






// // for (let i = 0; i < NUM_IMAGES; i++) {
// //   let width = (Math.floor(Math.random() * 3) + 2) * 100;
// //   let height = (Math.floor(Math.random() * 3) + 2) * 100;
// //   IMAGES.push(`http://unsplash.it/${width}/${height}`);
// // }

// let rows = [];
// for (let i = 0; i < NUM_ROWS; i++) {
//   let row = document.createElement('div');
//   row.classList.add('row');
//   rows.push(row);
// }

// let wall = document.getElementById('wall');
// for (let i = 0; i < IMAGES.length; i++) {
//   let index = i % rows.length;
//   let row = rows[index];
//   // console.log('this is a row', row)
//   let onBottomRow = index === rows.length - 1;
//   if (onBottomRow) {
//     let frame = document.createElement('div');
//     frame.classList.add('frame');
//     frame.innerHTML = `
//       <img src="${IMAGES[i]}">
//       <div class="reflection">
//         <img src="${IMAGES[i]}">
//       </div>
//     `;
//     row.appendChild(frame);
//   } else {
//     let img = document.createElement('img');
//     img.src = IMAGES[i];
//     row.appendChild(img);
//   }
// }

// rows.forEach(row => {
//   wall.appendChild(row);
// });

// let debounce = (func, wait, immediate) => {
//   var timeout;
//   return function () {
//     var context = this,args = arguments;
//     var later = function () {
//       timeout = null;
//       if (!immediate) func.apply(context, args);
//     };
//     var callNow = immediate && !timeout;
//     clearTimeout(timeout);
//     timeout = setTimeout(later, wait);
//     if (callNow) func.apply(context, args);
//   };
// };

// let scrollPosition = 0;
// let scrollWall = debounce(event => {
//   // scrollPosition -= event.deltaY;
//   // wall.style.transform = `rotateY(45deg) translateX(${scrollPosition}px)`;
// }, 10);


// const wallEl = document.querySelector('.wall-container')

// const options = []
// const observer = new IntersectionObserver(function (entries, observer) {
//   entries.forEach(entry => {
//     if (entry.isIntersecting){
//       window.addEventListener('wheel',(event) => {scrollWall(event)});
//     }
//   })
// }
// )

// observer.observe(wallEl)




// //image wall functionality end
