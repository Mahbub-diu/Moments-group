document.addEventListener("DOMContentLoaded", function(){
 
  document.querySelectorAll('.dropdown-menu').forEach(function(element){
    element.addEventListener('click', function (e) {
      e.stopPropagation();
    });
  })
}); 

// sticky navbar 
document.addEventListener("DOMContentLoaded", function(){
      
  window.addEventListener('scroll', function() {
       
    if (window.scrollY > 200) {
      document.getElementById('navbar_top').classList.add('fixed-top');
  
      // add padding top to show content behind navbar
      navbar_height = document.querySelector('.navbar').offsetHeight;
      document.body.style.paddingTop = navbar_height + 'px';
    } else {
       document.getElementById('navbar_top').classList.remove('fixed-top');
       // remove padding top from body
      document.body.style.paddingTop = '0';
    } 
  });
}); 
 

        // sidebar show hide  start

   
        const listener = _ => {
          document.querySelector('.sidebar-main').classList.toggle('active');
        }
        
        document.querySelectorAll('.js-click').forEach((el) => {
          el.addEventListener('click', listener)
        });

        // sidebar show hide end 
        function test(el){
 
          el.nextSibling.nextElementSibling.classList.toggle('d-none');
 
        }
        // checkout page div show hide end 