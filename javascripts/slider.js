let arrows = document.querySelectorAll("i");
let photos = document.querySelectorAll("section:nth-of-type(1) > img");

let count = 0;

arrows[1].addEventListener('click', function(){
 count++;
 if(count === photos.length){
    count = 0;
 }
   for(let i = 0; i < photos.length; i++){
      photos[i].style.transform = `translate(${count *-100}%, 0)`;
   }

})

arrows[0].addEventListener('click', function(){
 count--;

 if(count < 0){
   count = photos.length -1;
 }

  for(let i = 0; i < photos.length; i++){
  photos[i].style.transform = `translate(${count *-100}%, 0)`;
   }

})



























// let images = document.querySelectorAll('div.slider > figure');
//
// let lArrow = document.querySelector('.left');
// let rArrow = document.querySelector('.right');
// let score = 0;
//
//
// rArrow.addEventListener('click', (ev) => {
//     score++;
//     if (score === images.length) {
//         score = 0;
//     }
//     for (let i = 0; i < images.length; i++) {
//         images[i].style.transform = `translate(${score * -100}%, 0)`;
//     }
// });
//
// lArrow.addEventListener('click', (ev) => {
//     score--;
//     if (score < 0) {
//         score = images.length -1;
//     }
//     for (let i = 0; i < images.length; i++) {
//         images[i].style.transform = `translate(${score * -100}%, 0)`;
//     }
// });
