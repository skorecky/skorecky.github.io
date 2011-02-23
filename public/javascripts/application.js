$(function(){
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