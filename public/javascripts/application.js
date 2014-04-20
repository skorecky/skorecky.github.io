(function(){
  "use strict";
  
  var closeContact = function(){
    contact = $("#contact");
    contact.addClass("animated hinge");
    setTimeout(function(){
      contact.animate({top: "100%"});
    },500);
    setTimeout(function(){
      $(".overlay").fadeOut(200);
      contact.removeClass("animated hinge");
    },1000);
  };
  
  $(function(){
    window.scrollTo(0, 1);
    
    $("a[href='#email']").click(function(event){
      event.preventDefault();
      if($(this).is(":visible")){
        $("#contact").animate({top: 50});
        $(".overlay").fadeIn(200).height(document.height);
      } else {
        closeContact();
      }
    });
    
    $("#contact .cancel").click(function(){
      closeContact();
    });
    
    $(document).keyup(function(event){
      if(event.which === 27 && $(".overlay").is(":visible")){
        closeContact();   
      }
    });
    
  });
})();