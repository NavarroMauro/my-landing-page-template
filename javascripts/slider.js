let arrows = document.querySelectorAll("i");
let photos = document.querySelectorAll("section:nth-of-type(1) > img");

let count = 0;

arrows[1].addEventListener('click', function () {
  count++;
  if (count === photos.length) {
    count = 0;
  }
  for (let i = 0; i < photos.length; i++) {
    photos[i].style.transform = `translate(${count *-100}%, 0)`;
  }

})

arrows[0].addEventListener('click', function () {
  count--;

  if (count < 0) {
    count = photos.length - 1;
  }

  for (let i = 0; i < photos.length; i++) {
    photos[i].style.transform = `translate(${count *-100}%, 0)`;
  }
})
