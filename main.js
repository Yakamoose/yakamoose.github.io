
//NAVBAR MOBILE MENU RESPONSIVENESS TRIGGER
function myFunction() {
    var x = document.getElementById("myTopNav");
    if (x.className === "nav nav-fill d-flex align-items-center") {
      x.className += "nav nav-fill d-flex align-items-center responsive";
    } else {
      x.className = "nav nav-fill d-flex align-items-center";
    }
  }



//CAROUSEL JS 
  var $item = $('.carousel-item'); 
  var $wHeight = $(window).height();
  $item.eq(0).addClass('active');
  $item.height($wHeight); 
  $item.addClass('full-screen');
  
  $('.carousel img').each(function() {
    var $src = $(this).attr('src');
    var $color = $(this).attr('data-color');
    $(this).parent().css({
      'background-image' : 'url(' + $src + ')',
      'background-color' : $color
    });
    $(this).remove();
  });
  
  $(window).on('resize', function (){
    $wHeight = $(window).height();
    $item.height($wHeight);
  });
  
  $('.carousel').carousel({
    interval: 6000,
    pause: "false"
  });


  

  //COUNTDOWN CLOCK

  // set the date we're counting down to
var target_date = new Date('September, 17, 2022, 16:30:00 PST').getTime();
 
// variables for time units
var days, hours, minutes, seconds;
 
// get tag element
var countdown = document.getElementById('countdown');
 
// update the tag with id "countdown" every 1 second
setInterval(function () {
 
    // find the amount of "seconds" between now and target
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;
 
    // do some time calculations
    days = parseInt(seconds_left / 86400);
    seconds_left = seconds_left % 86400;
     
    hours = parseInt(seconds_left / 3600);
    seconds_left = seconds_left % 3600;
     
    minutes = parseInt(seconds_left / 60);
    seconds = parseInt(seconds_left % 60);
     
    // format countdown string + set tag value
    countdown.innerHTML =
      '<ul class="nav cd-clock nav-fill d-flex align-items-center"> <li class="nav-item"> <h1>' + days + '</h1> <p>DAYS</p> </li>        <li class="nav-item"> <h1>' + hours + '</h1>  <p>HOURS</p>  </li> <li class="nav-item">  <h1>' + minutes + '</h1> <p>MINUTES</p> </li>  <li class="nav-item"> <h1>' + seconds + '</h1>  <p>SECONDS</p>  </li>  </ul>'; 
 
}, 1000);