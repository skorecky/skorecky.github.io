var pad = function(n) {
  return (n < 10) ? ("0" + n) : n;
}

var countdown = function(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var rhours = 11 - hours;
  var rminutes = 60 - minutes;
  var rseconds = 60 - seconds;
  var txt = pad(rhours)+":"+pad(rminutes)+":"+pad(rseconds);
  if(hours >= 12) {
    document.querySelector(".countdown").innerText = "00:00:00";
  } else {
    document.querySelector(".countdown").innerText = txt;
  }
}

var progressBar = function(date) {
  var hours = date.getHours();
  var progress = timeToProgress(hours);
  if(hours >= 12) {
    document.querySelector(".progress-bar").style.width = "100%"
    document.querySelector(".meter").classList.add("nostripes")
  } else {
    document.querySelector(".progress-bar").style.width = progress
    document.querySelector(".meter").classList.remove("nostripes")
  }
}

var getMessage = function(date){
  var hour = date.getHours();
  var msg = ""
  if(hour < 12){ msg = "NOT LUNCH TIME" };
  if(hour == 12){ msg = "LUNCH TIME" };
  if(hour > 12){ msg = "BACK TO WORK" };
  if(hour >= 17){ msg = "GO HOME" };
  return msg;
}

var timeToProgress = function(hour){
  switch (hour) {
    case 1:
      return "10%"
      break;
    case 2:
      return "10%"
      break;
    case 3:
      return "10%"
      break;
    case 4:
      return "10%"
      break;
    case 5:
      return "10%"
      break;
    case 6:
      return "10%"
      break;
    case 7:
      return "10%"
      break;
    case 8:
      return "10%"
      break;
    case 9:
      return "10%"
      break;
    case 10:
      return "25%"
      break;
    case 11:
      return "80%"
      break;
    case 12:
      return "100%"
      break;
    default:
      return "100%"
  }
}

var lunchDisplay = function(date) {
  var el = document.querySelector(".message");
  el.innerText = getMessage(date);
};

var toggleElementView = function(el) {
  if(el.style.display === "none" || el.style.display === "") {
    el.style.display = "block";
  } else {
    el.style.display = "none";
  }
}

var setCustomMessage = function(value) {
  var el = document.querySelector(".message");
  el.innerText = value;
};


document.querySelector(".message").onclick = function(event){
  // turn text into input
  // capture return event to do setCustomMessage
}

document.querySelector(".toggle-options").onclick = function(event){
  event.preventDefault();
  var options = document.querySelector("#options");
  if(options.style.display === "none" || options.style.display === "") {
    options.style.display = "block";
  } else {
    options.style.display = "none";
  }
};

document.querySelector(".toggle-countdown").onclick = function(event){
  console.log(event)
  event.preventDefault();
  toggleElementView(document.querySelector(".countdown"));
}

document.querySelector(".toggle-message").onclick = function(event){
  event.preventDefault();
  toggleElementView(document.querySelector(".message"));
}

document.querySelector(".toggle-progress").onclick = function(event){
  event.preventDefault();
  toggleElementView(document.querySelector(".meter"));
}

var check = function(){
  date = new Date();
  // Test Hours Here
  // date.setHours(16);
  countdown(date);
  lunchDisplay(date);
  progressBar(date);
}

check();

// 1 Minute = 60000
// 1 Second = 1000
setInterval(check, 1000);
