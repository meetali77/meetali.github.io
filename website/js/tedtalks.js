hamburger = document.querySelector(".hamburger");
hamburger.onclick = function (){
  navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("active");
}



let listVideo = document.querySelectorAll('.video-list .vid');
let mainVideo = document.querySelector('.video img');
let title = document.querySelector('.video .main-title');
// let views = document.querySelector('.video h6');

      listVideo.forEach(image =>{
        image.onclick = () =>{
          listVideo.forEach(vid => vid.classList.remove('active'));
          image.classList.add('active');
          if(image.classList.contains('active')){
            let src = image.children[0].getAttribute('src');

            mainVideo.src = src;
            let text = image.children[1].innerHTML;
            title.innerHTML = text;




          };
        };
      });