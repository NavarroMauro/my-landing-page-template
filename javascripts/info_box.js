let imgDiv2 = document.querySelectorAll('section:nth-of-type(2) > div > div > img');
let imgMenuClick = document.querySelectorAll('section:nth-of-type(2) > div > div > ul > p');
console.log(imgDiv2);
console.log(imgMenuClick);

for (let i = 0; i < imgDiv2.length; i++){
  imgDiv2[i].addEventListener('click', function(ev) {
    // ev.stopPropagation();
    for (let j = 0; j < p.length; j++){
      if(imgMenuClick[j].classList.contains("imgMenu")){
        imgMenuClick[j].classList.remove("imgMenu");
      }

    }
    imgMenuClick[i].classList.add("imgMenu");
  })

}
