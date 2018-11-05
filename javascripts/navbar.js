let showDropDown = document.querySelectorAll("ul > li");
let ulDropDown = document.querySelectorAll(".dropDown")

for(let i = 0; i < showDropDown.length; i++){
    showDropDown[i].addEventListener('mouseover', function (ev){
      ev.stopPropagation();
      for(let n = 0; n < ulDropDown.length; n++){
          if(ulDropDown[n].classList.contains("active")){
            ulDropDown[n].classList.remove("active");
            break;
          }
      }
    ulDropDown[i].classList.add("active");
    })
}

for(let n = 0; n < showDropDown.length; n++){
    document.body.addEventListener('mouseover', function (ev) {
      if (ulDropDown[n].classList.contains("active")) {
        ulDropDown[n].classList.remove("active");
      }
    })
}
