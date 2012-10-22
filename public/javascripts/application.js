(function(){
  "use strict";
  
  $(function(){
    window.scrollTo(0, 1);
    
    $("a[href='#email']").click(function(event){
      event.preventDefault();
      console.log($(this).is(":visible"));
      if($(this).is(":visible")){
        $("#contact").animate({top: 50});
        $(".screen").fadeIn(200).height(document.height);
      } else {
        $("#contact").animate({top: -250});
        $(".screen").fadeOut(200);
      }
    });
    
    $("form a").click(function(){
      $("#contact").animate({top: -250});
      $(".screen").fadeOut(200);
    });
    
    $("#social").animate({margin: "-20px auto 0",'z-index': 3});
  });
  
})();