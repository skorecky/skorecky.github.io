(function(){
  "use strict";
  
  window.onload = function(){
    
    window.scrollTo(0, 1);
    
    var emailButton = document.querySelector("a[href='#email']");
    emailButton.onclick = function(event){
      event.preventDefault();
      window.location = "mailto:"+emailButton.dataset.user+"@gmail.com";
    }
    
  };
  
})();