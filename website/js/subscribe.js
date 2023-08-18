hamburger = document.querySelector(".hamburger");
hamburger.onclick = function (){
  navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("active");
}


let slidePositon = 0;
const slides = document.getElementsByClassName('carousel-item');
const totalSlides = slides.length;

  function updateSlidesPosition(){
    for(let slide of slides){
      slide.classList.remove('carousel-item--visible');
      slide.classList.add('carousel-item--hidden');

    }

    slides[slidePositon].classList.add('carousel-item--visible');
  }

  function moveToNextSlide()
  {
    if(slidePositon >= totalSlides - 1){
      slidePositon = 0;
    }else 
    {
      slidePositon++;
    }

    updateSlidesPosition();
  }

  function moveToPrevSlide()
  {
    if(slidePositon == 0)
    {
      slidePositon = totalSlides - 1;
    }else 
    {
      slidePositon--;
    }

    updateSlidesPosition();
    
  }
  



