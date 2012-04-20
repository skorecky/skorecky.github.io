$(function(){
  
  function nospam(user,domain) {
  	var locationstring = "mailto:" + user + "@" + domain;
  	window.location = locationstring;
  }
  
  $.getJSON("https://api.github.com/users/skorecky/repos?callback=?", function(data){
    var repos = data.data;
    $(repos).each(function(e,repo){
      $("#github").append("<li><a href="+repo.html_url+"><span>"+repo.name+"</span></a></li>");
    });
  });
  
  $.jribbble.getShotsByPlayerId('skorecky',
  function (playerShots)
  {
    var html = [];
    $.each(playerShots.shots, function (i, shot)
    {
      html.push('<li><a href="' + shot.url + '">');
      html.push('<img src="' + shot.image_url + '" ');
      html.push('alt="' + shot.title + '"></a>');
      html.push('<h4>' + shot.title + '</h4></li>');
    });

    $('#recent').html(html.join(''));
  },
  {page: 1, per_page: 3}
  );
  
});

for (var i=0; i < Things.length; i++) {
  Things[i]
};