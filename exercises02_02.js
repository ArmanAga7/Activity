$(function ()
{
    $('.accordion :first').before($('.accordion .primedary:last'));       
    $('#rightArrow img').click(function()
    {
        var primedary_width = $('.primary').width();
        var item_width = $('.accordion .primedary').outerWidth() + 10;
        var left_indent = parseInt($('.accordion').css('left')) - 320;
        $('.accordion:not(:animated)').animate({'left' : left_indent},500,function()
        {
            $('.accordion .primedary:last').after($('.accordion .primedary:first')); 
            $('.accordion').css({'left' : '-210px'});
        }); 
    });
    
    $('#leftArrow img').click(function()
    {
        var item_width = $('.primary').outerWidth() + 320;
        var left_indent = parseInt($('.accordion').css('left')) + item_width;
        $('.accordion:not(:animated)').animate({'left' : left_indent},500,function()
        {         
            $('.accordion .primedary:first').before($('.accordion .primedary:last')); 
            $('.accordion').css({'left' : '-210px'});
        });    
    });
    $(".secondary").hide();
    $("#divimg_01, #divimg_02, #divimg_03, #divimg_04, #divimg_05").click(function(){
        $(".open").hide('slide', {direction: 'right'}, 500);
        $(".secondary").animate({'width': 'toggle'}, 300);
        $('.primedary').css({'left' : '-320px'});

    }),

    $(".primedary").on("click", function()
    {
        var index = $(this).index();
        console.log(index);
        $(".primedary:nth-child(" + (parseInt(index) + 1) + ")").show();
        $(this).insertBefore( $( ".primedary:nth-child(1)" ) );
        $('.primedary').css({'margin-left' : '330px'}); 
    }),
    $(".button_01, .button_02, .button_03, .button_04, .button_05").click(function()
    {   
        $(".primedary:first").insertBefore($('.accordion .primedary:nth-child('+(2)+')'));
        $(".open").animate('slide', {direction: 'right'}, 500);
        $(".open").show('slide', {direction: 'right'}, 500);
        $(".secondary").animate({'width': 'toggle'}, 300);
    });
});




    