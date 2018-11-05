/*  Let's Build: Dynamic Tabs  */
  
  const elements = document.querySelectorAll('#nav-tab li');
  const paragraphs = document.querySelectorAll('.tab-pane');
  
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', (ev) => {
      for (let j = 0; j < paragraphs.length; j++) {
        if (paragraphs[j].classList.contains('active')) {
          paragraphs[j].classList.remove('active');
          break;
        }
      }
      paragraphs[i].classList.add('active');
    })
  }