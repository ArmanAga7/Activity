$(document).ready(function() {
var rollercoaster

   function showPause() {
        $('#pauseButton').show();
        $('#playButton').hide();
        
    }
                                
    function showPlay() {
        $('#pauseButton').hide();
        $('#playButton').show();
        
    }

    function setCarousel()
    {
        clearInterval(rollercoaster);
        
        rollercoaster = setInterval(function ()
        {
            setCarousel();
            moveRight();
        },  3000);
       
    }

    $('#playButton').click(function()
    {
        $('#imageslider').addClass('play');
        stop = false;
        showPause();
        setCarousel();


    });


    $('#pauseButton').click(function()
    {
        $('#imageslider').removeClass('play');
        stop = true;
        showPlay();
        clearInterval(rollercoaster);
        
    });
       });