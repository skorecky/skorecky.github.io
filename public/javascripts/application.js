(function(){
  "use strict";
  
  var closeContact = function(){
    $("#contact").animate({top: -250});
    $(".screen").fadeOut(200);
  };
  
  $(function(){
    window.scrollTo(0, 1);
    
    $("a[href='#email']").click(function(event){
      event.preventDefault();
      if($(this).is(":visible")){
        $("#contact").animate({top: 50});
        $(".screen").fadeIn(200).height(document.height);
      } else {
        closeContact();
      }
    });
    
    $("form a").click(function(){
      closeContact();
    });
    
    $(document).keyup(function(event){
      if(event.which === 27 && $(".screen").is(":visible")){
        closeContact();   
      }
    });
    
    $("#social").animate({margin: "-20px auto 0",'z-index': 3});
  });
  
})();