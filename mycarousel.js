$(document).ready(function() {


  var Count = $('#imageslider ul li').length;
  var Width = $('#imageslider ul li').width();
  var Height = $('#imageslider ul li').height();
  var UlWidth = Count * Width;

  var numpageCount = $('#numpageslider ul li').length;
  var numpageWidth = $('#numpageslider ul li').width();
  var numpageHeight = $('#numpageslider ul li').height();
  var numpageUlWidth = numpageCount * numpageWidth;
  
  $('#imageslider').css({ width: Width, height: Height });  
  $('#imageslider ul').css({ width: UlWidth, marginLeft: - Width });
  $('#imageslider ul li:last-child').prependTo('#imageslider ul');

$('#numpageslider').css({ width: numpageWidth, height: numpageHeight });  
  $('#numpageslider ul').css({ width: numpageUlWidth, marginLeft: - numpageWidth });
  $('#numpageslider ul li:last-child').prependTo('#numpageslider ul');

    function turnLeft() {
        $('#imageslider ul').animate({
            left: + Width
        }, 2000, function () {
            $('#imageslider ul li:last-child').prependTo('#imageslider ul');
            $('#imageslider ul').css('left', '');
        });
                $('#numpageslider ul').animate({
            left: + numpageWidth
        }, 2000, function () {
            $('#numpageslider ul li:last-child').prependTo('#numpageslider ul');
            $('#numpageslider ul').css('left', '');
        });

    };

    function turnRight() {
        $('#imageslider ul').animate({
            left: - Width
        }, 2000, function () {
            $('#imageslider ul li:first-child').appendTo('#imageslider ul');
            $('#imageslider ul').css('left', '');
        });
                $('#numpageslider ul').animate({
            left: - numpageWidth
        }, 2000, function () {
            $('#numpageslider ul li:first-child').appendTo('#numpageslider ul');
            $('#numpageslider ul').css('left', '');
        });
    };

    $('a.previous_arrow').click(function () {
        turnLeft();
    });

    $('a.next_arrow').click(function () {
        turnRight();
    });

//revised code from: http://stackoverflow.com/questions/19989220/play-pause-toggle-button-jquery-slideshow
//this is the pause and play function..
var rollercoaster
                                
    function showPause() {
      $('#pauseButton').hide();
        $('#playButton').show();
        
        
    }
                                
    function showPlay() {
        $('#pauseButton').hide();
        $('#playButton').show();
        
    }

    function setCarousel(){
        clearInterval(rollercoaster);
        
        rollercoaster = setInterval(function (){
            setCarousel();
            turnRight();
        }, 2000);
       
    }

    $('#playButton').click(function(){
        $('#imageslider').addClass('play');
        stop = false;
        showPause();
        setCarousel();


    });


    $('#pauseButton').click(function(){
        $('#imageslider').removeClass('play');
        stop = true;
        showPlay();
        clearInterval(rollercoaster);
        
    });

});  

