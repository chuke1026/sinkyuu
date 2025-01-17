(function(){
    "use strict";
  
    const el_btn = document.querySelector('.menu-btn');
    const el_body = document.querySelector('body');
    const el_nav = document.querySelector('nav')
  
    el_btn.addEventListener('click',function() {
      el_body.classList.toggle('is-active');
      el_nav.classList.toggle('is-active');
    })
  })()