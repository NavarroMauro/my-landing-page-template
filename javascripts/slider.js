let arrows = document.querySelectorAll("i");
let pictures = document.querySelectorAll("section:nth-of-type(1) > img");

let count = 0;
let autoslide = () => {
  count++;
  if (count === pictures.length - 1) {
    count = 0;
  }
  for (let i = 0; i < pictures.length; i++) {
    pictures[i].style.transform = `translate(${count * -100}%, 0)`;
  }
}

setInterval(autoslide, 5000); // Change image every 2 seconds


arrows[1].addEventListener('click', function () {
  count++;
  if (count === pictures.length) {
    count = 0;
  }
  for (let i = 0; i < pictures.length; i++) {
    pictures[i].style.transform = `translate(${count *-100}%, 0)`;
  }
})

arrows[0].addEventListener('click', function () {
  count--;

  if (count < 0) {
    count = pictures.length - 1;
  }

  for (let i = 0; i < pictures.length; i++) {
    pictures[i].style.transform = `translate(${count *-100}%, 0)`;
  }
})
